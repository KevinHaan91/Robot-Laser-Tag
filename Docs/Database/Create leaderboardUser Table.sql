CREATE TABLE leaderboardUser (
	ID MEDIUMINT NOT NULL AUTO_INCREMENT, /*The Primary Key.  Starts at 1 and increments from there.*/
	username varchar(25) NOT NULL, /*Username*/
	totalPoints int NOT NULL, /*Total points*/
	PRIMARY KEY (ID)
);