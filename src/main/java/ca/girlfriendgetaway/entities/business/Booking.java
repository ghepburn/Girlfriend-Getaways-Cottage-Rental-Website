package ca.girlfriendgetaway.entities.business;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import ca.girlfriendgetaway.entities.user.User;


@Entity
public class Booking {

	private Long id;
	private LocalDate startDate;
	private LocalDate endDate;
	private boolean isBooked;
	private boolean isAvailable;
	private LocalDate bookedDate;
	private User bookedBy;
	private Long getawayId;
	
	public Booking() {}

	public Booking(LocalDate startDate, LocalDate endDate) {
		this.setStartDate(startDate);
		this.setEndDate(endDate);
		this.setIsAvailable(true);
	}
	
	public Booking(LocalDate startDate, LocalDate endDate, boolean isAvailable) {
		this.setStartDate(startDate);
		this.setEndDate(endDate);
		this.setIsAvailable(isAvailable);
	}

	public Booking(LocalDate startDate, LocalDate endDate, boolean isBooked, boolean isAvailable, LocalDate bookedDate,
			User bookedBy, Getaway getaway) {
		this.setStartDate(startDate);
		this.setEndDate(endDate);
		this.setIsBooked(isBooked);
		this.setIsAvailable(isAvailable);
		this.setBookedDate(bookedDate);
		this.setBookedBy(bookedBy);
		this.setGetawayId(getaway.getId());
	}

	@Id @GeneratedValue 
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getGetawayId() {
		return getawayId;
	}

	public void setGetawayId(Long getawayId) {
		this.getawayId = getawayId;
		
	}

	@DateTimeFormat(iso = ISO.DATE)
	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	@DateTimeFormat(iso = ISO.DATE)
	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	@DateTimeFormat(iso = ISO.DATE)
	public LocalDate getBookedDate() {
		return bookedDate;
	}

	public void setBookedDate(LocalDate bookedDate) {
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

	public boolean getIsBooked() {
		return isBooked;
	}

	public void setIsBooked(boolean isBooked) {
		this.isBooked = isBooked;
	}

	public boolean getIsAvailable() {
		return isAvailable;
	}

	public void setIsAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}
	
	
}
