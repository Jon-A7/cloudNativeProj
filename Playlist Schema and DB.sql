CREATE SCHEMA playlist;

CREATE TABLE IF NOT EXISTS songs(
id int AUTO_INCREMENT,
song varchar(70) NOT NULL,
album varchar(70) NOT NULL,
artist varchar(70) NOT NULL,
PRIMARY KEY (`ID`)
);


SHOW tables;

