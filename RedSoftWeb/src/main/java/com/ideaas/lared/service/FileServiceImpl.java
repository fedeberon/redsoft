package com.ideaas.lared.service;

import com.ideaas.lared.domain.Image;
import com.ideaas.lared.service.interfaces.IFileService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class FileServiceImpl implements IFileService {

    @Value("${file.upload-dir}")
    private String filePathContent;


    @Override
    public File getVersionFile(File theDir, File theDirWithFile) {
        Integer version = 1;

        while(theDirWithFile.exists()){
            File fileRename = new File(theDir.getAbsolutePath() + "//" + getFileName(theDirWithFile) + "_V" + version + "." + getFileExtension(theDirWithFile));
            theDirWithFile.renameTo(fileRename);
            version++;
        }

        return theDirWithFile;
    }

    @Override
    public String getFileExtension(File file) {
        String name = file.getName();
        try {
            return name.substring(name.lastIndexOf(".") + 1);
        } catch (Exception e) {
            return "";
        }
    }

    @Override
    public String getFileName(File file) {
        String name = file.getName();
        try {
            return name.substring(0, name.lastIndexOf("."));
        } catch (Exception e) {
            return "";
        }
    }

    @Override
    public List<Image> readFiles(String url) throws IOException {
        final List<Image> images = new ArrayList<>();
        Files.walkFileTree(Paths.get(url), new SimpleFileVisitor<Path>() {
            @Override
            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                try {
                    images.add(new Image(file.getFileName().toString(), false));
                }
                finally {
                    return FileVisitResult.CONTINUE;
                }
            }
        });
        Collections.sort(images,new Comparator<Image>(){
            @Override
            public int compare(Image o1, Image o2) {
                return o1.getUrl().compareTo(o2.getUrl());
            }
        });

        return images;
    }

    @Override
    public void createDirectoryForImagesOf(String code) {
        File fileCertificado = new File(filePathContent + code);
        if (!fileCertificado.exists()) {
            fileCertificado.mkdir();
        }
    }

    @Override
    public void saveImage(MultipartFile file) {
        if (file.isEmpty()) return;
        try {
            File theDir;
            theDir = new File(filePathContent);
            File theDirWithFile = new File(theDir.getAbsolutePath() + "//" + file.getOriginalFilename());
            theDirWithFile = this.getVersionFile(theDir, theDirWithFile);

            //Eliminamos las imagenes existentes
            File[] files = theDir.listFiles();
            // for (File fileIndex : files){
            //     fileIndex.delete();
            // }

            // if (!theDir.exists()) {
            //     theDir.mkdir();
            // }

            //Guardamos la imagen nueva
            file.transferTo(theDirWithFile);
        } catch (IllegalStateException | IOException e) {
            e.printStackTrace();
        }
    }
}