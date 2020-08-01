package ca.girlfriendgetaway.hateaos.models;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import ca.girlfriendgetaway.controllers.AuthorityController;
import ca.girlfriendgetaway.controllers.BookingController;
import ca.girlfriendgetaway.controllers.CraftController;
import ca.girlfriendgetaway.controllers.UserController;
import ca.girlfriendgetaway.entities.business.Booking;
import ca.girlfriendgetaway.entities.business.Craft;
import ca.girlfriendgetaway.entities.user.User;
import ca.girlfriendgetaway.repositories.AuthorityRepository;

@Component
public class CraftRepresentationModel implements RepresentationModelAssembler<Craft, EntityModel<Craft>> {
	
	@Override
	public EntityModel<Craft> toModel(Craft craft) {
		// TODO Auto-generated method stub
		return EntityModel.of(craft,
		        linkTo(methodOn(CraftController.class).getCraftById(craft.getId())).withSelfRel(),
		        linkTo(methodOn(CraftController.class).getAllCrafts()).withRel("crafts")
		        );
		}

	}

