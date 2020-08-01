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

import ca.girlfriendgetaway.entities.business.Booking;
import ca.girlfriendgetaway.entities.user.Address;
import ca.girlfriendgetaway.entities.user.Authority;
import ca.girlfriendgetaway.entities.user.User;
import ca.girlfriendgetaway.entities.user.RoleEnum;
import ca.girlfriendgetaway.exceptions.BookingNotFoundException;
import ca.girlfriendgetaway.exceptions.UserNotFoundException;
import ca.girlfriendgetaway.hateaos.models.BookingRepresentationModel;
import ca.girlfriendgetaway.hateaos.models.UserRepresentationModel;
import ca.girlfriendgetaway.repositories.AuthorityRepository;
import ca.girlfriendgetaway.repositories.BookingRepository;
import ca.girlfriendgetaway.repositories.UserRepository;

import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

	@Autowired
	BookingRepository repository;
	
	
	@Autowired 
	BookingRepresentationModel representationModel;
	
	@GetMapping
	public Collection<EntityModel<Booking>> getAllBookings() {
		return repository.findAll().stream()
			.map(representationModel::toModel)
			.collect(Collectors.toList());
	}
	
	@PostMapping
	public EntityModel<Booking> addBooking(@RequestBody Booking booking) {
		Booking newBooking = repository.save(booking);
		return representationModel.toModel(newBooking);
	}
	
	@GetMapping("/{bookingId}")
	public EntityModel<Booking> getBookingById(@PathVariable long bookingId) {
		if (repository.existsById(bookingId)) {
			return representationModel.toModel(repository.findById(bookingId).get());
		} else {
			throw new BookingNotFoundException(bookingId);
		}
	}
	
	@PutMapping("/{bookingId}")
	public EntityModel<Booking> replaceBooking(@RequestBody Booking changedBooking, @PathVariable long bookingId) {
		if (repository.existsById(bookingId)) {
			Booking currentBooking = repository.findById(bookingId).get();
			currentBooking.setStartDate(changedBooking.getStartDate());
			currentBooking.setEndDate(changedBooking.getEndDate());
			currentBooking.setIsBooked(changedBooking.getIsBooked());
			currentBooking.setIsAvailable(changedBooking.getIsAvailable());
			currentBooking.setBookedDate(changedBooking.getBookedDate());
			currentBooking.setBookedBy(changedBooking.getBookedBy());
			
			
			return representationModel.toModel(repository.save(currentBooking));
		} else {
			return representationModel.toModel(repository.save(changedBooking));
		}
	}
	
	@DeleteMapping("/{bookingId}")
	public void deleteBookingById(@PathVariable Long bookingId) {
		repository.deleteById(bookingId);
	}
	
	
}
