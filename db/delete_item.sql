delete from cartitems
where id = $1
returning *