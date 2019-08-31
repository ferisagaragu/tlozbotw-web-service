create database tlozbotw;

use tlozbotw;

CREATE TABLE `users`
(
  `id` varchar(100) PRIMARY KEY NOT NULL,
  `email` varchar(80),
  `name` varchar(300),
  `photo` varchar(900),
  `role` int
);

CREATE TABLE `users_clothing`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idUser` varchar(100) NOT NULL,
  `idClothing` int NOT NULL,
  `check` boolean,
  `level` int
);

CREATE TABLE `clothing`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `zone` varchar(50),
  `defending` int,
  `effect` varchar(200),
  `name` varchar(200),
  `dlc` boolean,
  `amiibo` boolean,
  `bonus` boolean,
  `img` varchar(500),
  `group` varchar(200)
);

CREATE TABLE `upgradeable_clothing`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `level` int,
  `materials` varchar(300),
  `defending` int,
  `idClothing` int
);

CREATE TABLE `users_bow`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idUser` varchar(100) NOT NULL,
  `idBow` int NOT NULL,
  `photo` boolean
);

CREATE TABLE `bow`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(200),
  `damage` varchar(20),
  `description` varchar(500),
  `img` varchar(500),
  `available` boolean DEFAULT 1
);

CREATE TABLE `users_weapon`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idUser` varchar(100) NOT NULL,
  `idWeapon` int NOT NULL,
  `photo` boolean
);

CREATE TABLE `weapon`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(200),
  `attack` varchar(100),
  `description` varchar(500),
  `durability` varchar(100),
  `img` varchar(500)
);

CREATE TABLE `users_material`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idUser` varchar(100) NOT NULL,
  `idMaterial` int NOT NULL,
  `check` boolean,
  `photo` boolean
);

CREATE TABLE `material`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(200),
  `pe` int,
  `power` int,
  `duration` varchar(50),
  `location` varchar(200),
  `description` varchar(500),
  `idCategory` int
);

CREATE TABLE `material_category`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(200),
  `efect` varchar(100)
);

CREATE TABLE `arrow`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(100),
  `description` varchar(300),
  `img` varchar(500)
);

CREATE TABLE `users_arrow`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idUser` varchar(100) NOT NULL,
  `idArrow` int NOT NULL,
  `check` boolean
);

CREATE TABLE `shield`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(100),
  `breakpoint` int,
  `durationPoint` int,
  `description` varchar(300),
  `img` varchar(500)
);

CREATE TABLE `users_shield`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idUser` varchar(100) NOT NULL,
  `idShield` int NOT NULL,
  `photo` boolean
);

CREATE TABLE `enemy`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(100),
  `rank` int,
  `life` int,
  `description` varchar(300),
  `trick` varchar(300),
  `img` varchar(500)
);

CREATE TABLE `users_enemy`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idUser` varchar(100) NOT NULL,
  `idEnemy` int NOT NULL,
  `photo` boolean
);

CREATE TABLE `fairy`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(100),
  `locationImg` varchar(500)
);

CREATE TABLE `users_fairy`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idUser` varchar(100) NOT NULL,
  `idFairy` int NOT NULL,
  `check` boolean
);

CREATE TABLE `publication`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `information` varchar(1000),
  `like` int,
  `title` varchar(300),
  `idUser` varchar(100) NOT NULL
);

CREATE TABLE `users_publication`
(
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idUser` varchar(100) NOT NULL,
  `idPublication` int NOT NULL,
  `check` boolean,
  `userName` varchar(300)
);

ALTER TABLE `users_clothing` ADD FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

ALTER TABLE `users_clothing` ADD FOREIGN KEY (`idClothing`) REFERENCES `clothing` (`id`);

ALTER TABLE `upgradeable_clothing` ADD FOREIGN KEY (`idClothing`) REFERENCES `clothing` (`id`);

ALTER TABLE `users_bow` ADD FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

ALTER TABLE `users_bow` ADD FOREIGN KEY (`idBow`) REFERENCES `bow` (`id`);

ALTER TABLE `users_weapon` ADD FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

ALTER TABLE `users_weapon` ADD FOREIGN KEY (`idWeapon`) REFERENCES `weapon` (`id`);

ALTER TABLE `material` ADD FOREIGN KEY (`idCategory`) REFERENCES `material_category` (`id`);

ALTER TABLE `users_material` ADD FOREIGN KEY (`idMaterial`) REFERENCES `material` (`id`);

ALTER TABLE `users_material` ADD FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

ALTER TABLE `users_arrow` ADD FOREIGN KEY (`idArrow`) REFERENCES `arrow` (`id`);

ALTER TABLE `users_arrow` ADD FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

ALTER TABLE `users_shield` ADD FOREIGN KEY (`idShield`) REFERENCES `shield` (`id`);

ALTER TABLE `users_shield` ADD FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

ALTER TABLE `users_enemy` ADD FOREIGN KEY (`idEnemy`) REFERENCES `enemy` (`id`);

ALTER TABLE `users_enemy` ADD FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

ALTER TABLE `users_fairy` ADD FOREIGN KEY (`idFairy`) REFERENCES `fairy` (`id`);

ALTER TABLE `users_fairy` ADD FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

ALTER TABLE `users_publication` ADD FOREIGN KEY (`idPublication`) REFERENCES `publication` (`id`);

ALTER TABLE `users_publication` ADD FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

