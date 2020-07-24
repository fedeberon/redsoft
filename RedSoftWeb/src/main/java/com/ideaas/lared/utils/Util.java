package com.ideaas.lared.utils;

import com.sun.org.slf4j.internal.Logger;
import com.sun.org.slf4j.internal.LoggerFactory;

import java.time.format.DateTimeFormatter;
import java.util.Map;
import java.util.function.Consumer;

public class Util {

    private static final Logger LOGGER = LoggerFactory.getLogger(Util.class);

    public static <T> T getValue(Map<String, T> map, String key){
        try {
            return map.get(key);
        }
        catch (NullPointerException e){
            e.printStackTrace();
        }
        return null;
    }


    public static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss[X]");

    public static <T> Consumer<T> wrapper(Consumer<T> consumer) {
        return i -> {
            try {
                consumer.accept(i);
            } catch (NullPointerException e) {
                LOGGER.error("Exception parser data: " + e.getMessage());
            }
        };
    }
}
