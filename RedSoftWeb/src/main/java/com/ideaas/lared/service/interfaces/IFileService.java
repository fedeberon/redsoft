package com.ideaas.lared.service.interfaces;

import com.ideaas.lared.domain.Image;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

public interface IFileService {

    File getVersionFile(File theDir, File theDirWithFile);

    String getFileExtension(File file);

    String getFileName(File file);

    List<Image> readFiles(String url) throws IOException;

    void createDirectoryForImagesOf(String codigo);

    void saveImage(MultipartFile file);
    
}
