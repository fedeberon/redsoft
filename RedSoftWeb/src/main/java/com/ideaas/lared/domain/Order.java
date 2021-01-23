package com.ideaas.lared.domain;

import javax.persistence.*;
import java.util.List;
import java.util.Date;

@Entity
@Table(name = "ORDERS")
public class Order {

    @Id
    @Column(name = "ORD_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "order", cascade = CascadeType.PERSIST)
    private List<Detail> details;

    @Column(name = "ORD_PREFERENCE")
    private String preferenceId;

    @Column(name = "ORD_USER_EMAIL")
    private String userEmail;

    @Column(name = "ORD_CREATION_DATE")
    private Date creationDate = new Date();

    @Column(name = "ORD_STATE")
    private String state = "CREATED";

    @Column(name = "ORD_LAST_UPDATED")
    private Date lastUpdated;

    public Order withDetails(List<Detail> details){
        this.details = details;
        return this;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate(){
        return creationDate;
    }

    public void setDate(Date creationDate){
        this.creationDate = creationDate;
    }

    public String getState(){
        return state;
    }

    public void setState(String state){
        this.state = state;
    }

    public Date getLastUpdate(){
        return lastUpdated;
    }

    public void setLastUpdate(Date lastUpdated){
        this.lastUpdated = lastUpdated;
    }

    public List<Detail> getDetails() {
        return details;
    }

    public String getUserEmail(){
        return userEmail;
    }

    public void setUserEmail(String userEmail){
        this.userEmail = userEmail;
    }

    public void setDetails(List<Detail> details) {
        this.details = details;
    }

    public String getPreferenceId() {
        return preferenceId;
    }

    public void setPreferenceId(String preferenceId) {
        this.preferenceId = preferenceId;
    }

    public Order withPreferenceId(String preferenceId) {
        this.preferenceId = preferenceId;
        return this;
    }

}
