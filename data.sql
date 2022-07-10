CREATE DATABASE  IF NOT EXISTS `vacation` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vacation`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: vacation
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'eilon','alter','admin','$2b$10$FTAof5adfRKswk6AADh39OMFkXvO1GBbi599Cr6A08pwqeNzL8Ifm','admin'),(5,'dotan','alter','dotan','$2b$10$lwMGK/XaGJ1kcyYl9F4aeOn3Zs6YblkpoX0JJ1dXKPfd0lwZR64Ha','user'),(7,'dotan','dotan','dotan2','$2b$10$qtJANwx3nBkiZL9Rys.DteRocVVoRmncOy6aylXSraXNm76XNrKaK','user'),(9,'dotan','dotan','dotan3','$2b$10$BQm9MEP5apMSN10YIQMRHuugjHrEVVgkohVBYFFNYSua.ax7dyKBq','user'),(11,'dotan','dotan','dotan4','$2b$10$rEMcYvq/Mg4fc89BCHgFS.cc4xcCErqFHAR9COS4SPvjrX17uha5.','user'),(12,'dotan','dotan','dotan5','$2b$10$Btwktn7K/XC6dSlJ00fX3uKGkVJz1xQGM11BPFqaqfe.f4q.iI9NC','user'),(13,'dotan','dotan','dotan6','$2b$10$YGPu83eiPtDRaLQxLLadquPBkDIMkAOcC80jw4BPc3CvwgsGbvkNa','user'),(14,'eilon','eilon','eilon1','$2b$10$A01IgnPqx0xHYBZdjRPuGuCYbnSQ01Th3rTX9AKP.iIzz8UhOfUOm','user'),(15,'eilon','eilon','eilon2','$2b$10$H/pOvK/y517Ng1omKzjSduhZUCfLkylD7DUZOkXezAC8AYYtVdLQe','user'),(16,'eilon','eilon','eilon3','$2b$10$W2sOsRAxxyXiWAUUh5iBpeGXQZNtKwIHzM0K0xD5eKhk7CeJE67vi','user'),(17,'eilon','eilon','eilon6','$2b$10$C4NmNd5CE2H/0cLlLCBZz..7b4bneHniqiPWfAGBPPROdbtOoJPiq','user'),(18,'eilon','eilon','eilon7','$2b$10$/o.ELXIP8iWHUgZ8QD0OueTBbOsM245p1wDoHnNiT9Gp2lA8Q9FVS','user'),(22,'eilon','alter','eiloneilon','$2b$10$42mPno8/HurYixApu2PfdeJeOtCX3xo3YmLHMnDVCPemGrV.ehl5K','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `startTime` date NOT NULL,
  `endTime` date NOT NULL,
  `price` int NOT NULL,
  `followers` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (1,'me and my family at rome','C:Users/Dotan/OneDrive/Desktop/Eilon/גון ברייס/Project3/client/src/rome.jpg','Rome','2022-02-26','2022-03-02',2000,4),(2,'me and my family at rome','C:Users/Dotan/OneDrive/Desktop/Eilon/גון ברייס/Project3/client/src/rome.jpg','Rome','2022-03-06','2022-03-10',1000,1),(3,'me and my family at rome','C:Users/Dotan/OneDrive/Desktop/Eilon/גון ברייס/Project3/client/src/rome.jpg','Rome','2022-03-07','2022-03-11',1000,0),(4,'me and my family at rome','C:Users/Dotan/OneDrive/Desktop/Eilon/גון ברייס/Project3/client/src/rome.jpg','Rome','2022-03-08','2022-03-12',1000,0),(5,'me and my family at rome','C:Users/Dotan/OneDrive/Desktop/Eilon/גון ברייס/Project3/client/src/rome.jpg','Rome','2022-03-08','2022-03-12',1000,0),(6,'me and my family at rome','C:/Users/Dotan/OneDrive/Desktop/Eilon/גון ברייס/Project3/client/src/rome.jpg','Rome','2022-03-08','2022-03-12',1000,0),(7,'me my father and my brother in paris','https://oceanplasticslab.net/site/uploads/2018/05/header-paris.jpg','paris','2018-12-10','2018-12-15',5500,1);
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-10 17:31:27
