use tlozbotw;

DELIMITER //
create procedure getBows(in idIn varchar(100)) 
begin
  if (select count(*) from users where id = idIn) = 1 then 
    select bow.id, bow.name, bow.img, bow.damage, bow.description, users_bow.photo from tlozbotw.bow
    left join users on users.id = idIn
    left join users_bow on users_bow.idUser = users.id and users_bow.idBow = bow.id
    where bow.available = 1;
  end if;
end//
DELIMITER ;

DELIMITER //
create procedure createBow(
  in nameIn varchar(200), in damageIn varchar(20), 
  in descriptionIn varchar(500), in imgIn varchar(500)
) 
begin
  INSERT INTO `tlozbotw`.`bow` 
  (`name`, `damage`, `description`, `img`) VALUES 
  (nameIn, damageIn, descriptionIn, imgIn);
  
  SELECT id, name, damage, description, img 
  FROM tlozbotw.bow where available = 1;
end//
DELIMITER ;

DELIMITER //
create procedure updateBow(
  in idIn int, in nameIn varchar(200),
  in damageIn varchar(20), in descriptionIn varchar(500),
  in imgIn varchar(500)
) 
begin
  UPDATE `tlozbotw`.`bow` 
  SET `name` = nameIn, 
  `damage` = damageIn, 
  `description` = descriptionIn, 
  `img` = imgIn 
  WHERE (`id` = idIn);
  
  SELECT id, name, damage, description, img 
  FROM tlozbotw.bow where available = 1;
end//
DELIMITER ;

DELIMITER //
create procedure deleteBow(in idIn int) 
begin
  DELETE FROM `tlozbotw`.`bow` WHERE (`id` = idIn);
  
  SELECT id, name, damage, description, img 
  FROM tlozbotw.bow where available = 1;
end//
DELIMITER ;