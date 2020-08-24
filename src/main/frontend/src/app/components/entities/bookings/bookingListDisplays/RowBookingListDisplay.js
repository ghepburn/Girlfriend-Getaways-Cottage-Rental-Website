import React from "react";

const RowBookingListDisplay = (props) =>{

	return(
		<div>
			<table>
				<body>
					<tr>
						<th>Start Date</th>
						<th>End Date</th>
						<th>Price</th>
						<th></th>
						<th></th>
					</tr>
					{props.bookings}
				</body>
			</table>
		</div>
	);
}

export default RowBookingListDisplay;