package com.ideaas.lared.domain;

import javax.persistence.*;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.util.List;
import java.util.Date;

@Entity
@Table(name = "ORDERS")
public class Order {

    @Id
    @Column(name = "ORD_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "order", fetch = FetchType.EAGER)
    @Cascade({CascadeType.PERSIST, CascadeType.MERGE, CascadeType.SAVE_UPDATE})
    private List<Detail> details;

    @Column(name = "ORD_PREFERENCE")
    private String preferenceId;

    @Column(name = "ORD_USER_EMAIL")
    private String userEmail;

    @Column(name = "ORD_CREATION_DATE")
    private Date creationDate = new Date();

    @Column(name = "ORD_PAYED_STATE")
    private Boolean paystate = false;

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

    public Boolean getPaystate(){
        return paystate;
    }

    public void setPaystate(Boolean paystate){
        this.paystate = paystate;
    }

    public Date getLastUpdate(){
        return lastUpdated;
    }

    public void setLastUpdate(Date lastUpdated){
        this.lastUpdated = lastUpdated;
    }    

    public String getUserEmail(){
        return userEmail;
    }

    public void setUserEmail(String userEmail){
        this.userEmail = userEmail;
    }

    public List<Detail> getDetails() {
        return details;
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
