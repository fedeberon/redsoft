package com.rpsistemas.configuration;

import org.hibernate.Session;

import java.io.Closeable;

public class CloseableSession implements Closeable {

    private final Session session;

    public CloseableSession(Session session) {
        this.session = session;
    }

    public Session delegate() {
        return session;
    }

    @Override
    public void close() {
        if(session != null && session.isOpen()){
            session.close();
        }
    }
}
