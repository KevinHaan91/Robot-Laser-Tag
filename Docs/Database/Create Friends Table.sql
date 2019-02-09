CREATE TABLE friends (
	ID MEDIUMINT NOT NULL AUTO_INCREMENT, /*The Primary Key.  Starts at 1 and increments from there.*/
	FriendID MEDIUMINT NOT NULL, /*ID of the friend.*/
	UserID MEDIUMINT, /*ID of the user that has said friend*/
	PRIMARY KEY (ID),
    FOREIGN KEY (UserID) REFERENCES users(ID) ON DELETE CASCADE /*If the UserID is deleted, friends list is deleted as well*/
);