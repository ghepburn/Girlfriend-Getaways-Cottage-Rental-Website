package ca.girlfriendgetaway.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ca.girlfriendgetaway.entities.accounting.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
	
}
