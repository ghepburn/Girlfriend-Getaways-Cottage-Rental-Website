package ca.girlfriendgetaway.hateaos.models;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import ca.girlfriendgetaway.controllers.AuthorityController;
import ca.girlfriendgetaway.controllers.BookingController;
import ca.girlfriendgetaway.controllers.UserController;
import ca.girlfriendgetaway.entities.business.Booking;
import ca.girlfriendgetaway.entities.user.User;
import ca.girlfriendgetaway.repositories.AuthorityRepository;

@Component
public class BookingRepresentationModel implements RepresentationModelAssembler<Booking, EntityModel<Booking>> {
	
	@Override
	public EntityModel<Booking> toModel(Booking booking) {
		// TODO Auto-generated method stub
		return EntityModel.of(booking,
		        linkTo(methodOn(BookingController.class).getBookingById(booking.getId())).withSelfRel(),
		        linkTo(methodOn(BookingController.class).getAllBookings()).withRel("books")
		        );
		}

	}

