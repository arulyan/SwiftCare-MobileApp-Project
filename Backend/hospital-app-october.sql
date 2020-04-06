-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2020 at 07:38 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospital-app-october`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(255) NOT NULL,
  `email` text NOT NULL,
  `pasword` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `pasword`) VALUES
(1, 'admin@gmail.com', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `title` text NOT NULL,
  `story` text NOT NULL,
  `id` int(255) NOT NULL,
  `imgs` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`title`, `story`, `id`, `imgs`) VALUES
('cool', 'Lorem ipsum sed nulla semper torquent turpis et adipiscing dictumst pharetra duis lorem neque, libero egestas ipsum odio vivamus pharetra ultricies vivamus maecenas quam fringilla congue taciti ullamcorper ornare dictum.', 1, 'https://www.logoground.com/uploads6/dv6y2019124112019-08-104803380Wolf.jpg'),
('happiness', 'Lorem ipsum sed nulla semper torquent turpis et adipiscing dictumst pharetra duis lorem neque, libero egestas ipsum odio vivamus pharetra ultricies vivamus maecenas quam fringilla congue taciti ullamcorper ornare dictum.', 2, 'https://evolllution.com/wp-content/uploads/2018/04/Carol-Fleming-April-5-2018-Sized.jpeg'),
('hail', 'Lorem ipsum sed nulla semper torquent turpis et adipiscing dictumst pharetra duis lorem neque, libero egestas ipsum odio vivamus pharetra ultricies vivamus maecenas quam fringilla congue taciti ullamcorper ornare dictum.', 14, 'https://thelatopteam.com/wp-content/uploads/2018/08/is-hail-damage-to-roof-covered-by-insurance.jpg'),
('loop', 'Lorem ipsum sed nulla semper torquent turpis et adipiscing dictumst pharetra duis lorem neque, libero egestas ipsum odio vivamus pharetra ultricies vivamus maecenas quam fringilla congue taciti ullamcorper ornare dictum.', 30, 'https://img3.stockfresh.com/files/i/ildi/m/19/1898072_stock-photo-colorful-cereal-loops-with-different-fruit-flavour.jpg'),
('last time', 'Lorem ipsum sed nulla semper torquent turpis et adipiscing dictumst pharetra duis lorem neque, libero egestas ipsum odio vivamus pharetra ultricies vivamus maecenas quam fringilla congue taciti ullamcorper ornare dictum.', 33, 'https://www.kidskintha.com/wp-content/uploads/2014/12/letting-go.jpg'),
('onion', 'Lorem ipsum sed nulla semper torquent turpis et adipiscing dictumst pharetra duis lorem neque, libero egestas ipsum odio vivamus pharetra ultricies vivamus maecenas quam fringilla congue taciti ullamcorper ornare dictum.', 40, 'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/176/184/144442684_XS.jpg'),
('admin', 'Lorem ipsum sed nulla semper torquent turpis et adipiscing dictumst pharetra duis lorem neque, libero egestas ipsum odio vivamus pharetra ultricies vivamus maecenas quam fringilla congue taciti ullamcorper ornare dictum.', 41, 'https://img3.stockfresh.com/files/r/rastudio/m/63/9962324_stock-vector-system-administration-concept-vector-illustration.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `booked`
--

CREATE TABLE `booked` (
  `id` int(10) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `contact` varchar(12) NOT NULL,
  `month` int(15) NOT NULL,
  `day` int(10) NOT NULL,
  `weekday` int(10) NOT NULL,
  `docname` varchar(30) NOT NULL,
  `time` varchar(10) NOT NULL,
  `prescription` text,
  `mobile` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booked`
--

