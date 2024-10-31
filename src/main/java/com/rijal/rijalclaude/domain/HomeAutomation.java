package com.rijal.rijalclaude.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

@Component
public class HomeAutomation {
    @Id
    private String id; // MongoDB will generate this automatically
    private String name;
    private String type;
    private String status; // e.g., "on", "off", or "temperature"

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
