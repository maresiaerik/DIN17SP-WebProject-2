-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 02, 2018 at 02:41 AM
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
(1, 0, 3, 17, '2018-05-01 22:38:58'),
(2, 0, 21, 22, '2018-05-02 00:14:13'),
(3, 0, 11, 25, '2018-05-01 21:43:52'),
(4, 0, 6, 11, '2018-05-01 21:27:21'),
(5, 0, 2, 28, '2018-05-01 23:56:10'),
(6, 0, 2, 27, '2018-05-01 20:59:56'),
(7, 0, 4, 26, '2018-05-01 20:44:36'),
(8, 0, 25, 19, '2018-05-02 00:14:12'),
(9, 0, 26, 11, '2018-05-02 00:43:08'),
(10, 0, 25, 5, '2018-05-01 21:27:20'),
(11, 0, 3, 7, '2018-05-01 18:00:35'),
(12, 0, 28, 16, '2018-05-01 19:02:21'),
(13, 0, 5, 11, '2018-04-30 16:15:49'),
(14, 0, 16, 24, '2018-05-02 00:43:08'),
(15, 0, 8, 28, '2018-05-01 21:05:01'),
(16, 0, 2, 19, '2018-04-30 16:15:53'),
(17, 0, 5, 25, '2018-04-30 16:15:53'),
(18, 0, 9, 13, '2018-05-01 21:44:03'),
(19, 0, 9, 22, '2018-05-02 00:14:13'),
(20, 0, 1, 21, '2018-04-30 16:15:42'),
(21, 0, 10, 27, '2018-04-30 16:15:56'),
(22, 0, 6, 26, '2018-04-30 16:15:52'),
(23, 0, 6, 6, '2018-05-02 01:32:45'),
(24, 0, 16, 25, '2018-05-02 00:14:10'),
(25, 0, 26, 12, '2018-05-01 21:16:38'),
(26, 1, 4, 28, '2018-05-01 20:54:56'),
(27, 1, 5, 25, '2018-04-30 16:15:06'),
(28, 1, 10, 28, '2018-04-30 16:15:08'),
(29, 1, 14, 25, '2018-04-30 16:15:34'),
(30, 1, 16, 12, '2018-05-02 00:43:01'),
(31, 1, 21, 9, '2018-05-02 01:33:19'),
(32, 1, 27, 25, '2018-05-01 21:37:26'),
(33, 1, 1, 19, '2018-04-30 16:15:03'),
(34, 1, 1, 13, '2018-05-02 00:14:14'),
(35, 1, 17, 10, '2018-05-01 22:58:59'),
(36, 1, 16, 28, '2018-05-01 21:16:38'),
(37, 1, 14, 16, '2018-05-01 21:27:41'),
(38, 1, 1, 18, '2018-05-01 18:16:50'),
(39, 1, 25, 1, '2018-05-01 21:29:30'),
(40, 1, 2, 19, '2018-04-30 16:15:45'),
(41, 1, 5, 28, '2018-05-01 23:56:09'),
(42, 1, 28, 28, '2018-05-01 23:56:08'),
(43, 1, 1, 28, '2018-04-30 16:15:34'),
(44, 1, 8, 15, '2018-05-01 22:17:50'),
(45, 1, 15, 10, '2018-05-01 23:16:23'),
(46, 2, 27, 1, '2018-05-02 00:14:15'),
(47, 2, 9, 12, '2018-05-01 23:56:08'),
(48, 2, 3, 26, '2018-04-30 16:16:04'),
(49, 2, 14, 8, '2018-05-02 01:33:18'),
(50, 2, 13, 11, '2018-05-02 01:33:19');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `online` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `username` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `vector_x` text NOT NULL,
  `vector_y` text NOT NULL,
  `bronze_egg_collected` int(11) NOT NULL DEFAULT '0',
  `silver_egg_collected` int(11) NOT NULL DEFAULT '0',
  `gold_egg_collected` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `online`, `username`, `password`, `vector_x`, `vector_y`, `bronze_egg_collected`, `silver_egg_collected`, `gold_egg_collected`) VALUES
(1, 0, 'Florian', 'test', '3', '7', 0, 0, 0),
(3, 0, 'Erik', 'test', '4', '6', 0, 0, 0),
(4, 0, 'Jaakko', 'test', '4', '8', 0, 0, 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
