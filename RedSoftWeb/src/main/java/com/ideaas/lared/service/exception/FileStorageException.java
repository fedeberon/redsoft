package com.ideaas.lared.service.exception;

public class FileStorageException extends RuntimeException  {

    public FileStorageException(String message) {
        super(message);
    }

    public FileStorageException(String message, Throwable cause) {
        super(message, cause);
    }
}