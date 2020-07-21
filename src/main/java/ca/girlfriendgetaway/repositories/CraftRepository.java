package ca.girlfriendgetaway.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ca.girlfriendgetaway.entities.business.Craft;

public interface CraftRepository extends JpaRepository<Craft, Long> {
	
}