INSERT INTO `booked` (`id`, `username`, `email`, `contact`, `month`, `day`, `weekday`, `docname`, `time`, `prescription`, `mobile`) VALUES
(9, 'ArulyanAsokan', 'a@a.com', '1212121212', 10, 4, 1, 'doc1', '10:00', 'Hello Arulyan, how u feeling today?', NULL),
(10, 'EugiroHanwa', 'e@e.com', '2147483647', 10, 10, 0, 'doc1', '10:00', 'U r good to go Arulyan', NULL),
(11, 'Arulyan', 'a@a.com', '2147483647', 10, 5, 2, 'doc1', '9:00', 'Hello Arulyan, U r now good To Go', NULL),
(13, 'Arulyan', 'e@e.com', '2147483647', 10, 10, 0, 'doc1', '10:00', 'U r good to go Arulyan', NULL),
(14, 'Eugiro', 'e@e.com', '2147483647', 10, 14, 4, 'doc1', '10:00', 'U r good to go Eugiro\n', NULL),
(15, 'Eugiro', 'e@e.com', '2147483647', 10, 15, 5, 'doc1', '10:00', 'Hello Eugiro u r now good to go!', NULL),
(21, 'Eugiro', 'e@e.com', '2147483647', 11, 7, 6, 'doc1', '9:00', 'Eugiro u r now good to go!', NULL),
(25, 'YujiroAsokan', 'e@e.com', '2147483647', 11, 29, 0, 'doc1', '9:00', 'Hip Hip Hurray Mr. Hanwa!', NULL),
(26, 'YujiroHanwa', 'e@e.com', ' 7617217291 ', 1, 10, 1, 'doc1', '10:00', NULL, NULL),
(27, 'Baki', 'y@y.com', ' 7897987989 ', 1, 10, 1, 'doc1', '9:30', NULL, NULL),
(30, 'Arulyan', 'a@a.com', ' 6465646444 ', 1, 12, 3, 'doc1', '10:00', NULL, '46181df6-729a-41f3-bd09-3c0ca0bb91af');

-- --------------------------------------------------------

--
-- Table structure for table `comdiseases`
--

