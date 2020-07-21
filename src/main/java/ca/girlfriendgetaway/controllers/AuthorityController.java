package ca.girlfriendgetaway.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.girlfriendgetaway.entities.user.Authority;
import ca.girlfriendgetaway.entities.user.RoleEnum;
import ca.girlfriendgetaway.repositories.AuthorityRepository;

@RestController
@RequestMapping("/api/authorities")
public class AuthorityController {

	@Autowired
	AuthorityRepository repository;
	
	@GetMapping
	public List<Authority> getAllAuthorities() {
		return repository.findAll();
	}
	
	@PostMapping
	public Authority addAuthority(@RequestBody Authority authority) {
		return repository.save(authority);
	}
	
	@GetMapping("/{username}")
	public Authority getAuthorityByUsername(@PathVariable("username") String username) {
		return repository.findByUsername(username);
	}
	
	@PutMapping("/{username}")
	public Authority changeAuthority(@PathVariable("username") String username, @RequestBody Authority changedAuthority) {
		if (repository.existsByUsername(username)) {
			Authority currentAuthority = repository.findByUsername(username);
			currentAuthority.setRole(changedAuthority.getRole());
			currentAuthority.setEnabled(changedAuthority.isEnabled());
			return repository.save(currentAuthority);
		} else {
			changedAuthority.setUsername(username);
			return repository.save(changedAuthority);
		}
	}
	
	@DeleteMapping("/{username}")
	public void deleteAuthority(@PathVariable("username") String username) {
		repository.deleteByUsername(username);
	}
	
//	@GetMapping("/{role}")
//	public List<Authority> getAuthoritiesByRole(@PathVariable("role") RoleEnum role) {
//		List<Authority> allAuthorities = repository.findAll();
//		ArrayList result = new ArrayList();
//		for (Authority authority: allAuthorities) {
//			if (authority.getRole()==role) {
//				result.add(authority);
//			}
//		}
//		return result;
//	}
}
