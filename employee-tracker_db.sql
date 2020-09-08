DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR (30) NULL,
  role_id INT NOT NULL,
  PRIMARY KEY(id)
);



INSERT INTO department(department_name)
VALUES ("Pediatrics"), ("General"), ("Cardiothoracic"),("Neurosurgery"),
("Plastic Surgery"), ("Trauma"), ("manager");

INSERT INTO role(title, salary, department_id)
VALUES ( "Pediatric Surgeon", 2900000 ,1), ("General Surgeon",270000,2), ("Cardiothoracic Surgeon", 300000, 3),
("Neurosurgeon", 320000, 4 ), ("Plastic Surgeon", 270000, 5), ("Trauma Surgeon", 310000, 6);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Alex","Karev", 1, 7), ("Meredith", "Grey", 2, 8), ("Maggie", "Pierce", 3, 8),
("Amelia", "Shepherd", 4, 7), ("Jackson", "Avery", 5, 8), ("Owen", "Hunt", 6, 7), ("Richard", "Webber", 7, NULL),("Miranda", "Bailey",8, NULL);



SELECT department,title, salary
FROM department
INNER JOIN role
ON department.department.id = role.department_ID