CREATE TABLE `comdiseases` (
  `Id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Category` varchar(30) NOT NULL,
  `Image` varchar(200) NOT NULL,
  `Symptoms` mediumtext NOT NULL,
  `Treatment` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comdiseases`
--

INSERT INTO `comdiseases` (`Id`, `Name`, `Category`, `Image`, `Symptoms`, `Treatment`) VALUES
(1, 'Hypothermia', 'Cold', 'https://thetrekkinglife.com/images/stories/seguridad/hipotermia.png', 'Signs and symptoms of hypothermia include:\r\n\r\nShivering\r\nSlurred speech or mumbling\r\nSlow, shallow breathing\r\nWeak pulse\r\nClumsiness or lack of coordination\r\nDrowsiness or very low energy\r\nConfusion or memory loss\r\nLoss of consciousness\r\nBright red, cold skin (in infants)', 'The diagnosis of hypothermia is usually apparent based on a person\'s physical signs and the conditions in which the person with hypothermia became ill or was found. Blood tests also can help confirm hypothermia and its severity.'),
(2, 'Frosbite', 'Cold', 'https://medlineplus.gov/ency/images/ency/fullsize/9339.jpg', 'With frostbite, the skin gets very cold, then numb, hard and pale.', 'Minor frostbite can be treated at home with basic first-aid measures. For all other frostbite, after appropriate first aid and assessment for hypothermia, treatment may involve rewarming, medications, wound care, surgery and various therapies, depending on the severity of your injury. Rewarming of the skin.'),
(3, 'Food Poisoning', 'Stomach Ache', 'https://resize.hswstatic.com/w_907/gif/food-poisoning-1.jpg', 'Food poisoning symptoms may include cramping, nausea, vomiting or diarrhoea.', 'Most food poisoning is mild and resolves without treatment. Ensuring adequate hydration is the most important aspect of treatment.'),
(4, 'Stomach Ulcer', 'Stomach Ache', 'https://www.fairview.org/hlimg/krames/172311.jpg', 'Upper abdominal pain is a common symptom.', 'Treatment usually includes medication to decrease stomach acid production. If it is caused by bacteria, antibiotics may be required.');

-- --------------------------------------------------------

--
-- Table structure for table `comprobs`
--

CREATE TABLE `comprobs` (
  `Id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Img` varchar(150) NOT NULL,
  `Descript` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comprobs`
--

INSERT INTO `comprobs` (`Id`, `Name`, `Img`, `Descript`) VALUES
(1, 'Cold', 'https://harmanayurveda.files.wordpress.com/2013/10/cold1.jpg', 'Body temperature is high'),
(2, 'Stomach Ache', 'https://images-na.ssl-images-amazon.com/images/I/31-ztj0WKmL._SX425_.jpg', 'Did I eat something wrong');

-- --------------------------------------------------------

--
-- Table structure for table `doc1`
--

CREATE TABLE `doc1` (
  `id` int(10) NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contact` varchar(12) DEFAULT NULL,
  `month` int(10) DEFAULT NULL,
  `day` int(10) DEFAULT NULL,
  `weekday` int(10) DEFAULT NULL,
  `time` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doc1`
--

INSERT INTO `doc1` (`id`, `username`, `email`, `contact`, `month`, `day`, `weekday`, `time`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, 0, '9:00'),
(2, NULL, NULL, NULL, NULL, NULL, 0, '9:30'),
(3, NULL, NULL, NULL, NULL, NULL, 0, '10:00'),
(4, NULL, NULL, NULL, NULL, NULL, 1, '9:00'),
(5, 'Baki', 'y@y.com', '7897987989', 1, 10, 1, '9:30'),
(6, 'YujiroHanwa', 'e@e.com', '7617217291', 1, 10, 1, '10:00'),
(7, NULL, NULL, NULL, NULL, NULL, 2, '9:00'),
(9, NULL, NULL, NULL, NULL, NULL, 2, '10:00'),
(10, NULL, NULL, NULL, NULL, NULL, 3, '9:00'),
(11, NULL, NULL, NULL, NULL, NULL, 3, '9:30'),
(12, 'Arulyan', 'a@a.com', '6465646444', 1, 12, 3, '10:00'),
(13, NULL, NULL, NULL, NULL, NULL, 4, '9:00'),
(14, NULL, NULL, NULL, NULL, NULL, 4, '9:30'),
(15, NULL, NULL, NULL, NULL, NULL, 4, '10:00'),
(16, NULL, NULL, NULL, NULL, NULL, 5, '9:00'),
(17, NULL, NULL, NULL, NULL, NULL, 5, '9:30'),
(18, NULL, NULL, NULL, NULL, NULL, 5, '10:00'),
(19, NULL, NULL, NULL, NULL, NULL, 6, '9:00'),
(20, NULL, NULL, NULL, NULL, NULL, 6, '9:30'),
(21, NULL, NULL, NULL, NULL, NULL, 6, '10:00');

-- --------------------------------------------------------

--
-- Table structure for table `doc2`
--

CREATE TABLE `doc2` (
  `id` int(10) NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contact` int(11) DEFAULT NULL,
  `month` int(10) DEFAULT NULL,
  `day` int(10) DEFAULT NULL,
  `weekday` int(10) DEFAULT NULL,
  `time` varchar(10) NOT NULL,
  `slot` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doc2`
--

INSERT INTO `doc2` (`id`, `username`, `email`, `contact`, `month`, `day`, `weekday`, `time`, `slot`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, 0, '9:00', 0),
(2, NULL, NULL, NULL, NULL, NULL, 0, '12:30', 0);

-- --------------------------------------------------------

--
-- Table structure for table `doc3`
--

CREATE TABLE `doc3` (
  `id` int(10) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `contact` int(11) NOT NULL,
  `month` int(10) NOT NULL,
  `day` int(10) NOT NULL,
  `weekday` int(10) NOT NULL,
  `time` varchar(10) NOT NULL,
  `slot` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `docinfo`
--

CREATE TABLE `docinfo` (
  `id` int(10) NOT NULL,
  `docname` varchar(30) NOT NULL,
  `email` varchar(25) NOT NULL,
  `password` varchar(20) NOT NULL,
  `specialization` varchar(25) NOT NULL,
  `YearOfExp` int(8) NOT NULL DEFAULT '10',
  `Qualifications` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `docinfo`
--

INSERT INTO `docinfo` (`id`, `docname`, `email`, `password`, `specialization`, `YearOfExp`, `Qualifications`) VALUES
(1, 'doc1', 'doc1@gmail.com', 'doc1', 'Child Specialist', 8, 'MCM,DMSc'),
(2, 'doc2', 'doc2@gmail.com', 'doc2', 'Ear Nose Throat', 10, 'DClinSurg'),
(3, 'doc3', 'doc3@gmail.com', 'doc3', 'Dental care', 10, 'DCM'),
(4, 'doc4', 'doc4@gmail.com', 'doc4', 'Eye Specialist', 10, 'DMSc, DMedSc'),
(5, 'doc5', 'doc5@gmail.com', 'doc5', 'Child Specialist', 10, 'MMSc, MMedSc'),
(6, 'doc6', 'doc6@gmail.com', 'doc6', 'Ear Nose Throat', 10, 'MSc'),
(7, 'doc7', 'doc7@gmail.com', 'doc7', 'Dental care', 10, 'MCM'),
(8, 'doc8', 'doc8@gmail.com', 'doc8', 'Eye Specialist', 10, 'MD(Res), DM');

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `ID` int(200) NOT NULL,
  `NAME` varchar(200) NOT NULL,
  `EMAIL` varchar(200) NOT NULL,
  `PASSWORD` varchar(200) NOT NULL,
  `AGE` int(11) NOT NULL,
  `CONTACT` int(200) UNSIGNED NOT NULL,
  `BLOOD` varchar(200) NOT NULL,
  `ADDRESS` varchar(200) NOT NULL,
  `MEDICATION` varchar(200) NOT NULL,
  `GENDER` varchar(200) NOT NULL,
  `Image` varchar(300) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`ID`, `NAME`, `EMAIL`, `PASSWORD`, `AGE`, `CONTACT`, `BLOOD`, `ADDRESS`, `MEDICATION`, `GENDER`, `Image`, `mobile`) VALUES
(43, 'Abhinav', 'abhinavsharma123@gmail.com', '$2b$10$hgwOFukCWwDAlve10UN4CuUfmK45p3wUAwM8E1Z3qKjMHyaELtPSm', 21, 4294967295, 'a+', 'india', 'india', 'MALE', NULL, ''),
(50, 'MarginBuu', 'm@bu.com', '$2b$10$unpi.4wa5.qHGcepmVAxmeTvYD9WFEG7bb91h9h3gAHiK8dnleeeO', 100, 1234567890, 'O+', 'none', 'none', 'X', NULL, ''),
(53, 'Eugiro', 'e@e.com', '$2b$10$boJvsthbXWHj99/NBCczLuTVKviSxNxIUGQb9bGlTDujR/.7X5vZi', 35, 4294967295, 'ABC+', 'Wonderor', 'Never', 'Male', NULL, ''),
(75, 'Yujiro', 'y@y.com', '$2b$10$VlQ8c8p2X1cZbRhAbPwO2OTXv11uEvoUn308hW.cyroZErSUaYpLa', 35, 4294967295, 'O+', 'Free', 'none', 'Male', 'http://localhost:3000/uploads/1581274040922-image.jpeg', ''),
(76, 'Arulyan', 'a@a.com', '$2b$10$pbouEQYjnrgmLBPTFzmfG.OLB.Xkk/bpuIuLOAmhMCcOSHjJKNbM.', 20, 4294967295, 'O+', 'Mano', 'none', 'Male', 'http://localhost:3000/uploads/1581356086004-image.jpeg', '46181df6-729a-41f3-bd09-3c0ca0bb91af');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booked`
--
ALTER TABLE `booked`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comdiseases`
--
ALTER TABLE `comdiseases`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `comprobs`
--
ALTER TABLE `comprobs`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `doc1`
--
ALTER TABLE `doc1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doc2`
--
ALTER TABLE `doc2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `docinfo`
--
ALTER TABLE `docinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `booked`
--
ALTER TABLE `booked`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `comdiseases`
--
ALTER TABLE `comdiseases`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `comprobs`
--
ALTER TABLE `comprobs`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `doc1`
--
ALTER TABLE `doc1`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `doc2`
--
ALTER TABLE `doc2`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `docinfo`
--
ALTER TABLE `docinfo`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `ID` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `testing` ON SCHEDULE EVERY 1 DAY STARTS '2019-10-03 23:50:00' ON COMPLETION PRESERVE ENABLE DO update appointment 
set 
slot = 0
where day = (DAYOFWEEK(NOW()) - 1)$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
