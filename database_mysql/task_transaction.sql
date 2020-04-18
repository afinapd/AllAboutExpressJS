-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: task
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
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id_transaction` int NOT NULL AUTO_INCREMENT,
  `transaction_code` varchar(5) DEFAULT NULL,
  `id_calendar` int NOT NULL,
  `costumer_name` varchar(12) DEFAULT NULL,
  `id_product` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id_transaction`),
  KEY `id_calendar_index` (`id_calendar`),
  KEY `id_product_index` (`id_product`),
  KEY `quantity_index` (`quantity`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (1,'IN001',1,'fina',1,2),(2,'IN001',1,'fina',8,1),(3,'IN001',1,'fina',6,1),(4,'IN002',2,'della',9,3),(5,'IN003',3,'ruslan',2,4),(6,'IN003',3,'ruslan',3,1),(7,'IN004',5,'dennis',4,3),(8,'IN004',5,'dennis',5,2),(9,'IN004',5,'dennis',1,1),(10,'IN004',5,'dennis',3,3),(11,'IN004',5,'dennis',4,4),(12,'IN005',7,'kafkha',9,6),(13,'IN005',7,'kafkha',8,4),(14,'IN005',7,'kafkha',7,2),(15,'IN006',10,'rio',6,3),(16,'IN006',10,'rio',4,5),(17,'IN007',11,'ridwan',5,7),(18,'IN008',11,'alif',6,3),(19,'IN009',13,'dewa',7,2),(20,'IN010',16,'robby',8,1),(21,'IN010',16,'robby',2,3),(22,'IN010',16,'robby',3,4),(23,'IN011',17,'rifky',3,5),(24,'IN011',17,'rifky',1,7),(25,'IN012',17,'ronny',6,8),(26,'IN013',19,'farrel',9,4),(27,'IN014',20,'rafly',5,3),(28,'IN014',20,'rafly',1,2),(29,'IN015',21,'awan',2,2),(30,'IN016',21,'teguh',4,2),(31,'IN016',21,'teguh',2,6),(32,'IN016',21,'teguh',1,1),(33,'IN016',21,'teguh',3,6),(34,'IN017',21,'isra',2,2),(35,'IN018',28,'aris',1,5),(36,'IN018',28,'aris',2,3),(37,'IN018',28,'aris',4,7),(38,'IN018',28,'aris',5,5);
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-19 14:24:09
