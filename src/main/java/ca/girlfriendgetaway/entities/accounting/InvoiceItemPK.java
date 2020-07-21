package ca.girlfriendgetaway.entities.accounting;

import java.io.Serializable;

public class InvoiceItemPK implements Serializable{

	private Invoice invoice;
	private int lineNo;
	
	public InvoiceItemPK(Invoice invoice, int lineNo) {
		this.setInvoice(invoice);
		this.setLineNo(lineNo);
	}

	public Invoice getInvoice() {
		return invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

	public int getLineNo() {
		return lineNo;
	}

	public void setLineNo(int lineNo) {
		this.lineNo = lineNo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((invoice == null) ? 0 : invoice.hashCode());
		result = prime * result + lineNo;
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
		InvoiceItemPK other = (InvoiceItemPK) obj;
		if (invoice == null) {
			if (other.invoice != null)
				return false;
		} else if (!invoice.equals(other.invoice))
			return false;
		if (lineNo != other.lineNo)
			return false;
		return true;
	}
	
	
}
