-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 30, 2018 at 08:24 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `egg_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `egg`
--

CREATE TABLE `egg` (
  `id` int(11) NOT NULL,
  `type` tinyint(4) NOT NULL DEFAULT '0',
  `vector_x` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `vector_y` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `collect_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `egg`
--

INSERT INTO `egg` (`id`, `type`, `vector_x`, `vector_y`, `collect_time`) VALUES
(1, 0, 12, 14, '2018-04-30 16:16:07'),
(2, 0, 7, 22, '2018-04-30 16:15:26'),
(3, 0, 9, 21, '2018-04-30 16:15:30'),
(4, 0, 14, 3, '2018-04-30 16:15:45'),
(5, 0, 11, 4, '2018-04-30 16:15:55'),
(6, 0, 11, 9, '2018-04-30 16:15:08'),
(7, 0, 18, 11, '2018-04-30 16:16:05'),
(8, 0, 21, 3, '2018-04-30 16:16:57'),
(9, 0, 6, 3, '2018-04-30 16:15:39'),
(10, 0, 15, 3, '2018-04-30 16:15:31'),
(11, 0, 23, 2, '2018-04-30 16:16:04'),
(12, 0, 17, 2, '2018-04-30 16:15:35'),
(13, 0, 5, 11, '2018-04-30 16:15:49'),
(14, 0, 10, 10, '2018-04-30 16:15:32'),
(15, 0, 12, 15, '2018-04-30 16:15:44'),
(16, 0, 2, 19, '2018-04-30 16:15:53'),
(17, 0, 5, 25, '2018-04-30 16:15:53'),
(18, 0, 1, 5, '2018-04-30 16:15:41'),
(19, 0, 23, 3, '2018-04-30 16:16:11'),
(20, 0, 1, 21, '2018-04-30 16:15:42'),
(21, 0, 10, 27, '2018-04-30 16:15:56'),
(22, 0, 6, 26, '2018-04-30 16:15:52'),
(23, 0, 18, 27, '2018-04-30 16:15:33'),
(24, 0, 7, 20, '2018-04-30 16:16:10'),
(25, 0, 24, 21, '2018-04-30 16:15:47'),
(26, 1, 22, 4, '2018-04-30 16:16:00'),
(27, 1, 5, 25, '2018-04-30 16:15:06'),
(28, 1, 10, 28, '2018-04-30 16:15:08'),
(29, 1, 14, 25, '2018-04-30 16:15:34'),
(30, 1, 3, 16, '2018-04-30 16:15:57'),
(31, 1, 6, 2, '2018-04-30 16:15:50'),
(32, 1, 25, 12, '2018-04-30 16:35:29'),
(33, 1, 1, 19, '2018-04-30 16:15:03'),
(34, 1, 5, 22, '2018-04-30 16:15:50'),
(35, 1, 28, 21, '2018-04-30 16:15:49'),
(36, 1, 24, 22, '2018-04-30 16:15:42'),
(37, 1, 22, 24, '2018-04-30 16:15:05'),
(38, 1, 10, 4, '2018-04-30 16:15:46'),
(39, 1, 13, 3, '2018-04-30 16:15:51'),
(40, 1, 2, 19, '2018-04-30 16:15:45'),
(41, 1, 23, 18, '2018-04-30 16:35:28'),
(42, 1, 16, 23, '2018-04-30 16:15:24'),
(43, 1, 1, 28, '2018-04-30 16:15:34'),
(44, 1, 14, 20, '2018-04-30 16:16:57'),
(45, 1, 3, 6, '2018-04-30 16:15:46'),
(46, 2, 11, 23, '2018-04-30 16:15:47'),
(47, 2, 23, 25, '2018-04-30 16:15:56'),
(48, 2, 3, 26, '2018-04-30 16:16:04'),
(49, 2, 27, 27, '2018-04-30 16:15:53'),
(50, 2, 21, 22, '2018-04-30 16:35:28');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `vector_x` varchar(255) NOT NULL DEFAULT '1',
  `vector_y` varchar(255) NOT NULL DEFAULT '1',
  `bronze_egg_collected` int(11) NOT NULL DEFAULT '0',
  `silver_egg_collected` int(11) NOT NULL DEFAULT '0',
  `gold_egg_collected` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `vector_x`, `vector_y`, `bronze_egg_collected`, `silver_egg_collected`, `gold_egg_collected`) VALUES
(1, 'Florian', 'test', '16', '19', 43, 37, 9),
(3, 'Erik', 'test', '6', '11', 0, 0, 0),
(4, 'Jaakko', 'test', '1', '1', 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `egg`
--
ALTER TABLE `egg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `egg`
--
ALTER TABLE `egg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
