DROP DATABASE IF EXISTS customersDB;
create database customersDB;
use customersDB;

CREATE TABLE customers
(
  first_name VARCHAR(100) NULL,
  last_name VARCHAR(100) NULL,
  business_name VARCHAR(100) NULL,
  bill_address VARCHAR(100) NULL,
  phone INT NULL,
  number_signs INT NULL,
  signs_rented INT NULL,
  contract_term INT NOT NULL,
  monthly_rent INT NULL,
  delinquent_account VARCHAR(100) NULL,
  past_due_payment INT NULL
);