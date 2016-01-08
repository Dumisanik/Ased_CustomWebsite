load data local infile 'usersData.csv'
into table users
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
ESCAPED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 LINES;