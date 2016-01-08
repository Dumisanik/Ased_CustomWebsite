<?php
//This PHP, gets all users from the database. And displays them on the html
//#echo "<br><br>Starting MySQL <br><br>";

//Connect to the database
$dbConnection = mysql_connect('127.0.0.1:3306', 'root', ''); //or die(mysql_error()); 


if (!$dbConnection) {
    die('Could not connect: ' . mysql_error());}
else{
    mysql_select_db('mysitedatabase', $dbConnection);

	$query = 'select * from mysitedatabase.users';		//make sql query
	$result = mysql_query($query);
	$row = mysql_fetch_assoc($result);

	
if($row){
	//For each row, print row
	$dbNumOfUsersCount = -1;
	
	$result = mysql_query($query, $dbConnection);
	//$row = mysql_fetch_assoc($result); 	//Get the first row
			
	//Print All users as Blocks
	while ($row = mysql_fetch_array($result)) {
		//Get province name using "provinceID"
		$queryProvince = "SELECT * FROM mysitedatabase.provincialstructures where provinceID = '". $row["provinceID"] ."';";		//make sql query
		$resultProvince = mysql_query($queryProvince, $dbConnection);
		$rowProvince = mysql_fetch_assoc($resultProvince);
                
		//Print current User-Block
		printf("
		<div color='grey' class='UserBlock'>
			<table>
				<tr> <!--Left Column-->
					<td class='UserPic'>
						<img class='UserPic' src='%s'> </img>
					</td>

					<td class='UserDetails'>
						<strong>
                                                    <a class='UserName' href='SomeCodeToFetchUserProfilePage'>%s&nbsp%s</a> 
                                                    <!--a href../userprofile/view/id='someuserId' -->  
						</strong>
                                                <p>%s at %s,<p>  <!--Skill and Occupation-->      
						<p>%s<p>  
						<p>%s<p>
					</td>
				</tr>
                                
				<tr>
					<td>
						<button class='networkWithButton'>Network With</button>
					</td>
					<td>
						<button class='sendMessageButton'>Send Message</button>
					</td>
				</tr>
			</table>
		</div>

		",$row["pictureURL"], $row["firstname"],$row["lastname"],$row["skills"],
		$row["profession"] ,$rowProvince["provinceName"],$row["city"]);
	}
		
}
	

	
}

?>