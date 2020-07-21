package ca.girlfriendgetaway.security;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import ca.girlfriendgetaway.entities.user.RoleEnum;

public class MyUserDetails implements UserDetails {

	private String username;
	private String password;
	private List authorities;
	private boolean enabled;
	
	public MyUserDetails(String username) {
		this.username= username;
	}
	
	public MyUserDetails() {}
	
	public MyUserDetails(String username, String password, boolean enabled, RoleEnum role) {
		this.username=username;
		this.password=password;
		this.enabled = enabled;
		this.setAuthorities(role.toString());
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return this.authorities;
	}
	
	public void setAuthorities(String role) {
		this.authorities = Arrays.asList(new SimpleGrantedAuthority(role));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.username;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return this.enabled;
	}
	
	public boolean isAdmin() {
		boolean isAdmin = false;
		for (GrantedAuthority role : this.getAuthorities()) {
			if (role.getAuthority().equals("ROLE_ADMIN")) {
				isAdmin = true;
			} 
		}
		return isAdmin;
	}

	
	
}
