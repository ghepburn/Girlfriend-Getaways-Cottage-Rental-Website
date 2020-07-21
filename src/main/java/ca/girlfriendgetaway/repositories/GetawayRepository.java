package ca.girlfriendgetaway.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ca.girlfriendgetaway.entities.business.Getaway;

public interface GetawayRepository extends JpaRepository<Getaway, Long> {
	
}
