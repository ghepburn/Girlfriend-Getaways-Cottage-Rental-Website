package ca.girlfriendgetaway.entities.business;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
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
	private List<User> members;
	private List<Craft> crafts;
	private String invoice;
	private int numOfVehicles;
	private int numOfPets;
	private String desc;
	
	public Getaway() {}
	
	public Getaway(Booking booking, List<User> members, List<Craft> crafts, String invoice, int numOfVehicles, int numOfPets, String desc) {
		this.booking = booking;
		this.setMembers(members);
		this.crafts = crafts;
		this.invoice = invoice;
		this.numOfVehicles = numOfVehicles;
		this.numOfPets = numOfPets;
		this.desc = desc;
	}

	@Id @GeneratedValue
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	@OneToOne(mappedBy="getaway", cascade=CascadeType.ALL)
	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
		booking.setGetaway(this);
	}
	
	@OneToMany
	public List<User> getMembers() {
		return members;
	}

	public void setMembers(List<User> members2) {
		this.members = members2;
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
