-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 11, 2023 at 02:05 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baza_hugo`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `messages`
--

CREATE TABLE `messages` (
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `surname`, `email`) VALUES
(1, 'Heatblast', 'Pyronite', 'heatblast@omnitrix.com'),
(2, 'Four Arms', 'Tetramand', 'fourarms@omnitrix.com'),
(3, 'XLR8', 'Kineceleran', 'xlr8@omnitrix.com'),
(4, 'Diamondhead', 'Petrosapien', 'diamondhead@omnitrix.com'),
(5, 'Upgrade', 'Galvanic Mechamorph', 'upgrade@omnitrix.com'),
(6, 'Ripjaws', 'Piscciss Volann', 'ripjaws@omnitrix.com'),
(7, 'Stinkfly', 'Lepidopterran', 'stinkfly@omnitrix.com'),
(8, 'Wildvine', 'Florauna', 'wildvine@omnitrix.com'),
(9, 'Ghostfreak', 'Ectonurite', 'ghostfreak@omnitrix.com'),
(10, 'Grey Matter', 'Galvan', 'greymatter@omnitrix.com'),
(11, 'Cannonbolt', 'Arburian Pelarota', 'cannonbolt@omnitrix.com'),
(12, 'Wildmutt', 'Vulpimancer', 'wildmutt@omnitrix.com'),
(13, 'Ditto', 'Splixson', 'ditto@omnitrix.com'),
(14, 'Eye Guy', 'Opticoid', 'eyeguy@omnitrix.com'),
(15, 'Way Big', 'To\'kustar', 'waybig@omnitrix.com');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `hoursAWeek` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `hoursAWeek`) VALUES
(1, 'Matematyka', 5),
(2, 'Język angielski', 4),
(3, 'Fizyka', 3),
(4, 'Chemia', 3),
(5, 'Informatyka', 4),
(6, 'Historia', 2),
(7, 'Wychowanie fizyczne', 3),
(8, 'Biologia', 3),
(9, 'Sztuka', 2),
(10, 'Muzyka', 2),
(11, 'Technika', 3),
(12, 'Geografia', 2),
(13, 'Religia', 1),
(14, 'Język hiszpański', 3),
(15, 'Etyka', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
