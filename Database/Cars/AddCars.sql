create table CARS (

CAR_ID varchar(25) primary KEY,
CAR_NAME varchar(25),
CAR_MODEL varchar(25),
MODEL_YEAR INT,
CAR_RN varchar(25),
PRICE decimal(10,2)
);

alter table CARS ADD column P_OWNER VARCHAR(25);

alter table CARS ADD constraint FK_PREV_OWNER foreign key (P_OWNER) references previous_owner(P_ID);





