CREATE DATABASE  IF NOT EXISTS `Marvel` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `Marvel`;
-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: Marvel
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `multiverse`
--

DROP TABLE IF EXISTS `multiverse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `multiverse` (
  `id` int NOT NULL,
  `universe` varchar(45) NOT NULL,
  `family_id` int NOT NULL,
  `power` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `family` varchar(45) NOT NULL,
  PRIMARY KEY (`id`,`family`,`family_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multiverse`
--

LOCK TABLES `multiverse` WRITE;
/*!40000 ALTER TABLE `multiverse` DISABLE KEYS */;
INSERT INTO `multiverse` VALUES (1,'Asgard',1,'10000','Thor','Asgardian'),(1,'Earth',1,'3000','Iron Man','Robot'),(1,'Xandar',1,'100','Tanak Valt','Supernova'),(1,'Planet X',1,'1000','Groot','Tree'),(2,'Earth',2,'1000','Nick Fury','Army'),(2,'Asgard',1,'10000','Loki','Asgardian'),(2,'Xandar',1,'200','Thoran Rul ','Supernova'),(3,'Asgard',1,'10000','Odin','Asgardian'),(3,'Earth',3,'2000','Captain America','Super Human'),(3,'Xandar',1,'200','Rieg Davan ','Supernova'),(4,'Earth',4,'5000','Hulk','Mutant'),(5,'Earth',1,'1000','Pepper Pots','Robot');
/*!40000 ALTER TABLE `multiverse` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-09 18:07:58
