package ca.girlfriendgetaway.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ca.girlfriendgetaway.entities.business.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
	
}