use tlozbotw;

DELIMITER //
create procedure getClothing(in userId varchar(100)) 
begin
	
    if (select count(id) from users where id = userId) != 0 then
      select clothing.id, zone, clothing.defending, effect, name, 
      dlc, amiibo, bonus, img, users_clothing.check, 
      upgradeable_clothing.defending as updateDefending, materials,
      upgradeable_clothing.level from tlozbotw.clothing 
      LEFT JOIN tlozbotw.users_clothing on idClothing = clothing.id and idUser = userId
      LEFT JOIN tlozbotw.upgradeable_clothing on upgradeable_clothing.idClothing = clothing.id 
      and upgradeable_clothing.level = users_clothing.level order by name;
    else 
		  select 'errordb';
    end if;

end//
DELIMITER ;

DELIMITER //
create procedure createOrUpdateClothing(in iduserP varchar(100),in idClothingP int,in checkP tinyint(1),in levelP int) 
begin
	
  if (
		select count(*) from users_clothing where 
		idUser = iduserP and 
		idClothing = idClothingP
  ) = 0 then 
        
      INSERT INTO users_clothing (idUser, idClothing, `check`, level) 
      VALUES (iduserP, idClothingP, checkP, levelP);
		
      select 0 as resp;  
	else

		set @id := (
			select id from users_clothing 
      where idUser = iduserP
      and idClothing = idClothingP
		);

    UPDATE users_clothing SET 
    users_clothing.check= checkP, 
    level= levelP WHERE 
    id= @id;
    
    select 1 as resp; 
  end if;

end//
DELIMITER ;

DELIMITER //
create procedure deleteRegistClothing(in iduserP varchar(100),in idClothingP int) 
begin

  set @id := (
	  select id from users_clothing 
      where idUser = iduserP
      and idClothing = idClothingP
  );
        
  delete from users_clothing WHERE id= @id;

end//
DELIMITER ;