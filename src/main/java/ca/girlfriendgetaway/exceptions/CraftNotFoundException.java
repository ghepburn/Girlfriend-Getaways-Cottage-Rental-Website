package ca.girlfriendgetaway.exceptions;

public class CraftNotFoundException extends RuntimeException {
	
	public CraftNotFoundException(Long craftId) {
		super("Could not find craft " + craftId);
	}
}
