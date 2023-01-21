Now that you have the Unique User Ids, you queried the “Users” database and got the users Data as an Array as follows
Eg Structure : -
[
	{
		userId : "054",
		name : "John Doe",
		tags : ["New", "Top5", "Contributor"],
		isAdmin : true
	},
	{
		userId : "034",
		name : "Joanna Croft",
		tags : ["Legend", "Composer"],
		isAdmin : true
	},
	{
		…	
	}
	.
	.
	.
]
Create a function that takes the User Data and add the Tag “Contributor” too each user
Only assign the Tag if
1. The User is an admin (check “isAdmin”)
2. The tag does not already exist in the array
Finally return the updated users and the count of Users that were updated.
