package ca.girlfriendgetaway.security;

public class AuthenticationResponse {

	private String Jwt;
	private String isAdmin;
	private String isEnabled;
	
	public AuthenticationResponse() {}
	
	public AuthenticationResponse(String jwt, String isAdmin, String isEnabled) {
		this.setJwt(jwt);
		this.setAdmin(isAdmin);
		this.setEnabled(isEnabled);
	}

	public String getJwt() {
		return Jwt;
	}

	public void setJwt(String jwt) {
		Jwt = jwt;
	}

	public String getAdmin() {
		return isAdmin;
	}

	public void setAdmin(String isAdmin) {
		this.isAdmin = isAdmin;
	}
	
	public String getEnabled() {
		return isEnabled;
	}

	public void setEnabled(String isEnabled) {
		this.isEnabled = isEnabled;
	}
}
