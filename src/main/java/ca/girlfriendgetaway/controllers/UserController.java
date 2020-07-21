package ca.girlfriendgetaway.controllers;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.girlfriendgetaway.entities.user.Address;
import ca.girlfriendgetaway.entities.user.Authority;
import ca.girlfriendgetaway.entities.user.User;
import ca.girlfriendgetaway.entities.user.RoleEnum;
import ca.girlfriendgetaway.exceptions.UserNotFoundException;
import ca.girlfriendgetaway.hateaos.models.UserRepresentationModel;
import ca.girlfriendgetaway.repositories.AuthorityRepository;
import ca.girlfriendgetaway.repositories.UserRepository;

import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	UserRepository repository;
	
	@Autowired
	AuthorityRepository authRepository;
	
	@Autowired 
	UserRepresentationModel representationModel;
	
	@GetMapping
	public Collection<EntityModel<User>> getAllUsers() {
		return repository.findAll().stream()
			.map(representationModel::toModel)
			.collect(Collectors.toList());
	}
	
	@PostMapping
	public EntityModel<User> addUser(@RequestBody User user) {
		User newUser = repository.save(user);
		authRepository.save(new Authority(newUser.getUsername(), RoleEnum.ROLE_USER, true));
		return representationModel.toModel(newUser);
	}
	
	@GetMapping("/{username}")
	public EntityModel<User> getUserByUsername(@PathVariable String username) {
		if (repository.existsByUsername(username)) {
			return representationModel.toModel(repository.findByUsername(username));
		} else {
			throw new UserNotFoundException(username);
		}
	}
	
	@PutMapping("/{username}")
	public EntityModel<User> replaceUser(@RequestBody User changedUser, @PathVariable String username) {
		if (repository.existsByUsername(username)) {
			User currentUser = repository.findByUsername(username);
			currentUser.setUsername(changedUser.getUsername());
			currentUser.setFirstName(changedUser.getFirstName());
			currentUser.setLastName(changedUser.getLastName());
			currentUser.setEmail(changedUser.getEmail());
			currentUser.setPassword(changedUser.getPassword());
			
			return representationModel.toModel(repository.save(currentUser));
		} else {
			return representationModel.toModel(repository.save(changedUser));
		}
	}
	
	@DeleteMapping("/{username}")
	public void deleteUserByUsername(@PathVariable String username) {
		repository.deleteByUsername(username);
	}

}
