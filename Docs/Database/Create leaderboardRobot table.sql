CREATE TABLE leaderboardRobot (
	ID MEDIUMINT NOT NULL AUTO_INCREMENT, /*The Primary Key.  Starts at 1 and increments from there.*/
	robotName varchar(25) NOT NULL, /*Name of the robot*/
	totalPoints int NOT NULL, /*Total points*/
	PRIMARY KEY (ID)
);