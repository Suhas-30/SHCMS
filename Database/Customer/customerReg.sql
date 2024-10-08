CREATE TABLE CUSTOMER (
C_ID varchar(25) PRIMARY KEY,
C_NAME varchar(25),
PH bigint not NULL,
EMAIL varchar(50),
PASSWORD VARCHAR(50)
);

alter TABLE CUSTOMER ADD column CAR_ID varchar(50);

ALTER TABLE CUSTOMER ADD  constraint FK_CAR_ID foreign key (CAR_ID) references CARS(CAR_ID);

create table c_address (
CADDRESS_ID INT auto_increment primary KEY,
STREET_NAME varchar(50),
CITY varchar(50),
STATE varchar(50),
COUNTRY varchar(30)
);  

ALTER TABLE C_ADDRESS ADD COLUMN C_ID VARCHAR(50);



ALTER TABLE C_ADDRESS ADD CONSTRAINT FK_ADDR_CUS FOREIGN KEY (C_ID) REFERENCES CUSTOMER(C_ID);


