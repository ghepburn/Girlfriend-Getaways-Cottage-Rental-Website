package ca.girlfriendgetaway.entities.accounting;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.data.annotation.Transient;

import ca.girlfriendgetaway.entities.business.Getaway;

@Entity
public class Invoice {
	private Long id;
	private String getaway;
	private Set<InvoiceItem> invoiceItems;
	private Date dateIssued;
	private int numOfItems = 0;
	
	public Invoice() {}
	
	public Invoice(String getaway) {
		this.setGetaway(getaway);
		this.setDateIssued(new Date());
		
	}
	
	@Id @GeneratedValue
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	// @OneToOne
	public String getGetaway() {
		return getaway;
	}
	public void setGetaway(String getaway) {
		this.getaway = getaway;
	}
	
	@OneToMany
	public Set<InvoiceItem> getInvoiceItems() {
		return invoiceItems;
	}

	public void setInvoiceItems(Set<InvoiceItem> invoiceItems) {
		this.invoiceItems = invoiceItems;
	}
	
	public void addInvoiceItem(InvoiceItem invoiceItem) {
		if (this.invoiceItems == null) {
			Set<InvoiceItem> invoiceItems = new HashSet<>();
			invoiceItems.add(invoiceItem);
			this.setInvoiceItems(invoiceItems);
		}
	}

	public Date getDateIssued() {
		return dateIssued;
	}
	public void setDateIssued(Date dateIssued) {
		this.dateIssued = dateIssued;
	}

	@Transient
	public int getNumOfItems() {
		return numOfItems;
	}

	public void setNumOfItems(int numOfItems) {
		this.numOfItems = numOfItems;
	}
	
	public int addLineItem() {
		this.numOfItems ++;
		return getNumOfItems();
	}
	
	public int removeLineItem() {
		this.numOfItems --;
		return getNumOfItems();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Invoice other = (Invoice) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
	
	
}
