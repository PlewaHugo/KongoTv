-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 12, 2023 at 09:16 PM
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
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `topic` text NOT NULL,
  `content` text NOT NULL
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
(1, 'Ben', 'Tennyson', 'ben.tennyson@example.com'),
(2, 'Gwen', 'Tennyson', 'gwen.tennyson@example.com'),
(3, 'Kevin', 'Ethan Levin', 'kevin.levin@example.com'),
(4, 'Max', 'Tennyson', 'max.tennyson@example.com'),
(5, 'Rook', 'Blonko', 'rook.blonko@example.com'),
(6, 'Vilgax', 'Dagonet', 'vilgax@example.com'),
(7, 'Azmuth', 'Galvan', 'azmuth@example.com'),
(8, 'Hex', 'Nottingham', 'hex@example.com'),
(9, 'Kai', 'Green', 'kai.green@example.com'),
(10, 'Julie', 'Yamamoto', 'julie.yamamoto@example.com');

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
(1, 'Historia', 8),
(2, 'Informatyka', 15),
(3, 'Język polski', 5),
(4, 'Matematyka dyskretna', 10),
(5, 'Fizyka kwantowa', 12),
(6, 'Chemia organiczna', 10),
(7, 'Biotechnologia', 8),
(8, 'Religioznawstwo', 3),
(9, 'Francuski', 7),
(10, 'Hiszpański', 7);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
