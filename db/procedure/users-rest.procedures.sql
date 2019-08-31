use tlozbotw;

DELIMITER //
create procedure getUser(in idIn varchar(100)) 
begin
  select * from tlozbotw.users where id = idIn limit 1;
end//
DELIMITER ;

DELIMITER //
create procedure registerOrUpdateUser(in idIn varchar(100), in emailIn varchar(80), in nameIn varchar(300), in photoIn varchar(900),in role int) 
begin
	
  if (select count(*) from users where email = emailIn) = 0 then 
    INSERT INTO tlozbotw.users (`id`, `email`, `name`, `photo`, `role`) 
    VALUES ( idIn, emailIn, nameIn, photoIn, role);
  else 
    set @id := (
      select id from users where email = emailIn limit 1
    );
            
    UPDATE tlozbotw.users SET 
    `id`= idIn, 
    `email`= emailIn, 
    `name`= nameIn, 
    `photo`= photoIn, 
    `role`= role 
    WHERE `id`= @id;
  end if;
  
  select * from users where email = emailIn limit 1;
end//
DELIMITER ;

DELIMITER //
create procedure getUsersData(in idIn varchar(100)) 
begin
  if (select count(*) from tlozbotw.users where id = idIn and role = 1) = 1 then 
    select * from tlozbotw.users where id != idIn;
  end if;
end//
DELIMITER ;