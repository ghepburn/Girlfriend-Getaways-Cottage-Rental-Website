package ca.girlfriendgetaway.exceptions;

public class GetawayNotFoundException extends RuntimeException {
	
	public GetawayNotFoundException(Long getawayId) {
		super("Could not find getaway " + getawayId);
	}
}
