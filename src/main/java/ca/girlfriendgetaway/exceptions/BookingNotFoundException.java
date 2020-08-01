package ca.girlfriendgetaway.exceptions;

public class BookingNotFoundException extends RuntimeException {
	
	public BookingNotFoundException(Long bookingId) {
		super("Could not find booking " + bookingId);
	}
}
