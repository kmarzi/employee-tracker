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
  department_id INT NOT NULL
  PRIMARY KEY(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR (30) NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL
  PRIMARY KEY(id)
);

INSERT INTO department(id, department_name)
VALUES ("Pediatrics"), ("General"), ("Cardiothoracic"),
("Neurosurgery"),("Plastic Surgery"), ("Trauma")

INSERT INTO role(title, salary, department_id)
VALUES ( "Pediatric Surgeon", $ , ), ("",,)

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("", "", 1)


SELECT department,title, salary
FROM department
INNER JOIN role
ON department.department.id = role.department_ID
