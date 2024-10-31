package com.rijal.rijalclaude.controller;

import com.rijal.rijalclaude.domain.FileResponse;
import com.rijal.rijalclaude.service.NasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class FileController {
@Autowired
    NasService nasService;
    private final String BASE_DIRECTORY = System.getProperty("user.dir")+"/claude-storage/";

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFiles(
            @RequestParam("files") MultipartFile[] files,
            @RequestParam("folder") String folder,
            @RequestParam("username") String username) {

        String userFolderPath = BASE_DIRECTORY + File.separator + username + File.separator + folder;
        File userFolder = new File(userFolderPath);
        if (!userFolder.exists()) {
            userFolder.mkdirs();
        }
        for (MultipartFile file : files) {
            try {
                Files.copy(file.getInputStream(), Paths.get(userFolderPath, file.getOriginalFilename()));
            } catch (IOException e) {
                e.printStackTrace();
                return ResponseEntity.status(500).body(Collections.singletonMap("ERROR", "Failed to upload files."));
            }
        }

        return ResponseEntity.ok(Collections.singletonMap("SUCCESS", "Files uploaded successfully"));
    }

    @DeleteMapping("/files")
    public ResponseEntity<?> deleteFile(
            @RequestParam("username") String username,
            @RequestParam("folder") String folder,
            @RequestParam("fileName") String fileName) {

        // Construct the file path using the provided parameters
        String filePath = BASE_DIRECTORY + File.separator + username + File.separator + folder + File.separator + fileName;
        File fileToDelete = new File(filePath);

        if (fileToDelete.exists() && fileToDelete.isFile()) {
            // Attempt to delete the file
            if (fileToDelete.delete()) {
                return ResponseEntity.ok(Collections.singletonMap("SUCCESS", "File deleted successfully"));
            } else {
                return ResponseEntity.status(500).body(Collections.singletonMap("ERROR", "Failed to delete file."));
            }
        } else {
            return ResponseEntity.status(404).body(Collections.singletonMap("ERROR", "File not found."));
        }
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<?> getUserFiles(@PathVariable String username) {
        try {
            if (username == null || username.isEmpty()) {
                return ResponseEntity.badRequest().body(Collections.singletonMap("ERROR", "Username is required"));
            }
            List<FileResponse> userFiles = nasService.getUserFiles(username,"");
            return ResponseEntity.ok(userFiles);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.singletonMap("ERROR", "Unexpected server error"));
        }
    }

    @GetMapping("/user/{username}/{folder}")
    public ResponseEntity<?> getFilesInFolder(@PathVariable String username, @PathVariable String folder) {
        List<FileResponse> folderFiles = nasService.getUserFiles(username,folder);
        return ResponseEntity.ok(folderFiles);
    }

    @GetMapping("/user/{username}/{path:.+}")
    public ResponseEntity<?> getFilesByPath(@PathVariable String username, @PathVariable String path) {
        List<FileResponse> files = nasService.getUserFiles(username , path);
        return ResponseEntity.ok(files);
    }
}

