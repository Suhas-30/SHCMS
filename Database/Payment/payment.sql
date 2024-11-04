CREATE TABLE PAYMENT_DETAILS(

PAY_ID varchar(50),
PAY_DATE DATE,
AMOUNT INT,
C_ID varchar(50)
);

ALTER TABLE PAYMENT_DETAILS ADD CONSTRAINT FK_CUSTOM_ID foreign key (C_ID) references CUSTOMER(C_ID);

ALTER TABLE PAYMENT_DETAILS ADD column CAR_ID varchar(50);

alter table payment_details add constraint PK_PAY_ID primary key(PAY_ID);

ALTER TABLE PAYMENT_DETAILS ADD CONSTRAINT FK_PAY_CAR_ID foreign key (CAR_ID) references CARS(CAR_ID);

