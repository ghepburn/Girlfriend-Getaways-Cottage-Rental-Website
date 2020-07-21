package ca.girlfriendgetaway.hateaos.models;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import ca.girlfriendgetaway.controllers.AuthorityController;
import ca.girlfriendgetaway.controllers.UserController;
import ca.girlfriendgetaway.entities.user.User;
import ca.girlfriendgetaway.repositories.AuthorityRepository;

@Component
public class UserRepresentationModel implements RepresentationModelAssembler<User, EntityModel<User>> {

	@Autowired
	AuthorityRepository authRepository;
	
	@Override
	public EntityModel<User> toModel(User user) {
		// TODO Auto-generated method stub
		return EntityModel.of(user,
		        linkTo(methodOn(UserController.class).getUserByUsername(user.getUsername())).withSelfRel(),
		        linkTo(methodOn(UserController.class).getAllUsers()).withRel("users"),
		        linkTo(methodOn(AuthorityController.class).getAuthorityByUsername(user.getUsername())).withRel("authority")
				);
		}
	}

