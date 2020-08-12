import React, { Component } from "react";
import UserService from "../services/UserService";
import User from './authContext/User';
import AuthContext from './authContext/AuthContext';
import BookingContext from './bookingContext/BookingContext';
import Bookings from "./bookingContext/Bookings";
import Notification from './notificationContext/Notification';
import NotificationContext from "./notificationContext/NotificationContext";


class GlobalState extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: new User(null),
			notification: new Notification(null, null, null),
			bookings: []
		};
		this.loginUser = this.loginUser.bind(this);
		this.logoutUser = this.logoutUser.bind(this);
	}

	// NOTIFICATION CONTEXT

	sendNotification = (notification) => {
		this.setState({notification: notification});
		return notification;
	}

	removeNotification = (notification) => {
		this.setState({notification: new Notification(null, null, null)});
	}

	// AUTH CONTEXT

	async loginUser(user) {
		let authUser = await UserService.loginUser(user);
		this.setState({user:authUser});
		return user;
	}

	async logoutUser() {
		let user = await UserService.logoutUser(this.state.user);
		this.setState({user: user});
		return user;
	}

	changeUser = (user) => {
		this.setState({user: user});
		return user;
	}

	// BOOKING CONTEXT

	setBookings = (bookings) => {
		this.setState({bookings: bookings});
	}

	editBooking(booking) {

	}

	addBooking(booking) {

	}

	removeBooking(booking) {
		
	}

	render() {
		return (
			<React.Fragment >
				<BookingContext.Provider value={{bookings: this.state.bookings, addBooking: this.addBooking, removeBooking: this.removeBooking, editBooking: this.editBooking, setBookings: this.setBookings}}>
		            <AuthContext.Provider value={{user: this.state.user, loginUser: this.loginUser, logoutUser: this.logoutUser, changeUser: this.changeUser}} >
		              <NotificationContext.Provider value={{notification: this.state.notification, sendNotification: this.sendNotification, removeNotification: this.removeNotification}} >

		                {this.props.children}

		              </NotificationContext.Provider >
		            </AuthContext.Provider >
		        </BookingContext.Provider >

          </React.Fragment >
		);
	}

}

export default GlobalState;