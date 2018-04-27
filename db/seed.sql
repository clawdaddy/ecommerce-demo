create table if not exists memes
(id serial primary key,
memepic text,
price decimal,
description text);

create table if not exists cart
(
id serial primary key,
userid integer
);

create table if not exists cartitems
(id serial primary key,
itemid integer references memes,
cartid text)