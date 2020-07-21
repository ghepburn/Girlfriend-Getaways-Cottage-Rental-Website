package ca.girlfriendgetaway.entities.user;

import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Embeddable
public class Address {
	
	private int houseNumber;
	private String Street;
	private String town;
	private String postalCode;
	private String province;
	private String Country;
	
	public Address() {
		this.setStreet("default");
		this.setPostalCode("default");
		this.setProvince("Ontario");
		this.setCountry("Canada");
	}
	
	public Address(int houseNumber, String street, String town, String postalCode, String province,
			String country) {
		this.houseNumber = houseNumber;
		Street = street;
		this.town = town;
		this.postalCode = postalCode;
		this.province = province;
		Country = country;
	}

	public int getHouseNumber() {
		return houseNumber;
	}

	public void setHouseNumber(int houseNumber) {
		this.houseNumber = houseNumber;
	}

	public String getStreet() {
		return Street;
	}

	public void setStreet(String street) {
		Street = street;
	}

	public String getTown() {
		return town;
	}

	public void setTown(String town) {
		this.town = town;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCountry() {
		return Country;
	}

	public void setCountry(String country) {
		Country = country;
	}

	
	
}
