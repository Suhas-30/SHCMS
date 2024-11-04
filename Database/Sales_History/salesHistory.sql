CREATE TABLE SALES_HISTORY(
	DATE_OF_SALE date,
    CAR_ID varchar(25),
    PAY_ID varchar(50),
    C_ID varchar(25)
);

alter table SALES_HISTORY ADD constraint FK_SLAES_CAR foreign key (CAR_ID) references CARS(CAR_ID);

alter table SALES_HISTORY ADD constraint FK_SLAES_PAY foreign key (PAY_ID) references PAYMENT_DETAILS(PAY_ID);

alter table SALES_HISTORY ADD constraint FK_SLAES_CUSTOMER foreign key (C_ID) references CUSTOMER(C_ID);


