package com.rijal.rijalclaude.domain;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

@Component
public class ControlRequest {

    private String deviceId;
    private String action;
    private String deviceName;

    // Constructor
    public ControlRequest(String deviceId, String action) {
        this.deviceId = deviceId;
        this.action = action;
    }

    // Getters and Setters
    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    @Override
    public String toString() {
        return "ControlRequest{" +
                "deviceId='" + deviceId + '\'' +
                ", action='" + action + '\'' +
                '}';
    }

    public String getDeviceName() {
        return deviceName;
    }

    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }
}

