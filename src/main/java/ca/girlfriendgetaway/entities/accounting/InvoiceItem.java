package ca.girlfriendgetaway.entities.accounting;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.ManyToOne;

@Entity
@IdClass(InvoiceItemPK.class)
public class InvoiceItem {

	private Invoice invoice;
	private int lineNo;
	private Item item;
	private int quantity;
	
	public InvoiceItem() {}
	
	public InvoiceItem(Invoice invoice, Item item, int quantity) {
		this.setInvoice(invoice);
		this.setItem(item);
		this.setQuantity(quantity);
		this.setLineNo(invoice);
	}
	
	@Id
	@ManyToOne
	public Invoice getInvoice() {
		return invoice;
	}
	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}
	
	@Id
	public int getLineNo() {
		return lineNo;
	}
	public void setLineNo(int lineNo) {
		this.lineNo = lineNo;
	}
	public void setLineNo(Invoice invoice) {
		this.setLineNo(invoice.addLineItem());
	}
	@ManyToOne
	public Item getItem() {
		return item;
	}
	public void setItem(Item item) {
		this.item = item;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
	
}
