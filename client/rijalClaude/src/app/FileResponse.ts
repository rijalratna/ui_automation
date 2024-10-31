export interface FileResponse {
    filePath: string;
    name: string;
    type: string;
    isDirectory: boolean;
    lastModified: number;
    webkitRelativePath: string;
    size: number;
    arrayBuffer: any;
    slice: any;
    stream: any;
    text: any;
}
