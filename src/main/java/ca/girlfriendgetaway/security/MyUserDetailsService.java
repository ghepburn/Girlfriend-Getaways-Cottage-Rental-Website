package ca.girlfriendgetaway.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import ca.girlfriendgetaway.entities.user.Authority;
import ca.girlfriendgetaway.entities.user.User;
import ca.girlfriendgetaway.repositories.AuthorityRepository;
import ca.girlfriendgetaway.repositories.UserRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {
	
	@Autowired
	UserRepository repository;
	
	@Autowired
	AuthorityRepository authRepository;
	
	@Override
	public MyUserDetails loadUserByUsername(String username) {
		User user = repository.findByUsername(username);
		Authority authority = authRepository.findByUsername(username);
		MyUserDetails userDetails = new MyUserDetails(user.getUsername(), user.getPassword(), authority.isEnabled(), authority.getRole());
		
		return userDetails;
	}
}
