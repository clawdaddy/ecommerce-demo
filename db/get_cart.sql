select c.id, quantity, memepic, price, description 
from cartitems as c
join memes as m
on c.itemid = m.id
where cartid = $1