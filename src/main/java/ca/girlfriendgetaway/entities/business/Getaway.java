package ca.girlfriendgetaway.entities.business;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import ca.girlfriendgetaway.entities.accounting.Invoice;
import ca.girlfriendgetaway.entities.user.User;

@Entity
public class Getaway {

	private Long id;
	private Booking booking;
	private List<Attendee> attendees;
	private List<Craft> crafts;
	private String invoice;
	private int numOfVehicles;
	private int numOfPets;
	private String desc;
	
	public Getaway() {}
	
	public Getaway(Booking booking, List<Attendee> attendees, List<Craft> crafts, String invoice,
			int numOfVehicles, int numOfPets, String desc) {
		this.setBooking(booking);
		this.setAttendees(attendees);
		this.setCrafts(crafts);
		this.setInvoice(invoice);
		this.setNumOfVehicles(numOfVehicles);
		this.setNumOfPets(numOfPets);
		this.setDesc(desc);
	}

	@Id @GeneratedValue
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@OneToOne
	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	@ElementCollection
	public List<Attendee> getAttendees() {
		return this.attendees;
	}

	public void setAttendees(List<Attendee> attendees) {
		this.attendees = attendees;
	}

	@ManyToMany
	public List<Craft> getCrafts() {
		return crafts;
	}

	public void setCrafts(List<Craft> crafts) {
		this.crafts = crafts;
	}

	public String getInvoice() {
		return invoice;
	}

	public void setInvoice(String invoice) {
		this.invoice = invoice;
	}

	public int getNumOfVehicles() {
		return numOfVehicles;
	}

	public void setNumOfVehicles(int numOfVehicles) {
		this.numOfVehicles = numOfVehicles;
	}

	public int getNumOfPets() {
		return numOfPets;
	}

	public void setNumOfPets(int numOfPets) {
		this.numOfPets = numOfPets;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
	
}
