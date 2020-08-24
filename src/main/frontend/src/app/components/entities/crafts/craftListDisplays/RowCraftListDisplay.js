import React from "react";

const RowCraftListDisplay = (props) =>{
	

	return(
		<div>
			<table>
				<body>
					<tr>
						<th>Name</th>
						<th>Desc</th>
						<th>Difficulty</th>
						<th>Hours required</th>
						<th>Price Per Person</th>
						<th></th>
						<th></th>
					</tr>
					{props.crafts}
				</body>
			</table>
		</div>
	);
}

export default RowCraftListDisplay;