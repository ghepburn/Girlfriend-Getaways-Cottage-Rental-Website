package ca.girlfriendgetaway.entities.business;

import javax.persistence.Embeddable;

import ca.girlfriendgetaway.entities.user.User;

@Embeddable
public class Attendee {

	private String firstName;
	private String lastName;
	private String email;
	private boolean payingSeparately;
	private boolean depositPaid;
	private boolean balancePaid;
	
	public Attendee() {}
	
	public Attendee(String firstName, String lastName, String email) {
		this.setFirstName(firstName);
		this.setLastName(lastName);
		this.setEmail(email);
	}
	
	public Attendee(String firstName, String lastName) {
		this.setFirstName(firstName);
		this.setLastName(lastName);
	}
	
	public Attendee(String firstName, String lastName, String email, boolean payingSeparately) {
		this.setFirstName(firstName);
		this.setLastName(lastName);
		this.setEmail(email);
		this.setPayingSeparately(payingSeparately);
	}

	public Attendee(User user) {
		this.setFirstName(user.getFirstName());
		this.setLastName(user.getLastName());
		this.setEmail(user.getEmail());
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isDepositPaid() {
		return depositPaid;
	}

	public void setDepositPaid(boolean depositPaid) {
		this.depositPaid = depositPaid;
	}

	public boolean isBalancePaid() {
		return balancePaid;
	}

	public void setBalancePaid(boolean balancePaid) {
		this.balancePaid = balancePaid;
	}

	public boolean isPayingSeparately() {
		return payingSeparately;
	}

	public void setPayingSeparately(boolean payingSeparately) {
		this.payingSeparately = payingSeparately;
	}
	
}
