package com.ideaas.lared.restController;

import com.ideaas.lared.service.FileServiceImpl;
import com.ideaas.lared.service.FileStorageServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/file")
public class FileUploaderRestController {

    private FileStorageServiceImpl fileStorageService;
    private FileServiceImpl fileService;

    @Autowired
    public FileUploaderRestController(FileStorageServiceImpl fileStorageService, FileServiceImpl fileService) {
        this.fileStorageService = fileStorageService;
        this.fileService = fileService;
    }

    @RequestMapping(value = "uploadFile" , method = RequestMethod.POST , consumes = "multipart/form-data")
    public void save(@RequestParam MultipartFile file) {

        fileService.saveImage(file);
    }
}