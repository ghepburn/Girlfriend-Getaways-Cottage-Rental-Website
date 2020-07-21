package ca.girlfriendgetaway.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import ca.girlfriendgetaway.entities.user.User;

public interface UserRepository extends JpaRepository<User, String> {

	User findByUsername(@Param("username") String username);
	boolean existsByUsername(@Param("username") String username);
	void deleteByUsername(@Param("username") String username);
}
