DELIMITER //

CREATE PROCEDURE add_sales_history(
    IN pay_id VARCHAR(50),
    IN car_id VARCHAR(50),
    IN customer_id VARCHAR(25),
    IN pay_date DATE
)
BEGIN
    INSERT INTO SALES_HISTORY (DATE_OF_SALE, CAR_ID, PAY_ID, C_ID)
    VALUES (pay_date, car_id, pay_id, customer_id);
END //

DELIMITER ;

DELIMITER //

CREATE TRIGGER after_payment_insert
AFTER INSERT ON PAYMENT_DETAILS
FOR EACH ROW
BEGIN
    CALL add_sales_history(NEW.PAY_ID, NEW.CAR_ID, NEW.C_ID, NEW.PAY_DATE);
END //

DELIMITER ;
