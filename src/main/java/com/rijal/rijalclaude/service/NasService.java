package com.rijal.rijalclaude.service;
import com.rijal.rijalclaude.domain.FileResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class NasService {

    public final String BASE_DIRECTORY = System.getProperty("user.dir")+"/claude-storage/";
    public void uploadFile(Path userFolder, MultipartFile file) throws IOException {
        if (!Files.exists(userFolder)) {
            Files.createDirectories(userFolder);
        }
        Files.copy(file.getInputStream(), userFolder.resolve(Objects.requireNonNull(file.getOriginalFilename())), StandardCopyOption.REPLACE_EXISTING);
    }

    public List<String> getFiles(String username) throws IOException {
            return Files.walk(Paths.get(BASE_DIRECTORY+username), 1)
                    .filter(Files::isDirectory)
                    .map(path -> path.getFileName().toString())
                    .toList();
    }
    public List<FileResponse> getUserFiles(String username, String filePath) {
        List<FileResponse> files = new ArrayList<>();
        String path = username;

        // Build the path including any subdirectories
        if (!filePath.trim().isEmpty()) {
            path = path + "/" + filePath;
        }

        // Start recursive file retrieval
        File userDirectory = new File(BASE_DIRECTORY + path);
        getAllFilesRecursively(userDirectory, files, userDirectory.getAbsolutePath());

        return files;
    }

    // Recursive helper method to retrieve files and folders
    private void getAllFilesRecursively(File directory, List<FileResponse> files, String basePath) {
        if (directory.exists() && directory.isDirectory()) {
            File[] fileList = directory.listFiles();

            if (fileList != null) {
                for (File file : fileList) {
                    String relativePath = file.getAbsolutePath().replace(basePath, "").replace(file.getName(), "");

                    // Add file/folder to the list
                    files.add(new FileResponse(
                            file.getName(),
                            file.isDirectory() ? "folder" : "file",
                            file.isDirectory(),
                            file.lastModified(),
                            relativePath,
                            (int) file.getTotalSpace(),
                            List.of(""),
                            "",
                            "",
                            ""
                    ));

                    // Recurse if it's a directory
                    if (file.isDirectory()) {
                        getAllFilesRecursively(file, files, basePath);
                    }
                }
            }
        }
    }

}
