use tlozbotw;

DELIMITER //
create procedure getMaterial(in userId varchar(100)) 
begin
	
    if (select count(id) from users where id = userId) != 0 then
      select material.id, name, pe, power, duration
      location, description, img, users_material.check
      from material 
      Left join users_material on idMaterial = material.id and idUser = userId
      where available = true order by material.id;
    else 
		  select 'errordb';
    end if;

end//
DELIMITER ;

DELIMITER //
create procedure createMaterial(
  in nameIn varchar(200), in peIn varchar(50), 
  in powerIn varchar(10), in durationIn varchar(50),
  in locationIn varchar(200), in descriptionIn varchar(500),
  in imgIn varchar(500), in idCategoryIn int
) 
begin
  INSERT INTO `tlozbotw`.`material` 
  (`name`, `pe`, `power`, `duration`, `location`, `description`, `img`, `idCategory`) 
  VALUES (nameIn, peIn, powerIn, durationIn, locationIn, descriptionIn, imgIn, idCategoryIn);
  
  SELECT id, name, pe, power, duration,
  location, description, img, idCategory
  FROM tlozbotw.material where available = 1;
end//
DELIMITER ;

DELIMITER //
create procedure updateMaterial(
  in idIn int, in nameIn varchar(200), in peIn varchar(50), 
  in powerIn varchar(10), in durationIn varchar(50),
  in locationIn varchar(200), in descriptionIn varchar(500),
  in imgIn varchar(500), in idCategoryIn int
) 
begin
  UPDATE `tlozbotw`.`material` SET 
  `name` = nameIn, 
  `pe` = peIn, 
  `power` = powerIn, 
  `duration` = durationIn, 
  `location` = locationIn, 
  `description` = descriptionIn,
  `img` = imgIn,
  `idCategory` = idCategoryIn 
  WHERE (`id` = idIn);
  
  SELECT id, name, pe, power, duration,
  location, description, img, idCategory
  FROM tlozbotw.material where available = 1;
end//
DELIMITER ;

DELIMITER //
create procedure deleteMaterial(in idIn int) 
begin
  UPDATE `tlozbotw`.`material` SET 
  `available` = 0
  WHERE (`id` = idIn);
  
  SELECT id, name, pe, power, duration,
  location, description, img, idCategory
  FROM tlozbotw.material where available = 1;
end//
DELIMITER ;