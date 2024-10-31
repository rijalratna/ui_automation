package com.rijal.rijalclaude.controller;

import com.rijal.rijalclaude.domain.HomeAutomation;
import com.rijal.rijalclaude.service.AlexaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@RestController
@RequestMapping("/api/alexa")
public class AlexaController {

    @Autowired
    private AlexaService alexaService;



    @GetMapping("/skills")
    public ResponseEntity<List<HomeAutomation>> getSkills() {
        List<HomeAutomation> skills = alexaService.fetchAllSkills();
        return ResponseEntity.ok(skills);
    }

    @GetMapping("/devices")
    public List<HomeAutomation> listDevices() {
        return alexaService.listDevices();
    }

    @PostMapping("/control")
    public String controlDevice(@RequestBody HomeAutomation device) {
        return alexaService.controlDevice(device);
    }

    @PostMapping("/addSkill")
    public String addSkill(@RequestBody String skillName) {
        return alexaService.addSkill(skillName);
    }
}
