package ca.girlfriendgetaway.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.girlfriendgetaway.security.AuthenticationRequest;
import ca.girlfriendgetaway.security.AuthenticationResponse;
import ca.girlfriendgetaway.security.MyUserDetails;
import ca.girlfriendgetaway.security.MyUserDetailsService;
import ca.girlfriendgetaway.util.JwtUtil;

@RestController
@RequestMapping("/api/authenticate")
public class AuthenticationController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private MyUserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtil JwtTokenUtil;

	@GetMapping
	public String getAuthenticate() {
		return ("<h1>Get Page Authenticate API</h1>");
	}
	
	@PostMapping
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
			);
		} catch(BadCredentialsException e) {
			throw new Exception("Incorrect username or pasword", e);
		}
		 MyUserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		 
		 boolean isAdmin = userDetails.isAdmin();
		 boolean isEnabled = userDetails.isEnabled();
		 
		 String jwt = JwtTokenUtil.generateToken(userDetails);
		 
		 return ResponseEntity.ok(new AuthenticationResponse(jwt, String.valueOf(isAdmin), String.valueOf(isEnabled)));
		 
	}
}
