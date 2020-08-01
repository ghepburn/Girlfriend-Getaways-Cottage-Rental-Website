package ca.girlfriendgetaway.controllers;

import java.time.LocalDate;
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
import ca.girlfriendgetaway.entities.business.Getaway;
import ca.girlfriendgetaway.entities.user.Address;
import ca.girlfriendgetaway.entities.user.Authority;
import ca.girlfriendgetaway.entities.user.User;
import ca.girlfriendgetaway.entities.user.RoleEnum;
import ca.girlfriendgetaway.exceptions.GetawayNotFoundException;
import ca.girlfriendgetaway.exceptions.UserNotFoundException;
import ca.girlfriendgetaway.hateaos.models.GetawayRepresentationModel;
import ca.girlfriendgetaway.hateaos.models.UserRepresentationModel;
import ca.girlfriendgetaway.repositories.AuthorityRepository;
import ca.girlfriendgetaway.repositories.BookingRepository;
import ca.girlfriendgetaway.repositories.GetawayRepository;
import ca.girlfriendgetaway.repositories.UserRepository;

import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;

@RestController
@RequestMapping("/api/getaways")
public class GetawayController {

	@Autowired
	GetawayRepository repository;
	
	@Autowired
	BookingRepository bookingRepository;
	
	@Autowired 
	GetawayRepresentationModel representationModel;
	
	@GetMapping
	public Collection<EntityModel<Getaway>> getAllGetaways() {
		return repository.findAll().stream()
			.map(representationModel::toModel)
			.collect(Collectors.toList());
	}
	
	@PostMapping
	public EntityModel<Getaway> addGetaway(@RequestBody Getaway getaway) {
		
		Getaway newGetaway = repository.save(getaway);
		
		Booking booking = newGetaway.getBooking();
		booking.setGetawayId(newGetaway.getId());
		booking.setIsBooked(true);
		booking.setIsAvailable(false);
		booking.setBookedDate(LocalDate.now());
		
		bookingRepository.save(booking);
		getaway.setBooking(booking);
		
		return representationModel.toModel(repository.save(getaway));
	}
	
	@GetMapping("/{getawayId}")
	public EntityModel<Getaway> getGetawayById(@PathVariable Long getawayId) {
		if (repository.existsById(getawayId)) {
			return representationModel.toModel(repository.findById(getawayId).get());
		} else {
			throw new GetawayNotFoundException(getawayId);
		}
	}
	
	@PutMapping("/{getawayId}")
	public EntityModel<Getaway> replaceGetaway(@RequestBody Getaway changedGetaway, @PathVariable Long getawayId) {
		if (repository.existsById(getawayId)) {
			Getaway currentGetaway = repository.findById(getawayId).get();
			currentGetaway.setAttendees(changedGetaway.getAttendees());
			currentGetaway.setBooking(changedGetaway.getBooking());
			currentGetaway.setInvoice(changedGetaway.getInvoice());
			currentGetaway.setNumOfVehicles(changedGetaway.getNumOfVehicles());
			currentGetaway.setNumOfPets(changedGetaway.getNumOfPets());
			currentGetaway.setDesc(changedGetaway.getDesc());
			return representationModel.toModel(repository.save(currentGetaway));
		} else {
			return representationModel.toModel(repository.save(changedGetaway));
		}
	}
	
	@DeleteMapping("/{getaway}")
	public void deleteGetawayById(@PathVariable Long getawayId) {
		repository.deleteById(getawayId);
	}
}