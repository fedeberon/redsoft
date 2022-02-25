package com.ideaas.lared.web;

import com.ideaas.lared.service.FileServiceImpl;
import com.ideaas.lared.service.FileStorageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Controller
@RequestMapping(value = "/file")
public class FileUploadController {

    @Value("${file.upload-dir}")
    private String filePath;

    private FileServiceImpl fileService;

    private FileStorageServiceImpl fileStorageService;

    @Autowired
    public FileUploadController(FileServiceImpl fileService, FileStorageServiceImpl fileStorageService) {
        this.fileService = fileService;
        this.fileStorageService = fileStorageService;
    }

    // @RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
    // public String uploadFile(@RequestParam MultipartFile file, @RequestParam Long id, RedirectAttributes redirectAttributes) {

    //     fileService.saveImage(file);

    //     // Content content = contentService.getById(id);
    //     // redirectAttributes.addAttribute("id", content.getId());

    //     return "redirect:/";
    // }
    

    @GetMapping("download/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        // Load file as Resource
         Resource resource = fileStorageService.loadFileAsResource(fileName);
        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
        }
        // Fallback to the default content type if type could not be determined
        if(contentType == null) {
            contentType = "application/octet-stream";
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; folder, filename=\"" + hash + "\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @RequestMapping("/delete/{fileName:.+}")
    public String deleteFile(@PathVariable String fileName, HttpServletRequest request) {
        // Load file as Resource
        Resource resource = fileStorageService.loadFileAsResource(fileName);
        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(String.valueOf(resource.getFile().delete()));
        } catch (IOException ex) {
        }
        return "redirect:/content/list";
    }
}