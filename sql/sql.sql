create database grocery_store;
use grocery_store;

create table type_product(
	type_id int auto_increment primary key,
    type_name varchar(45)
);

create table product(
	product_id int auto_increment primary key,
    product_name varchar(45),
    product_price double,
    product_quantity int,
    product_img varchar(255),
    type_id int,
    
    foreign key (type_id) references type_product (type_id)
);

create table customer(
	customer_id int auto_increment primary key,
    customer_name varchar(45),
    customer_date_of_birth varchar(45),
    customer_email varchar(45),
    customer_phone varchar(45),
    customer_address varchar(45)
);

create table order_product(
	id int auto_increment primary key,
    product_id int,
    customer_id int,
    
	foreign key (product_id) references product (product_id),
    foreign key (customer_id) references customer (customer_id)
);

