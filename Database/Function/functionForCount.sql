DELIMITER //

CREATE FUNCTION count_total_sales()
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE total_sales INT;
    SELECT COUNT(*) INTO total_sales FROM SALES_HISTORY;
    RETURN total_sales;
END //

DELIMITER ;


SELECT count_total_sales() AS total_sales;
