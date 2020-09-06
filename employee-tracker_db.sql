DROP DATABASE IF EXISTS employee-tracker_db;
CREATE DATABASE employee-tracker_db;
USE employee-tracker_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR (45) NULL,
  genre VARCHAR (45)
  PRIMARY KEY(id)
);

INSERT INTO songs(title, artist, genre)
VALUES ("reflections", "misterwives", "pop"), ("vagabond", "misterwives", "pop"), ("oceans","misterwives", "pop")


