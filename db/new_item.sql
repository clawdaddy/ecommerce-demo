insert into cartitems
(itemid, cartid, quantity)
values ($1, $2, $3)
returning id