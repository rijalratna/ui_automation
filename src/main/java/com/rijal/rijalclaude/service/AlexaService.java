package com.rijal.rijalclaude.service;

import com.rijal.rijalclaude.domain.HomeAutomation;
import com.rijal.rijalclaude.repository.HomeAutomationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlexaService {

    private final HomeAutomationRepository smartDeviceRepository;

    @Autowired
    public AlexaService(HomeAutomationRepository smartDeviceRepository) {
        this.smartDeviceRepository = smartDeviceRepository;
    }

    public List<HomeAutomation> listDevices() {
        return smartDeviceRepository.findAll(); // Get all devices from MongoDB
    }

    public String controlDevice(HomeAutomation device) {
        // Logic to control the device (e.g., turn on/off, set temperature)
        HomeAutomation foundDevice = smartDeviceRepository.findById(device.getId()).orElse(null);
        if (foundDevice != null) {
            foundDevice.setStatus(device.getStatus()); // Update the device status
            smartDeviceRepository.save(foundDevice); // Save changes to MongoDB
            return "Controlled " + foundDevice.getName() + " to " + foundDevice.getStatus();
        }
        return "Device not found.";
    }

    public String addSkill(String skillName) {
        // Logic to add a skill (this can be expanded as per your requirements)
        return "Skill '" + skillName + "' added successfully!";
    }

    public List<HomeAutomation> fetchAllSkills() {
        return smartDeviceRepository.findAll();
    }
}
