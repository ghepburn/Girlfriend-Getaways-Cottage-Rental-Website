package ca.girlfriendgetaway.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import ca.girlfriendgetaway.entities.user.Authority;
import ca.girlfriendgetaway.entities.user.User;

public interface AuthorityRepository extends JpaRepository<Authority, String> {

	Authority findByUsername(@Param("username") String username);
	boolean existsByUsername(@Param("username") String username);
	void deleteByUsername(@Param("username") String username);
	
}