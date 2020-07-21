package ca.girlfriendgetaway.entities.business;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import ca.girlfriendgetaway.entities.user.User;


@Entity
public class Booking {

	private Long id;
	private Getaway getaway;
	private Date startDate;
	private Date endDate;
	private Date bookedDate;
	private User bookedBy;
	
	public Booking() {}

	public Booking(Getaway getaway, Date startDate, Date endDate, Date bookedDate, User bookedBy) {
		this.getaway = getaway;
		this.startDate = startDate;
		this.endDate = endDate;
		this.bookedDate = bookedDate;
		this.bookedBy = bookedBy;
	}
	
	public Booking(Date startDate, Date endDate, Date bookedDate, User bookedBy) {
		this.startDate = startDate;
		this.endDate = endDate;
		this.bookedDate = bookedDate;
		this.bookedBy = bookedBy;
	}

	@Id @GeneratedValue 
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@OneToOne
	public Getaway getGetaway() {
		return getaway;
	}

	public void setGetaway(Getaway getaway) {
		this.getaway = getaway;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Date getBookedDate() {
		return bookedDate;
	}

	public void setBookedDate(Date bookedDate) {
		this.bookedDate = bookedDate;
	}

	@ManyToOne
	@JoinColumn(name="user_id")
	public User getBookedBy() {
		return bookedBy;
	}

	public void setBookedBy(User bookedBy) {
		this.bookedBy = bookedBy;
	}
	
	
	
	
}
