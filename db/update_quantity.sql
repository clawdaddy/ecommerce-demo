update cartitems
set quantity = $1
where id = $2
returning *;