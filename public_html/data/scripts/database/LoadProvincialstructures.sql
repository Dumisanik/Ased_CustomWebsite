load data local infile 'C:/wamp/www/provincialStructuresData.csv'
into table provincialstructures
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
ESCAPED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 LINES;