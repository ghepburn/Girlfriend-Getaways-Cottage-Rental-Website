import React, { useContext, useEffect } from 'react';

import BookingManager from "../../managers/BookingManager";
import BookingContext from "../../globalState/bookingContext/BookingContext";

const BookingDataAPICall = (props) => {
    
    const bookingContext = useContext(BookingContext);

     // request booking data

     useEffect(( async () => {
        const bookings = await BookingManager.getAllBookings();
        bookingContext.setBookings(bookings);
    }), [])
    
    return null;
}
 
export default BookingDataAPICall;