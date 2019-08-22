use tlozbotw;

DELIMITER //
create procedure getBows(in idIn varchar(100)) 
begin
 if(select count(*) from users where id = idIn) = 1 then 
    select bow.id, bow.name, bow.img, bow.damage, bow.description, users_bow.photo from tlozbotw.bow
    left join users on users.id = idIn
    left join users_bow on users_bow.idUser = users.id and users_bow.idBow = bow.id;
  end if;
end//
DELIMITER ;
