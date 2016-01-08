load data local infile 'provincialStructuresData.csv'
into table provincialstructures
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
ESCAPED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 LINES;