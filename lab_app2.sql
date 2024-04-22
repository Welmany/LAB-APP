-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 22, 2024 at 08:28 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lab_app2`
--

-- --------------------------------------------------------

--
-- Table structure for table `escola`
--

DROP TABLE IF EXISTS `escola`;
CREATE TABLE IF NOT EXISTS `escola` (
  `id` int NOT NULL AUTO_INCREMENT,
  `designacao` varchar(250) NOT NULL,
  `funcionais` int NOT NULL,
  `nao_funcionais` int NOT NULL,
  `numero_total` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `escola`
--

INSERT INTO `escola` (`id`, `designacao`, `funcionais`, `nao_funcionais`, `numero_total`) VALUES
(1, 'Salas de Aula Teóricas', 0, 0, 1),
(2, 'Salas de Informática', 1, 1, 1),
(3, 'Laboratórios de Automação', 1, 1, 1),
(4, 'Laboratórios de Biologia', 1, 1, 1),
(5, 'Laboratórios de CAD', 1, 1, 1),
(6, 'Laboratórios de CNC', 1, 1, 1),
(7, 'Laboratórios de Electrónica', 1, 1, 1),
(8, 'Laboratórios de Energias Renováveis', 1, 1, 1),
(9, 'Laboratórios de Física', 1, 1, 1),
(10, 'Laboratórios de Frio e Climatização', 1, 1, 1),
(11, 'Laboratórios de Instalações Eléctricas', 1, 1, 1),
(12, 'Laboratórios de Máquinas Eléctricas', 1, 1, 1),
(13, 'Laboratórios de Metalomecânica', 1, 1, 1),
(14, 'Laboratórios de Química', 1, 1, 1),
(15, 'Laboratórios de Telecomunicações', 1, 1, 1),
(16, 'Oficinas de Construções mecânicas', 1, 1, 1),
(17, 'Oficinas de Máquinas e Motores', 1, 1, 1),
(18, 'Oficinas de Soldadura', 1, 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
