delimiter $$

CREATE TABLE `provincialstructures` (
  `provinceID` int(11) NOT NULL AUTO_INCREMENT,
  `provinceName` varchar(45) NOT NULL,
  `Leadership` varchar(45) DEFAULT NULL,
  `contactDetails` varchar(45) NOT NULL,
  PRIMARY KEY (`provinceID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1$$


CREATE TABLE `users` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `skills` varchar(45) DEFAULT NULL,
  `profession` varchar(45) DEFAULT NULL,
  `qualifications` varchar(100) DEFAULT NULL,
  `provinceID` int(11) NOT NULL,
  `city` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `contactDetails` varchar(45) DEFAULT NULL,
  `pictureURL` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userId_UNIQUE` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1$$

