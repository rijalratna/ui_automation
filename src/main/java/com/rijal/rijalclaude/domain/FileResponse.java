package com.rijal.rijalclaude.domain;

import java.util.List;

public class FileResponse {
    private String name;
    private String type;
    private boolean isDirectory;
    private long lastModified;
    private String webkitRelativePath;
    private int size;
    private List<String> arrayBuffer;
    private Object slice;
    private Object stream;
    private String text;
    public FileResponse(String name, String type) {
        this.name = name;
        this.type = type;
    }

    public FileResponse(String name, String type, boolean isDirectory, long lastModified, String webkitRelativePath, int size, List<String> arrayBuffer, Object slice, Object stream, String text) {
        this.name = name;
        this.type = type;
        this.isDirectory = isDirectory;
        this.lastModified = lastModified;
        this.webkitRelativePath = webkitRelativePath;
        this.size = size;
        this.arrayBuffer = arrayBuffer;
        this.slice = slice;
        this.stream = stream;
        this.text = text;
    }

    public boolean isDirectory() {
        return isDirectory;
    }

    public void setDirectory(boolean directory) {
        isDirectory = directory;
    }

    public long getLastModified() {
        return lastModified;
    }

    public void setLastModified(long lastModified) {
        this.lastModified = lastModified;
    }

    public String getWebkitRelativePath() {
        return webkitRelativePath;
    }

    public void setWebkitRelativePath(String webkitRelativePath) {
        this.webkitRelativePath = webkitRelativePath;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public List<String> getArrayBuffer() {
        return arrayBuffer;
    }

    public void setArrayBuffer(List<String> arrayBuffer) {
        this.arrayBuffer = arrayBuffer;
    }

    public Object getSlice() {
        return slice;
    }

    public void setSlice(Object slice) {
        this.slice = slice;
    }

    public Object getStream() {
        return stream;
    }

    public void setStream(Object stream) {
        this.stream = stream;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    // Getters and setters
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
}

