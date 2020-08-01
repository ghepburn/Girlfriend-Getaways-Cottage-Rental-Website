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
import ca.girlfriendgetaway.entities.business.Craft;
import ca.girlfriendgetaway.entities.user.Address;
import ca.girlfriendgetaway.entities.user.Authority;
import ca.girlfriendgetaway.entities.user.User;
import ca.girlfriendgetaway.entities.user.RoleEnum;
import ca.girlfriendgetaway.exceptions.BookingNotFoundException;
import ca.girlfriendgetaway.exceptions.CraftNotFoundException;
import ca.girlfriendgetaway.exceptions.UserNotFoundException;
import ca.girlfriendgetaway.hateaos.models.BookingRepresentationModel;
import ca.girlfriendgetaway.hateaos.models.CraftRepresentationModel;
import ca.girlfriendgetaway.hateaos.models.UserRepresentationModel;
import ca.girlfriendgetaway.repositories.AuthorityRepository;
import ca.girlfriendgetaway.repositories.BookingRepository;
import ca.girlfriendgetaway.repositories.CraftRepository;
import ca.girlfriendgetaway.repositories.UserRepository;

import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;

@RestController
@RequestMapping("/api/crafts")
public class CraftController {

	@Autowired
	CraftRepository repository;
	
	@Autowired
	CraftRepresentationModel representationModel;
	
	@GetMapping
	public Collection<EntityModel<Craft>> getAllCrafts() {
		return repository.findAll().stream()
			.map(representationModel::toModel)
			.collect(Collectors.toList());
	}
	
	@PostMapping
	public EntityModel<Craft> addCraft(@RequestBody Craft craft) {
		Craft newCraft = repository.save(craft);
		return representationModel.toModel(newCraft);
	}
	
	@GetMapping("/{craftId}")
	public EntityModel<Craft> getCraftById(@PathVariable long craftId) {
		if (repository.existsById(craftId)) {
			return representationModel.toModel(repository.findById(craftId).get());
		} else {
			throw new CraftNotFoundException(craftId);
		}
	}
	
	@PutMapping("/{craftId}")
	public EntityModel<Craft> replaceBooking(@RequestBody Craft changedCraft, @PathVariable long craftId) {
		if (repository.existsById(craftId)) {
			Craft currentCraft = repository.findById(craftId).get();
			currentCraft.setName(changedCraft.getName());
			currentCraft.setDesc(changedCraft.getDesc());
			currentCraft.setDifficulty(changedCraft.getDifficulty());
			currentCraft.setMaterialCost(changedCraft.getMaterialCost());
			currentCraft.setHoursRequired(changedCraft.getHoursRequired());
			currentCraft.setPricePerPerson(changedCraft.getPricePerPerson());
			return representationModel.toModel(repository.save(currentCraft));
		} else {
			return representationModel.toModel(repository.save(changedCraft));
		}
	}
	
	@DeleteMapping("/{craftId}")
	public void deleteCraftById(@PathVariable Long craftId) {
		repository.deleteById(craftId);
	}
	
}