-- TOTAL PRICE 
select transaction_code,calendar,costumer_name,product_name,price,quantity,sum(price*quantity)total_price
from calendar c join transaction t join product p
on c.id_calendar = t.id_calendar and t.id_product=p.id_product
where transaction_code='IN001'
group by product_name;

-- TOTAL ALL PRICE
select transaction_code,calendar,costumer_name,sum(price*quantity)total_all_price
from calendar c join transaction t join product p
on c.id_calendar = t.id_calendar and t.id_product=p.id_product
where transaction_code='IN001';

-- TOTAL TRANSACTIONS EVERY DAY
select calendar,count(transaction_code)
from calendar c join transaction t
on c.id_calendar=t.id_calendar
group by calendar;

-- TOP 2 COSTUMERS PER WEEK
select costumer_name, sum(price*quantity)total_all_price
from calendar c join transaction t join product p
on c.id_calendar = t.id_calendar and t.id_product=p.id_product
where week =1
group by costumer_name
order by total_all_price desc limit 2;

-- TOP 3 VARIANT COSTUMERS
select costumer_name, count(product_name)total_variant
from transaction t join product p
on t.id_product=p.id_product
group by costumer_name
order by total_variant desc limit 3;

-- TRANSACTION ON A CERTAIN DATE 
select distinct calendar, transaction_code
from calendar c join transaction t
on c.id_calendar=t.id_calendar
where calendar='2020-02-17'
order by transaction_code;

-- TRASANCTION CUSTOMERS
select transaction_code,calendar,costumer_name,product_name,quantity,sum(price*quantity)total_price
from calendar c join transaction t join product p
on c.id_calendar = t.id_calendar and t.id_product=p.id_product
where costumer_name='fina'
group by product_name;