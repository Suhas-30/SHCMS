CREATE TABLE PREVIOUS_OWNER(
P_ID VARCHAR(50) primary key,
P_NAME VARCHAR(50) NOT NULL,
PH BIGINT NOT NULL,
EMAIL VARCHAR(25)
);

CREATE TABLE P_ADDRESS(
	PADDRESS_ID INT auto_increment
    primary key,
    STREET_NAME VARCHAR(20),
    CITY  varchar(20),
    STATE varchar(20),
    COUNTRY varchar(20)
);

alter TABLE p_address ADD 
column P_ID VARCHAR(50);


ALTER TABLE p_address ADD
constraint FK_ADDRESS_PO
foreign key (P_ID)
references previous_owner(P_ID)
ON delete cascade;

-- ALTER TABLE PREVIOUS_OWNER 
-- MODIFY PH BIGINT CHECK (PH >= 1000000000 AND PH <= 9999999999);



