CREATE DATABASE vacation;
USE vacation;

SELECT * FROM users;		

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    userName VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE vacations (
    id INT AUTO_INCREMENT NOT NULL,
    description VARCHAR(255) NOT NULL,
    img VARCHAR(255),
    location VARCHAR(255) NOT NULL,
    startTime DATE NOT NULL,
    endTime DATE NOT NULL,
    price INT NOT NULL,
    followers INT NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE vacations;

CREATE TABLE followedVacations (
    id INT AUTO_INCREMENT NOT NULL,
    userID INT NOT NULL,
    vacationID INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(userID) REFERENCES users(id),
    FOREIGN KEY(vacationID) REFERENCES vacations(id)
);

SELECT * FROM vacations;

INSERT INTO vacations (description,img,location,startTime,endTime,price,followers)
VALUES
    ('me and my family at rome','C:/Users/Dotan/OneDrive/Desktop/Eilon/גון ברייס/Project3/client/src/rome.jpg','Rome','2022-03-08','2022-03-12',1000,0);

SELECT * FROM devteams;

INSERT INTO users (firstName,lastName,userName,password,role)
VALUES
    ('eilon','alter','admin','deployment','loby');
    
    SELECT * FROM meetings;