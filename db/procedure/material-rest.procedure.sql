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