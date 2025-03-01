-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th2 27, 2025 lúc 05:07 PM
-- Phiên bản máy phục vụ: 8.0.30
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `jbl`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `anhsp`
--

CREATE TABLE `anhsp` (
  `id` int NOT NULL,
  `idsp` int NOT NULL,
  `IMG` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT '404.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `anhsp`
--

INSERT INTO `anhsp` (`id`, `idsp`, `IMG`) VALUES
(1, 2, '../Upload/Product/1-1.webp'),
(2, 2, '../Upload/Product/1-2.webp'),
(3, 2, '../Upload/Product/1-3.webp'),
(4, 2, '../Upload/Product/1-4.webp'),
(5, 2, '../Upload/Product/1-5.webp'),
(6, 3, '../Upload/Product/2-1.webp'),
(7, 3, '../Upload/Product/2-2.webp'),
(8, 3, '../Upload/Product/2-3.webp'),
(9, 3, '../Upload/Product/2-4.webp'),
(10, 3, '../Upload/Product/2-5.webp'),
(11, 3, '../Upload/Product/2-6.webp'),
(12, 4, '../Upload/Product/3-1.webp'),
(13, 4, '../Upload/Product/3-2.webp'),
(14, 4, '../Upload/Product/3-3.webp'),
(15, 4, '../Upload/Product/3-4.webp'),
(16, 4, '../Upload/Product/3-5.webp'),
(17, 4, '../Upload/Product/3-6.webp'),
(18, 4, '../Upload/Product/3-7.webp'),
(19, 4, '../Upload/Product/3-8.webp'),
(20, 4, '../Upload/Product/3-9.webp'),
(21, 5, '../Upload/Product/4-1.webp'),
(22, 5, '../Upload/Product/4-2.webp'),
(23, 5, '../Upload/Product/4-3.webp'),
(24, 5, '../Upload/Product/4-4.webp'),
(25, 5, '../Upload/Product/4-5.webp'),
(26, 5, '../Upload/Product/4-6.webp'),
(27, 6, '../Upload/Product/5-1.webp'),
(28, 6, '../Upload/Product/5-2.webp'),
(29, 6, '../Upload/Product/5-3.webp'),
(30, 6, '../Upload/Product/5-4.webp'),
(31, 6, '../Upload/Product/5-5.webp'),
(32, 6, '../Upload/Product/5-6.webp'),
(33, 6, '../Upload/Product/5-7.webp'),
(34, 7, '../Upload/Product/6-1.webp'),
(35, 7, '../Upload/Product/6-2.webp'),
(36, 7, '../Upload/Product/6-3.webp'),
(37, 7, '../Upload/Product/6-4.webp'),
(38, 7, '../Upload/Product/6-5.webp'),
(39, 7, '../Upload/Product/6-6.webp'),
(40, 8, '../Upload/Product/7-1.webp'),
(41, 8, '../Upload/Product/7-2.webp'),
(42, 8, '../Upload/Product/7-3.webp'),
(43, 8, '../Upload/Product/7-4.webp'),
(44, 8, '../Upload/Product/7-5.webp'),
(45, 9, '../Upload/Product/8-1.webp'),
(46, 9, '../Upload/Product/8-2.webp'),
(47, 9, '../Upload/Product/8-3.webp'),
(48, 9, '../Upload/Product/8-4.webp'),
(49, 9, '../Upload/Product/8-5.webp'),
(50, 9, '../Upload/Product/8-6.webp'),
(51, 9, '../Upload/Product/8-7.webp'),
(52, 9, '../Upload/Product/8-8.webp'),
(53, 10, '../Upload/Product/9-1.webp'),
(54, 10, '../Upload/Product/9-2.webp'),
(55, 10, '../Upload/Product/9-3.webp'),
(56, 10, '../Upload/Product/9-4.webp'),
(57, 10, '../Upload/Product/9-5.webp'),
(58, 10, '../Upload/Product/9-6.webp'),
(59, 10, '../Upload/Product/9-7.webp'),
(60, 11, '../Upload/Product/10-1.webp'),
(61, 11, '../Upload/Product/10-2.webp'),
(62, 11, '../Upload/Product/10-3.webp'),
(63, 11, '../Upload/Product/10-4.webp'),
(64, 12, '../Upload/Product/11-1.webp'),
(65, 12, '../Upload/Product/11-2.webp'),
(66, 12, '../Upload/Product/11-3.webp'),
(67, 12, '../Upload/Product/11-4.webp'),
(68, 12, '../Upload/Product/11-5.webp'),
(69, 12, '../Upload/Product/11-6.webp'),
(70, 12, '../Upload/Product/11-7.webp'),
(71, 13, '../Upload/Product/12-1.webp'),
(72, 13, '../Upload/Product/12-2.webp'),
(73, 13, '../Upload/Product/12-3.webp'),
(74, 13, '../Upload/Product/12-4.webp'),
(75, 13, '../Upload/Product/12-5.webp'),
(76, 13, '../Upload/Product/12-6.webp'),
(77, 13, '../Upload/Product/12-7.webp'),
(78, 13, '../Upload/Product/12-8.webp'),
(79, 13, '../Upload/Product/12-9.webp'),
(80, 13, '../Upload/Product/12-10.webp'),
(81, 14, '../Upload/Product/13-1.webp'),
(82, 14, '../Upload/Product/13-2.webp'),
(83, 14, '../Upload/Product/13-3.webp'),
(84, 14, '../Upload/Product/13-4.webp'),
(85, 14, '../Upload/Product/13-5.webp'),
(86, 14, '../Upload/Product/13-6.webp'),
(87, 14, '../Upload/Product/13-7.webp'),
(88, 15, '../Upload/Product/14-1.webp'),
(89, 15, '../Upload/Product/14-2.webp'),
(90, 15, '../Upload/Product/14-3.webp'),
(91, 15, '../Upload/Product/14-4.webp'),
(92, 15, '../Upload/Product/14-5.webp'),
(93, 15, '../Upload/Product/14-6.webp'),
(94, 15, '../Upload/Product/14-7.webp'),
(95, 15, '../Upload/Product/14-8.webp'),
(96, 15, '../Upload/Product/14-9.webp'),
(97, 16, '../Upload/Product/15-1.webp'),
(98, 16, '../Upload/Product/15-2.webp'),
(99, 16, '../Upload/Product/15-3.webp'),
(100, 16, '../Upload/Product/15-4.webp'),
(101, 16, '../Upload/Product/15-5.webp'),
(102, 16, '../Upload/Product/15-6.webp'),
(103, 16, '../Upload/Product/15-7.webp'),
(104, 17, '../Upload/Product/16-1.webp'),
(105, 17, '../Upload/Product/16-2.webp'),
(106, 17, '../Upload/Product/16-3.webp'),
(107, 17, '../Upload/Product/16-4.webp'),
(108, 17, '../Upload/Product/16-5.webp'),
(109, 18, '../Upload/Product/17-1.webp'),
(110, 18, '../Upload/Product/17-2.webp'),
(111, 18, '../Upload/Product/17-3.webp'),
(112, 18, '../Upload/Product/17-4.webp'),
(113, 18, '../Upload/Product/17-5.webp'),
(114, 18, '../Upload/Product/17-6.webp'),
(115, 19, '../Upload/Product/18-1.webp'),
(116, 19, '../Upload/Product/18-2.webp'),
(117, 19, '../Upload/Product/18-3.webp'),
(118, 19, '../Upload/Product/18-4.webp'),
(119, 20, '../Upload/Product/19-1.webp'),
(120, 20, '../Upload/Product/19-2.webp'),
(121, 20, '../Upload/Product/19-3.webp'),
(122, 20, '../Upload/Product/19-4.webp'),
(123, 20, '../Upload/Product/19-5.webp'),
(124, 20, '../Upload/Product/19-6.webp'),
(125, 20, '../Upload/Product/19-7.webp'),
(126, 21, '../Upload/Product/20-1.webp'),
(127, 21, '../Upload/Product/20-2.webp'),
(128, 21, '../Upload/Product/20-3.webp'),
(129, 21, '../Upload/Product/20-4.webp'),
(130, 21, '../Upload/Product/20-5.webp'),
(131, 21, '../Upload/Product/20-6.webp'),
(132, 21, '../Upload/Product/20-7.webp'),
(133, 21, '../Upload/Product/20-8.webp'),
(134, 21, '../Upload/Product/20-9.webp'),
(135, 21, '../Upload/Product/20-10.webp'),
(136, 21, '../Upload/Product/20-11.webp'),
(137, 22, '../Upload/Product/21-1.webp'),
(138, 22, '../Upload/Product/21-2.webp'),
(139, 22, '../Upload/Product/21-3.webp'),
(140, 22, '../Upload/Product/21-4.webp'),
(141, 22, '../Upload/Product/21-5.webp'),
(142, 22, '../Upload/Product/21-6.webp'),
(143, 22, '../Upload/Product/21-7.webp'),
(144, 22, '../Upload/Product/21-8.webp'),
(145, 22, '../Upload/Product/21-9.webp'),
(146, 22, '../Upload/Product/21-10.webp'),
(147, 22, '../Upload/Product/21-11.webp'),
(148, 23, '../Upload/Product/22-1.webp'),
(149, 23, '../Upload/Product/22-2.webp'),
(150, 23, '../Upload/Product/22-3.webp'),
(151, 23, '../Upload/Product/22-4.webp'),
(152, 23, '../Upload/Product/22-5.webp'),
(153, 23, '../Upload/Product/22-6.webp'),
(154, 23, '../Upload/Product/22-7.webp'),
(155, 23, '../Upload/Product/22-8.webp'),
(156, 24, '../Upload/Product/23-1.webp'),
(157, 24, '../Upload/Product/23-2.webp'),
(158, 24, '../Upload/Product/23-3.webp'),
(159, 24, '../Upload/Product/23-4.webp'),
(160, 24, '../Upload/Product/23-5.webp'),
(161, 24, '../Upload/Product/23-6.webp'),
(162, 24, '../Upload/Product/23-7.webp'),
(163, 25, '../Upload/Product/24-1.webp'),
(164, 25, '../Upload/Product/24-2.webp'),
(165, 25, '../Upload/Product/24-3.webp'),
(166, 25, '../Upload/Product/24-4.webp'),
(167, 25, '../Upload/Product/24-5.webp'),
(168, 25, '../Upload/Product/24-6.webp'),
(169, 25, '../Upload/Product/24-7.webp'),
(170, 26, '../Upload/Product/25-1.webp'),
(171, 26, '../Upload/Product/25-2.webp'),
(172, 26, '../Upload/Product/25-3.webp'),
(173, 26, '../Upload/Product/25-4.webp'),
(174, 26, '../Upload/Product/25-5.webp'),
(175, 26, '../Upload/Product/25-6.webp'),
(176, 26, '../Upload/Product/25-7.webp'),
(177, 26, '../Upload/Product/25-8.webp'),
(178, 26, '../Upload/Product/25-9.webp'),
(179, 27, '../Upload/Product/26-1.webp'),
(180, 27, '../Upload/Product/26-2.webp'),
(181, 27, '../Upload/Product/26-3.webp'),
(182, 27, '../Upload/Product/26-4.webp'),
(183, 27, '../Upload/Product/26-5.webp'),
(184, 27, '../Upload/Product/26-6.webp'),
(185, 27, '../Upload/Product/26-7.webp'),
(186, 27, '../Upload/Product/26-8.webp'),
(187, 37, '../Upload/Product/27-1.webp'),
(188, 37, '../Upload/Product/27-2.webp'),
(189, 37, '../Upload/Product/27-3.webp'),
(190, 37, '../Upload/Product/27-4.webp'),
(191, 37, '../Upload/Product/27-5.webp'),
(192, 38, '../Upload/Product/28-1.webp'),
(193, 38, '../Upload/Product/28-2.webp'),
(194, 38, '../Upload/Product/28-3.webp'),
(195, 38, '../Upload/Product/28-4.webp'),
(196, 38, '../Upload/Product/28-5.webp'),
(197, 38, '../Upload/Product/28-6.webp'),
(198, 38, '../Upload/Product/28-7.webp'),
(199, 38, '../Upload/Product/28-8.webp'),
(200, 39, '../Upload/Product/29-1.webp'),
(201, 39, '../Upload/Product/29-2.webp'),
(202, 39, '../Upload/Product/29-3.webp'),
(203, 39, '../Upload/Product/29-4.webp'),
(204, 39, '../Upload/Product/29-5.webp'),
(205, 39, '../Upload/Product/29-6.webp'),
(206, 39, '../Upload/Product/29-7.webp'),
(207, 39, '../Upload/Product/29-8.webp'),
(208, 40, '../Upload/Product/30-1.webp'),
(209, 40, '../Upload/Product/30-2.webp'),
(210, 40, '../Upload/Product/30-3.webp'),
(211, 40, '../Upload/Product/30-4.webp'),
(212, 40, '../Upload/Product/30-5.webp'),
(213, 40, '../Upload/Product/30-6.webp'),
(214, 41, '../Upload/Product/31-1.webp'),
(215, 41, '../Upload/Product/31-2.webp'),
(216, 41, '../Upload/Product/31-3.webp'),
(217, 41, '../Upload/Product/31-4.webp'),
(218, 41, '../Upload/Product/31-5.webp'),
(219, 41, '../Upload/Product/31-6.webp'),
(220, 41, '../Upload/Product/31-7.webp'),
(221, 41, '../Upload/Product/31-8.webp'),
(222, 41, '../Upload/Product/31-9.webp'),
(223, 42, '../Upload/Product/32-1.webp'),
(224, 42, '../Upload/Product/32-2.webp'),
(225, 42, '../Upload/Product/32-3.webp'),
(226, 42, '../Upload/Product/32-4.webp'),
(227, 42, '../Upload/Product/32-5.webp'),
(228, 42, '../Upload/Product/32-6.webp'),
(229, 43, '../Upload/Product/33-1.webp'),
(230, 43, '../Upload/Product/33-2.webp'),
(231, 43, '../Upload/Product/33-3.webp'),
(232, 43, '../Upload/Product/33-4.webp'),
(244, 47, '../Upload/Product/1740551712480.png'),
(246, 49, '../Upload/Product/1740584310101.jpg'),
(249, 52, '../Upload/Product/1740641470356.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `anhtintuc`
--

CREATE TABLE `anhtintuc` (
  `id` int DEFAULT NULL,
  `idtintucs` int NOT NULL,
  `image` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT '404.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banner`
--

CREATE TABLE `banner` (
  `id` int NOT NULL,
  `img` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Trangthai` int NOT NULL DEFAULT '1',
  `Loaihienthi` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluansanpham`
--

CREATE TABLE `binhluansanpham` (
  `id` int NOT NULL,
  `idsanpham` int NOT NULL,
  `idnguoidung` int NOT NULL,
  `Noidung` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluantintuc`
--

CREATE TABLE `binhluantintuc` (
  `id` int NOT NULL,
  `idtintuc` int NOT NULL,
  `idnguoidung` int NOT NULL,
  `Noidung` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietdonhang`
--

CREATE TABLE `chitietdonhang` (
  `id` int NOT NULL,
  `idchitietdonhang` int NOT NULL,
  `Soluong` int NOT NULL,
  `Tongtien` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `id` int NOT NULL,
  `Tendm` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`id`, `Tendm`) VALUES
(1, 'Loa nghe nhạc'),
(2, 'Tai Nghe'),
(3, 'Âm thanh gia đình'),
(4, 'Sản phẩm Gamming'),
(5, 'Âm thanh chuyên nghiệp');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `id` int NOT NULL,
  `Sanpham` int NOT NULL,
  `nguoidung` int NOT NULL,
  `Thoigian` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Không xác định',
  `Tinhtrang` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadon_c`
--

CREATE TABLE `hoadon_c` (
  `id` int NOT NULL,
  `ID_Khachhang` int DEFAULT NULL,
  `Trangthaidonhang` int NOT NULL DEFAULT '1',
  `Tensp` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Gia` int NOT NULL,
  `Soluong` int NOT NULL,
  `id_donhang` int NOT NULL,
  `Tongtien` int NOT NULL,
  `Time_` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT 'Chưa cập nhật'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hoadon_c`
--

INSERT INTO `hoadon_c` (`id`, `ID_Khachhang`, `Trangthaidonhang`, `Tensp`, `Gia`, `Soluong`, `id_donhang`, `Tongtien`, `Time_`) VALUES
(101, 44981011, 1, 'Tai Nghe JBL Tune 520BT - Hàng Chính Hãng', 1090000, 1, 15, 1090000, '14:14:38 27/2/2025'),
(102, 44981011, 2, '[NHẬP JAN7 GIẢM 7%]Loa Bluetooth JBL Charge 5 - TẶNG QUÀ - Hàng Chính Hãng', 3590000, 1, 5, 3590000, '14:14:38 27/2/2025'),
(103, 44981011, 1, 'Tai Nghe JBL Wave Beam 2 - TẶNG SỔ TAY - Hàng Chính Hãng', 1390000, 1, 14, 1390000, '14:14:38 27/2/2025'),
(104, 44981011, 1, 'Loa Bluetooth JBL GO 4 - Hàng Chính Hãng', 1050000, 1, 2, 1050000, '14:14:38 27/2/2025'),
(105, 44981011, 1, 'Tai Nghe JBL Tune 520BT - Hàng Chính Hãng', 1090000, 1, 15, 1090000, '14:33:42 27/2/2025'),
(106, 44981011, 1, '[NHẬP JAN7 GIẢM 7%]Loa Bluetooth JBL Charge 5 - TẶNG QUÀ - Hàng Chính Hãng', 3590000, 1, 5, 3590000, '14:33:42 27/2/2025'),
(107, 44981012, 1, 'Tai Nghe JBL Tune 520BT - Hàng Chính Hãng', 1090000, 1, 15, 1090000, '14:47:36 27/2/2025'),
(108, 44981012, 1, '[NHẬP JAN7 GIẢM 7%]Loa Bluetooth JBL Charge 5 - TẶNG QUÀ - Hàng Chính Hãng', 3590000, 1, 5, 3590000, '14:47:36 27/2/2025');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `imgmotasanpham`
--

CREATE TABLE `imgmotasanpham` (
  `id` int DEFAULT NULL,
  `idmotasanpham` int NOT NULL,
  `image` varchar(120) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaidanhmuc`
--

CREATE TABLE `loaidanhmuc` (
  `id` int NOT NULL,
  `iddm` int NOT NULL,
  `Tendm` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `loaidanhmuc`
--

INSERT INTO `loaidanhmuc` (`id`, `iddm`, `Tendm`) VALUES
(1, 1, 'Loa di động'),
(2, 1, 'Loa tiệc'),
(3, 1, 'Loa radio'),
(4, 2, 'Tai nghe chụp đầu'),
(5, 2, 'Tai nghe nhét tai '),
(6, 2, 'Tai nghe thể thao'),
(7, 3, 'Loa Karaoke'),
(8, 4, 'Loa gamming'),
(9, 4, 'Tai nghe Gamming'),
(10, 5, 'Loa sân khấu'),
(11, 3, 'Loa thông minh'),
(23, 3, 'ppppppppp');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `mausac`
--

CREATE TABLE `mausac` (
  `id` int NOT NULL,
  `idsp` int NOT NULL,
  `Color` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `mausac`
--

INSERT INTO `mausac` (`id`, `idsp`, `Color`) VALUES
(3, 2, 'Red'),
(4, 3, 'Blue'),
(5, 4, 'Black'),
(6, 5, 'Red'),
(7, 6, 'Black'),
(8, 7, 'Red'),
(9, 8, 'White'),
(10, 9, 'Red'),
(11, 10, 'Red'),
(12, 11, 'Green'),
(13, 12, 'Red'),
(14, 13, 'Blue'),
(15, 14, 'Black'),
(16, 15, 'Red'),
(17, 16, 'Black'),
(18, 17, 'Red'),
(19, 18, 'White'),
(20, 19, 'Red'),
(21, 2, 'Blue'),
(22, 2, 'White'),
(23, 20, 'Red'),
(24, 21, 'Blue'),
(25, 22, 'Black'),
(26, 23, 'Red'),
(27, 24, 'Black'),
(28, 25, 'Red'),
(29, 26, 'White'),
(30, 27, 'Red');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `motasanpham`
--

CREATE TABLE `motasanpham` (
  `id` int NOT NULL,
  `idsp` int NOT NULL,
  `Noidung` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidung`
--

CREATE TABLE `nguoidung` (
  `id` int NOT NULL,
  `Quen` int NOT NULL DEFAULT '1',
  `Ten` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Matkhau` varchar(50) COLLATE utf8mb3_unicode_ci NOT NULL,
  `SĐT` int DEFAULT '12345678',
  `Diachi` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT 'Chưa cập nhật',
  `Ngaysinh` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `Gioitinh` varchar(20) COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT 'Chưa cập nhật',
  `IMG` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT '/Upload/Acount/image Acount.jpg',
  `Tinh_Thanhpho` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT 'Cập Nhật Thành Phố',
  `Quan_huyen` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT 'Quận Huyện',
  `Phuong_Thixa` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT 'Phường Thị Xã',
  `Diachithem` varchar(2000) COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nguoidung`
--

INSERT INTO `nguoidung` (`id`, `Quen`, `Ten`, `Email`, `Matkhau`, `SĐT`, `Diachi`, `Ngaysinh`, `Gioitinh`, `IMG`, `Tinh_Thanhpho`, `Quan_huyen`, `Phuong_Thixa`, `Diachithem`) VALUES
(44981009, 2, 'Nguyễn Huân', 'Huan@', '12345', NULL, 'Chưa cập nhật', NULL, 'Chưa cập nhật', '/Upload/Acount/image Acount.jpg', 'Hồ Chí Minh', 'Quận Huyện', 'Phường Thị Xã', ''),
(44981010, 1, 'Hoàng Anh', 'Hoananh12@gmail.com', '12345', 12345678, 'Chưa cập nhật', NULL, 'Chưa cập nhật', '/Upload/Acount/image Acount.jpg', 'Hồ Chí Minh', 'Quận Huyện', 'Phường Thị Xã', NULL),
(44981011, 1, 'Đức Nam', 'Nam@gmail.com', '21322', NULL, 'Chưa cập nhật', NULL, 'Chưa cập nhật', '/Upload/Acount/image Acount.jpg', 'Hà Nội', 'Quận Huyện', 'Phường Thị Xã', ''),
(44981012, 2, 'Ngọc Cường', 'Cuong123@gmail.com', '32545324', 12345678, 'Chưa cập nhật', NULL, 'Chưa cập nhật', '/Upload/Acount/image Acount.jpg', 'Cập Nhật Thành Phố', 'Quận Huyện', 'Phường Thị Xã', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phanhoibinhluansanpham`
--

CREATE TABLE `phanhoibinhluansanpham` (
  `id` int DEFAULT NULL,
  `idbinhluansp` int NOT NULL,
  `idnguoidung` int NOT NULL,
  `Noidung` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phanhoibinhluantintuc`
--

CREATE TABLE `phanhoibinhluantintuc` (
  `id` int DEFAULT NULL,
  `idbinhluantintuc` int NOT NULL,
  `idnguoidung` int NOT NULL,
  `Noidung` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phivanchuyen`
--

CREATE TABLE `phivanchuyen` (
  `id` int NOT NULL,
  `Phivanchuyen` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phuongthitran`
--

CREATE TABLE `phuongthitran` (
  `id` int NOT NULL,
  `idquanhuyen` int NOT NULL,
  `Quanhuyen` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quanhuyen`
--

CREATE TABLE `quanhuyen` (
  `id` int NOT NULL,
  `idthanhpho` int NOT NULL,
  `Quanhuyen` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `id` int NOT NULL,
  `id_loaidm` int NOT NULL,
  `Tensp` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Tranthai` int NOT NULL DEFAULT '1',
  `Luotban` int NOT NULL DEFAULT '1',
  `Giaban` int NOT NULL,
  `Sale` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT 'No',
  `Tilegiamgia` int DEFAULT NULL,
  `URL_Youtube` varchar(70) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `Soluongconlai` int DEFAULT NULL,
  `Dacdiemnoibat` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `Soluongsao` int NOT NULL DEFAULT '1',
  `Tronghopcogi` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`id`, `id_loaidm`, `Tensp`, `Tranthai`, `Luotban`, `Giaban`, `Sale`, `Tilegiamgia`, `URL_Youtube`, `Soluongconlai`, `Dacdiemnoibat`, `Soluongsao`, `Tronghopcogi`) VALUES
(2, 1, 'Loa Bluetooth JBL GO 4 - Hàng Chính Hãng', 1, 14, 1050000, 'Yes', NULL, NULL, NULL, 'Thời lượng pin: lên đến 7 giờ\r\nChuẩn kháng nước, bụi IP67\r\nBluetooth 5.3\r\nKết nối đa loa dễ dàng với Auracast\r\nMàu sắc đa dạng, độc đáo', 1, '1x Loa JBL Go 4\r\n\r\n1x Dây sạc USB Type-C\r\n\r\n1x Hướng dẫn nhanh\r\n\r\n1x Thẻ bảo hành\r\n\r\n1x Bảng an toàn'),
(3, 1, '[NHẬP JAN7 GIẢM 7%]Loa Bluetooth JBL CLIP 5 - Hàng Chính Hãng', 2, 1, 1425000, 'No', NULL, NULL, NULL, 'Móc đa năng tích hợp thế hệ mới\r\nThời lượng pin: lên đến 12 giờ, kéo dài thêm 3 giờ với Playtime Boost\r\nChuẩn kháng nước, bụi IP67\r\nBluetooth 5.3\r\nKết nối đa loa dễ dàng với Auracast', 1, '1x Loa JBL Clip 5\r\n\r\n1x Dây sạc USB Type-C\r\n\r\n1x Hướng dẫn nhanh\r\n\r\n1x Thẻ bảo hành\r\n\r\n1x Bảng an toàn'),
(4, 2, 'Loa Bluetooth JBL Go 3 - Hàng Chính Hãng', 1, 1, 790000, 'No', NULL, NULL, NULL, 'Thời lượng pin: lên đến 5 giờ ( Tùy thuộc vào thể loại nhạc và mức âm lượng)\r\nChống thấm nước và chống bụi IP67\r\nHệ thống Bluetooth v5.1\r\nCổng kết nối USB-C\r\nMàu sắc đa dạng', 1, '1x Loa JBL Go 3\r\n\r\n1x Dây sạc USB Type-C\r\n\r\n1x Hướng dẫn nhanh\r\n\r\n1x Thẻ bảo hành\r\n\r\n1x Bảng an toàn'),
(5, 1, '[NHẬP JAN7 GIẢM 7%]Loa Bluetooth JBL Charge 5 - TẶNG QUÀ - Hàng Chính Hãng', 1, 1, 3590000, 'Yes', NULL, NULL, NULL, 'Thiết kế trẻ trung, năng động, phù hợp với nhiều đối tượng người dùng\r\nChuẩn kháng nước IP67, giúp bảo vệ loa khỏi nước và bụi bẩn\r\nThời lượng chơi nhạc 20h, giúp bạn thưởng thức âm nhạc cả ngày mà không cần sạc lại, tiện lợi và thoải mái.', 1, '1x Loa JBL Charge 5\r\n\r\n1x Cáp sạc USB-Type C\r\n\r\n1x Hướng dẫn nhanh\r\n\r\n1x Thẻ bảo hành\r\n\r\n1x Bảng an toàn'),
(6, 1, '[NHẬP JAN7 GIẢM 7%]Loa Bluetooth JBL Flip 6 - MUA ĐỂ NHẬN QUÀ - Hàng Chính Hãng', 2, 1, 2590000, 'No', NULL, NULL, NULL, 'Thiết kế kháng nước và bụi IP67, giúp bảo vệ thiết bị khỏi mưa, mồ hôi và bụi bẩn\r\nThời gian sử dụng lên đến 12 tiếng liên tục (tùy theo mức âm lượng và thể loại nhạc), cho phép bạn thưởng thức âm nhạc cả ngày mà không cần sạc lại, tiện lợi và thoải mái\r\nThiết kế thời trang đa màu sắc, giúp tạo ra phong cách cá tính và độc đáo cho người dùng\r\nSử dụng JBL Party Boost, cho phép bạn kết nối loa với các loa khác có hỗ trợ JBL Party Boost để tăng cường âm thanh.', 1, '1 Loa JBL Flip 6\r\n\r\n1 Cáp sạc USB Type-C\r\n\r\n1 Bảo hành/Cảnh báo (W/!)\r\n\r\n1 Hướng dẫn nhanh/Bảng an toàn (S/i)'),
(7, 1, 'Loa Bluetooth JBL Pulse 5 - Hàng Chính Hãng', 1, 982, 6690000, 'No', NULL, NULL, NULL, 'Trình diễn LED 360 độ thay đổi theo âm nhạc đẹp mắt\r\nChất âm JBL Original Pro\r\nThời lượng pin đến 12 giờ\r\nChuẩn kháng nước IPX7', 1, '1x Loa JBL Pulse 5\r\n1x Dây cáp sạc JBL Type C\r\n1x Sách hướng dẫn \r\n1x Bảng an toàn\r\n1x Thẻ bảo hành'),
(8, 1, '[NHẬP JAN7 GIẢM 7%]Loa Bluetooth JBL XTREME 4 - Hàng Chính Hãng', 1, 1, 7790000, 'No', NULL, NULL, NULL, 'Công suất: 100W\r\nThời lượng pin khủng đến 24 giờ\r\nCông nghệ AI Soundboost độc đáo\r\nBluetooth 5.3\r\nKháng bụi, nước chuẩn IP67\r\nGhép nối đa loa không giới hạn với Auracast', 1, '1x Loa JBL Xtreme 4\r\n\r\n1x Dây sạc USB Type-C\r\n\r\n1x Hướng dẫn nhanh\r\n\r\n1x Thẻ bảo hành\r\n\r\n1x Bảng an toàn'),
(9, 3, 'Loa Bluetooth JBL Partybox Encore (Kèm 2 Micro) - Hàng Chính Hãng', 1, 87, 10900000, 'Yes', NULL, NULL, NULL, 'Công suất lên tới 100W và dải tần số đáp ứng lên tới 45Hz - 20KHz (-6dB)\r\nThời lượng pin lên đến 10 giờ, cho phép bạn thưởng thức âm nhạc một cách dễ dàng và thoải mái\r\nCó công nghệ True Wireless Stereo cho phép kết nối không dây 2 loa cùng loại\r\nThiết kế nhỏ gọn, sống động với dải led màu sắc, tạo ra không gian giải trí rực rỡ và đầy màu sắc', 1, '1x JBL PartyBox Encore\r\n\r\n1x Dây nguồn AC (Số lượng dây nguồn thay đổi theo khu vực)\r\n\r\n1x Hướng dẫn nhanh\r\n\r\n1x Tấm an toàn\r\n\r\n2x Micro JBL không dây\r\n\r\n1x Thẻ bảo hành'),
(10, 1, 'Loa Bluetooth JBL Flip Essential 2 - Hàng Chính Hãng', 1, 1, 2490000, 'No', NULL, NULL, NULL, 'Thiết kế kháng nước IPX7, cho phép bạn sử dụng loa trong môi trường ẩm ướt\r\nThời gian sử dụng lên đến 10 tiếng liên tục, tùy theo mức âm lượng và thể loại nhạc\r\nThiết kế di động và thời trang', 1, '1x Loa JBL Flip Essential 2\r\n\r\n1x Cáp sạc USB Type-C\r\n\r\n1x  Hướng dẫn nhanh\r\n\r\n1x Thẻ bảo hành/ Bảng an toàn'),
(11, 1, 'Loa Bluetooth JBL Partybox 110 - Hàng Chính Hãng', 1, 1, 12900000, 'No', NULL, NULL, NULL, 'Công suất lên tới 160W và dải tần số đáp ứng lên tới 45Hz - 20KHz (-6dB)\r\nChức năng Bass Boost nâng cao âm trầm, tạo ra hiệu ứng âm thanh sống động và mạnh mẽ\r\nThời lượng pin cực lâu lên đến 12 giờ, cho phép bạn thưởng thức âm nhạc một cách dễ dàng và thoải mái\r\nCó khả năng kết nối không dây qua Bluetooth 5.1 và kết nối có dây qua các cổng AUX và USB\r\nCó đầu vào cho mic, nhạc cụ để hát karaoke hoặc biểu diễn, tạo ra trải nghiệm âm nhạc đa dạng và thú vị\r\nCông nghệ True Wireless Stereo cho phép kết nối không dây 2 loa cùng loại', 1, '1x Loa JBL PartyBox 110\r\n\r\n1x Sách hướng dẫn\r\n\r\n1x Thẻ bảo hành\r\n\r\n1x Thẻ an toàn\r\n\r\nDây nguồn'),
(12, 4, 'Tai Nghe JBL Tune 520BT - Hàng Chính Hãng', 1, 1, 1090000, 'No', NULL, NULL, NULL, 'Thời lượng pin lên đến 57 giờ để phát nhạc trọn cả ngày dài kèm công nghệ sạc nhanh\r\nChất âm JBL Pure Bass trứ danh kèm driver 33mm cho chất âm mạnh mẽ đày sống động\r\nPhiên bản Bluetooth 5.3 mới nhất\r\nKết nối đa điểm thồng minh tiện lợi.', 1, '1x Tai Nghe JBL Tune 520BT\r\n\r\n1x Cáp Sạc USB - C\r\n\r\n1x Hướng Dẫn Sử Dụng\r\n\r\n1x Thẻ bảo hành/ Cảnh báo'),
(13, 4, 'Tai Nghe JBL Wave Beam - Hàng Chính Hãng', 1, 1, 1110000, 'No', NULL, NULL, NULL, 'Thời lượng pin tối đa lên đến 32 giờ để chơi nhạc nhạc trọn cả ngày dài kèm công nghệ sạc nhanh\r\nChất âm JBL Deep Bass với driver 8mm cho chất âm mạnh mẽ đầy sống động\r\nPhiên bản Bluetooth 5.2\r\nCông nghệ Smart Ambient thông minh.', 1, '1x Tai Nghe JBL Wave Beam\r\n\r\n1x Hộp sạc\r\n\r\n1x Cáp Sạc USB - C\r\n\r\n3x Kích cỡ eartips khác nhau\r\n\r\n1x Hướng Dẫn Sử Dụng\r\n\r\n1x Thẻ bảo hành/ Cảnh báo'),
(14, 4, 'Tai Nghe JBL Wave Beam 2 - TẶNG SỔ TAY - Hàng Chính Hãng', 1, 1, 1390000, 'No', NULL, NULL, NULL, 'Trang bị chống ồn chủ động ANC\r\nThời lượng pin tối đa lên đến 40 giờ + công nghệ sạc nhanh\r\nChất âm JBL Pure Bass với driver 8mm cho chất âm mạnh mẽ đầy sống động\r\nPhiên bản Bluetooth 5.3\r\nCông nghệ Smart Ambient thông minh.', 1, '1x Tai Nghe JBL Wave Beam 2\r\n\r\n1x Hộp sạc\r\n\r\n1x Cáp Sạc USB - C\r\n\r\n3x Kích cỡ eartips khác nhau\r\n\r\n1x Hướng Dẫn Sử Dụng\r\n\r\n1x Thẻ bảo hành/ Cảnh báo'),
(15, 4, 'Tai Nghe JBL Tune 520BT - Hàng Chính Hãng', 1, 1, 1090000, 'Yes', NULL, NULL, NULL, 'Thời lượng pin lên đến 57 giờ để phát nhạc trọn cả ngày dài kèm công nghệ sạc nhanh\r\nChất âm JBL Pure Bass trứ danh kèm driver 33mm cho chất âm mạnh mẽ đày sống động\r\nPhiên bản Bluetooth 5.3 mới nhất\r\nKết nối đa điểm thồng minh tiện lợi.', 1, '1x Tai Nghe JBL Tune 520BT\r\n\r\n1x Cáp Sạc USB - C\r\n\r\n1x Hướng Dẫn Sử Dụng\r\n\r\n1x Thẻ bảo hành/ Cảnh báo'),
(16, 6, 'Tai Nghe Tune Beam 2 - TẶNG TÚI JBL X SGS - Hàng Chính Hãng', 1, 1, 2490000, 'No', NULL, NULL, NULL, 'Thời lượng pin tối đa lên đến 48 giờ + sạc nhanh\r\nCông nghệ Personi-Fi 3.0\r\nChất âm JBL Pure Bass trứ danh + âm thanh không gian JBL Spatial Sound\r\nPhiên bản Bluetooth 5.3 mới nhất\r\nKết nối đa điểm thông minh tiện lợi', 1, '1x Tai Nghe JBL Tune Beam 2\r\n\r\n1x Hộp sạc\r\n\r\n1x Cáp Sạc USB - C\r\n\r\n3x Kích cỡ eartips khác nhau\r\n\r\n1x Hướng Dẫn Sử Dụng\r\n\r\n1x Thẻ bảo hành/ Cảnh báo\r\n\r\n'),
(17, 4, '[NHẬP JAN7 GIẢM 7%]Tai Nghe Tune 770NC - Hàng Chính Hãng', 1, 1, 3190000, 'No', NULL, NULL, NULL, 'None', 1, 'None'),
(18, 4, '[NHẬP JAN7 GIẢM 7%]Tai Nghe JBL Live 770NC - Hàng Chính Hãng', 2, 1, 3990000, 'Yes', NULL, NULL, NULL, 'None', 1, 'None'),
(19, 5, 'Tai Nghe JBL C200SIU - Hàng Chính Hãng', 1, 1, 290, 'Yes', NULL, NULL, NULL, 'Điều khiển dễ dàng tích hợp thêm Micro tiện dụng\r\nJack cắm 3.5mm\r\nDây bện chống rối lên đến 1.2m', 1, '1x Tai nghe C200SI\r\n\r\n3x Bộ típ nhét tai các cỡ ( size S, M, L)\r\n\r\n1x Sách hướng dẫn nhanh'),
(20, 8, 'Tai nghe có dây nhét tai JBL QUANTUM 50C - Hàng Chính hãng', 1, 1, 890000, 'No', NULL, NULL, NULL, 'Đang cập nhật', 1, 'Đang cập nhật'),
(21, 9, 'Tai Nghe Gaming JBL Quantum 400 - Hàng Chính Hãng', 1, 1, 2490000, 'No', NULL, NULL, NULL, 'Tai nghe giúp cô lập tiếng ồn và tái hiện âm thanh chất lượng, ôm sát toàn bộ tai của bạn\r\nTai nghe được thiết kế đặc biệt cho game thủ\r\nSử dụng công nghệ âm thanh độc quyền JBL Pure Bass Sound và driver 50mm để tạo ra âm thanh sống động', 1, '1 JBL Quantum 400\r\n\r\n1 Sách hướng dẫn\r\n\r\n1 Cáp kết nối USB Type-C sang Type-A\r\n\r\n1 Cáp kết nối cổng 3.5mm\r\n\r\n1 Màng lọc gió cho micro'),
(22, 9, 'Tai Nghe Gaming JBL QUANTUM 910 WIRELESS - BẢO HÀNH 6 THÁNG - Hàng Chính Hãng', 1, 92, 6190000, 'No', NULL, NULL, NULL, 'Công nghệ âm thanh tối thượng JBL QuantumSOUND Signature\r\nThời lượng pin lên đến: 45 giờ\r\nCông nghệ theo dõi chuyển động đầu JBL QuantumSPHERE 360™\r\nKết nối không dây kép: 2.4GHz và Bluetooth 5.2\r\nTương thích mọi nền tảng, tối ưu cho PC', 1, '1 x Tai nghe JBL Quantum 910 Wireless\r\n\r\n1x Bộ cân bằng micro 1x Cáp sạc USB\r\n\r\n1x Cáp kết nối cổng 3.5mm\r\n\r\n1x Dongle không dây USB\r\n\r\n1x Đầu chuyển USB Type-C sang Type-A\r\n\r\n1x Màng lọc gió cho micro\r\n\r\n1x Hướng dẫn | Thẻ bảo hành | Bảng an toàn'),
(23, 8, 'Loa Gaming JBL Quantum Duo - Hàng Chính Hãng', 1, 212, 3990000, 'No', NULL, NULL, NULL, 'Sử dụng công nghệ âm thanh JBL QuantumSOUND Signature\r\nCó thể tùy chỉnh ánh sáng\r\nMang đến trải nghiệm với từng chi tiết âm thanh\r\nĐược thiết kế chuyên dụng cho Gaming', 1, 'Phụ kiện bao gồm\r\n\r\n1x JBL Quantum Duo\r\n\r\n1x dây cáp âm thanh 1.5m\r\n\r\n1x dây cáp nguồn 1.5m\r\n\r\n1x Thẻ bảo hành\r\n\r\n1x Hướng dẫn nhanh'),
(24, 9, 'Tai Nghe Gaming JBL Quantum 50 - Hàng Chính Hãng', 1, 1, 890000, 'No', NULL, NULL, NULL, 'Thiết kế trẻ trung đơn giản\r\nKín tiếng và cho âm thanh chuẩn\r\nDriver dynamic 8.6mm cho chất âm True Bass\r\nTai nghe jack cắm 3.5mm\r\nTương thích đa thiết bị', 1, '1x JBL Quantum 50  \r\n\r\n1x Sách hướng dẫn\r\n\r\n3x Bộ nhét tai các cỡ'),
(25, 9, 'Tai Nghe Gaming JBL QUANTUM TWS - Hàng Chính Hãng', 1, 1, 4390000, 'No', NULL, NULL, NULL, 'Là tai nghe không dây nhỏ gọn với nhiều tính năng tối ưu cho game thủ\r\nSử dụng công nghệ âm thanh độc quyền - JBL QuantumSURROUND\r\nTrang bị micro với khả năng khử ồn, hỗ trợ các cuộc đàm thoại chất lượng\r\nTổng thời lượng pin lên đến 24 giờ, bao gồm 8 giờ phát nhạc và 16 giờ từ hộp sạc\r\nCó thể tùy chỉnh tối ưu với JBL QuantumENGINE™ PC và app JBL Headphones\r\nKết nối không dây Bluetooth 5.2 và có thể kết nối đồng thời 2 thiết bị qua USB-C dongle', 1, '1 Dây nguồn.\r\n\r\n1 Sách hướng dẫn\r\n\r\n1 Bộ sạc'),
(26, 9, 'Tai Nghe Gaming JBL Quantum 800 - Hàng Chính Hãng', 1, 982, 4790000, 'No', NULL, NULL, NULL, 'Tai nghe kín tai và mang đến âm thanh chất lượng, ôm sát toàn bộ tai của bạn\r\nĐược thiết kế đặc biệt cho game thủ\r\nSử dụng công nghệ âm thanh độc quyền JBL Pure Bass Sound và driver 50mm để tạo ra âm thanh sống động\r\nSử dụng công nghệ wireless 2.4GHz lossless', 1, 'Phụ kiện bao gồm\r\n\r\n1 x JBL Quantum 800\r\n\r\n1 x Sách hướng dẫn\r\n\r\n1 x Cáp kết nối USB Type-C sang Type-A\r\n\r\n1 x Cáp kết nối cổng 3.5mm\r\n\r\n1 x Bộ tín hiệu không dây USB\r\n\r\n1 x Màng lọc gió cho micro'),
(27, 8, 'Tai Nghe Gaming JBL Quantum One - Hàng Chính Hãng', 1, 1, 5490000, 'No', NULL, NULL, NULL, 'Tai nghe kín tai và mang đến âm thanh chất lượng, ôm sát toàn bộ tai của bạn\r\nĐược thiết kế đặc biệt cho game thủ\r\nSử dụng công nghệ âm thanh độc quyền JBL Pure Bass Sound và driver 50mm để tạo ra âm thanh sống động\r\nSử dụng công nghệ wireless 2.4GHz lossless', 1, '1 Tai Nghe JBL Quantum ONE\r\n\r\n1 Sách hướng dẫn\r\n\r\n1 Cáp kết nối USB Type-C sang Type-A\r\n\r\n1 Cáp kết nối cổng 3.5mm\r\n\r\n1 Micro gắn rời\r\n\r\n1 Bộ cân bằng micro\r\n\r\n1 Vòng xoay cân bằng giao tiếp Game / Chat kết nối USB Type-C sang Type-A\r\n\r\n1 Màng lọc gió cho micro'),
(37, 11, 'Loa Soundbar JBL Bar 2.0 All-In-One - BẢO HÀNH 6 THÁNG - Hàng Chính Hãng', 1, 1, 4500000, 'No', NULL, NULL, NULL, 'Thiết kế tinh tế, sang trọng, đầy tính thẩm mỹ, tạo ra không gian giải trí đẳng cấp và đầy phong cách\r\nTổng công suất lên tới 80W, cho phép bạn thưởng thức âm thanh sống động và chất lượng, giống như xem phim ở rạp chiếu phim\r\nKhả năng kết nối đơn giản, chỉ cần cáp HDMI ARC hoặc cáp quang là có thể thiết lập và sử dụng. Kết nối Bluetooth để phát nhạc không dây từ điện thoại thông minh hoặc máy tính bảng, giúp tiện lợi và dễ dàng sử dụng\r\nTích hợp nhiều tính năng thông minh, tạo ra trải nghiệm âm thanh đa dạng và thú vị cho người sử dụng', 1, '1x Loa thanh soundbar\r\n\r\n1x Điều khiển từ xa\r\n\r\n1x Cáp AUX\r\n\r\n1x Bộ chuyển đổi điện áp\r\n\r\n1x Bộ giá đỡ loa treo tường\r\n\r\n1x Hướng dẫn sử dụng\r\n\r\n1x Phiếu bảo hành\r\n\r\n1x Hướng dẫn sử dụng'),
(38, 7, 'Loa Soundbar JBL Bar 300 - Hàng Chính Hãng', 1, 1, 4990000, 'No', NULL, NULL, NULL, 'Hệ thống 5.0 kênh tất cả trong 1 loa thanh duy nhất.\r\n Công suất 260W.\r\nTích hợp âm thanh vòm Dolby Atmos với công nghệ MultiBeam.\r\nCông nghệ tăng cường đối thoại PureVoice.\r\nKhả năng phát nhạc trực tuyến bằng WiFi.\r\nDễ dàng điều khiển bằng giọng nói, tương thích ứng dụng JBL One.\r\nĐi kèm Điều khiển từ xa tiện lợi.\r\nTích hợp Bluetooth 5.0, kết nối trực tiếp hỗ trợ HDMI và OPTICAL.', 1, '1 x Loa thanh soundbar\r\n\r\n1 x Điều khiển từ xa \r\n\r\n2 x Pin\r\n\r\n1 x Dây HDMI\r\n\r\n1 x Bộ wall mount\r\n\r\n1 x Hướng dẫn nhanh'),
(39, 7, 'Loa Soundbar JBL Bar 500 - Hàng Chính Hãng', 1, 1, 14900000, 'No', NULL, NULL, NULL, 'Soundbar hỗ trợ 4K Ultra HD mang đến chất lượng âm thanh tuyệt vời từ các rạp chiếu phim đến không gian nhỏ của bạn\r\nTăng cường loa Sub với âm bass mạnh cùng công suất 550-watt, cho âm thanh mạnh mẽ và chất lượng\r\nCó khả năng kết nối không dây, tiện lợi và dễ dàng sử dụng', 1, 'Phụ kiện bao gồm\r\n\r\n1x Soundbar\r\n\r\n1x Loa siêu trầm không dây\r\n\r\n1x Điều khiển từ xa với 2 pin\r\n\r\n1x Dây nguồn (lên đến 8 chiếc tùy thuộc vào SKU khu vực)\r\n\r\n1x Cáp HDMI\r\n\r\n1x Bộ giá đỡ treo tường có vít\r\n\r\n1x Hướng dẫn nhanh\r\n\r\n1x Thẻ bảo hành\r\n\r\n1x Tấm an toàn'),
(40, 7, '[NHẬP JAN7 GIẢM 7%]Loa Soundbar JBL Bar 1000 - Hàng Chính Hãng', 1, 1, 24900000, 'No', NULL, NULL, NULL, 'Thiết kế hiện đại bao gồm 1 loa Soundbar, 1 loa sub không dây và một điều khiển từ xa đi kèm\r\nCấu hình 7.1.4 và có tổng công suất lên tới 880W cho âm thanh bùng nổ\r\nLoa siêu trầm 10inch cho chất lượng âm trầm sâu lắng, mạnh mẽ\r\nTrang bị loa vòm không dây có thể tháo rời, sử dụng 4 driver hướng up-firing hướng lên trần\r\nÂm thanh vòm 3D Dolby Atmos và DTS\r\nTích hợp công nghệ MultiBeam hiện đại', 1, '1 x Loa thanh soundbar\r\n\r\n2 x Loa vòm không dây có thể tháo rời\r\n\r\n1 x Loa Sub\r\n\r\n1 x Điều khiển từ xa \r\n\r\n2 x Pin\r\n\r\n1 x Dây HDMI\r\n\r\n1 x Bộ wall mount\r\n\r\n1 x Hướng dẫn nhanh'),
(41, 7, '[NHẬP JAN7 GIẢM 7%]Loa Soundbar JBL Bar 1000 - Hàng Chính Hãng', 1, 1, 24900000, 'No', NULL, NULL, NULL, 'Thiết kế hiện đại bao gồm 1 loa Soundbar, 1 loa sub không dây và một điều khiển từ xa đi kèm\r\nCấu hình 7.1.4 và có tổng công suất lên tới 880W cho âm thanh bùng nổ\r\nLoa siêu trầm 10inch cho chất lượng âm trầm sâu lắng, mạnh mẽ\r\nTrang bị loa vòm không dây có thể tháo rời, sử dụng 4 driver hướng up-firing hướng lên trần\r\nÂm thanh vòm 3D Dolby Atmos và DTS\r\nTích hợp công nghệ MultiBeam hiện đại', 1, '1 x Loa thanh soundbar\r\n\r\n2 x Loa vòm không dây có thể tháo rời\r\n\r\n1 x Loa Sub\r\n\r\n1 x Điều khiển từ xa \r\n\r\n2 x Pin\r\n\r\n1 x Dây HDMI\r\n\r\n1 x Bộ wall mount\r\n\r\n1 x Hướng dẫn nhanh'),
(42, 11, 'Loa Soundbar JBL Bar 9.1 TWS Atmos - Hàng Chính Hãng', 1, 1, 24900000, 'No', NULL, NULL, NULL, 'Soundbar hỗ trợ 4K Ultra HD mang đến chất lượng âm thanh tuyệt vời từ các rạp chiếu phim đến không gian nhỏ của bạn\r\nThiết kế độc đáo với phần Speaker có thể tháo rời giúp dễ dàng tùy chỉnh và tạo ra âm thanh vòm\r\nTăng cường loa Sub với âm bass mạnh cùng công suất 820-watt, cho âm thanh chất lượng và mạnh mẽ\r\nCó khả năng kết nối không dây, tiện lợi và dễ dàng sử dụng', 1, 'Phụ kiện bao gồm\r\n\r\n1x Soundbar chính\r\n\r\n2x loa vòm không dây có thể tháo rời\r\n\r\n1x loa siêu trầm không dây\r\n\r\n1x Điều khiển từ xa với 2 x pin\r\n\r\n1x Dây nguồn (lên đến 8 chiếc tùy thuộc vào SKU khu vực)\r\n\r\n1x Cáp HDMI x1\r\n\r\n2 x Giá treo tường hình chữ L (Thanh chính) + 2 x Giá đỡ treo tường hình chữ U (dành cho Loa vòm) có vít\r\n\r\n1x Hướng dẫn nhanh\r\n\r\n1x Thẻ bảo hành\r\n\r\n1x Tấm an toàn'),
(43, 7, 'Loa Soundbar JBL Bar 5.1 - Hàng Chính Hãng', 1, 1, 21900000, 'No', NULL, NULL, NULL, 'Soundbar hỗ trợ 4K Ultra HD mang đến chất lượng âm thanh tuyệt vời từ các rạp chiếu phim đến không gian nhỏ của bạn\r\nTăng cường loa Sub với âm bass mạnh cùng công suất 550-watt, cho âm thanh mạnh mẽ và chất lượng\r\nSở hữu loa siêu trầm không dây 250mm, tạo ra âm thanh mạnh mẽ và đầy sự trải nghiệm\r\nCó khả năng kết nối không dây, tiện lợi và dễ dàng sử dụng', 1, 'Phụ kiện bao gồm\r\n\r\n1x Loa thanh soundbar\r\n\r\n1x Loa siêu trầm hỗ trợ kết nối không dây\r\n\r\n2x Loa âm thanh vòm hỗ trợ kết nối không dây\r\n\r\n1x Điều khiển từ xa kèm pin\r\n\r\n1x Dây nguồn (Lên tới 5 dây phụ thuộc vào SKU của quốc gia)\r\n\r\n1x Cổng HDMI\r\n\r\n1x Cáp AUX\r\n\r\n1x Cổng Optical\r\n\r\n1x Micro hiệu chuẩn\r\n\r\n1x Bộ giá đỡ loa treo tường\r\n\r\n1x Hướng dẫn sử dụng\r\n\r\n1x Phiếu bảo hành\r\n\r\n1x Hướng dẫn an toàn'),
(47, 2, 'Cập Nhật Mới Nhất g', 1, 1, 98712323, 'No', NULL, NULL, NULL, NULL, 1, NULL),
(49, 2, 'Lập Trình Không Khó', 1, 1, 971212, 'No', NULL, NULL, NULL, NULL, 1, NULL),
(52, 2, 'Thêm mới', 2, 1, 45323, 'No', NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thanhpho`
--

CREATE TABLE `thanhpho` (
  `id` int NOT NULL,
  `Tenthanhpho` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thongsosanpham`
--

CREATE TABLE `thongsosanpham` (
  `id` int NOT NULL,
  `idsp` int NOT NULL,
  `Mota` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `thongsosanpham`
--

INSERT INTO `thongsosanpham` (`id`, `idsp`, `Mota`) VALUES
(2, 2, 'Thông số sản phẩm 1'),
(3, 3, 'Thông số sản phẩm 2'),
(4, 4, 'Thông số sản phẩm 3'),
(5, 5, 'Thông số sản phẩm 4'),
(6, 6, 'Thông số sản phẩm 5'),
(7, 7, 'Thông số sản phẩm 6'),
(8, 8, 'Thông số sản phẩm 7'),
(9, 9, 'Thông số sản phẩm 8'),
(10, 10, 'Thông số sản phẩm 9'),
(11, 11, 'Thông số sản phẩm 10'),
(12, 12, 'Thông số sản phẩm 11'),
(13, 13, 'Thông số sản phẩm 12'),
(14, 14, 'Thông số sản phẩm 13'),
(15, 15, 'Thông số sản phẩm 14'),
(16, 16, 'Thông số sản phẩm 15'),
(17, 17, 'Thông số sản phẩm 16'),
(18, 18, 'Thông số sản phẩm 17'),
(19, 19, 'Thông số sản phẩm 18');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tintuc`
--

CREATE TABLE `tintuc` (
  `id` int NOT NULL,
  `iddm` int NOT NULL,
  `Tieude` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Ngaydang` date NOT NULL,
  `Noidung` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `youtube`
--

CREATE TABLE `youtube` (
  `id` int NOT NULL,
  `Tieude` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Image` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Url` varchar(70) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Trangthai` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `youtube`
--

INSERT INTO `youtube` (`id`, `Tieude`, `Image`, `Url`, `Trangthai`) VALUES
(1, 'Video 1', '../Upload/Youtobe/quang cao 1.webp', 'https://www.youtube.com/embed/sJTZJPcOI8A?si=RrFdzkBThZth8SNg', 2),
(2, 'Video 2', '../Upload/Youtobe/quang cao 2.webp', 'https://www.youtube.com/embed/xfAxav_ofjg?si=cTLxYE9oX7T190Za', 2),
(3, 'Video 3', '../Upload/Youtobe/quang cao 3.webp', 'https://www.youtube.com/embed/xfAxav_ofjg?si=cTLxYE9oX7T190Za', 2),
(4, 'Video 4', '../Upload/Youtobe/quang cao 4.webp', 'https://www.youtube.com/embed/xfAxav_ofjg?si=cTLxYE9oX7T190Za', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `anhsp`
--
ALTER TABLE `anhsp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idsp` (`idsp`);

--
-- Chỉ mục cho bảng `anhtintuc`
--
ALTER TABLE `anhtintuc`
  ADD KEY `idtintucs` (`idtintucs`);

--
-- Chỉ mục cho bảng `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `binhluansanpham`
--
ALTER TABLE `binhluansanpham`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idsanpham` (`idsanpham`),
  ADD KEY `idnguoidung` (`idnguoidung`);

--
-- Chỉ mục cho bảng `binhluantintuc`
--
ALTER TABLE `binhluantintuc`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idnguoidung` (`idnguoidung`),
  ADD KEY `idtintuc` (`idtintuc`);

--
-- Chỉ mục cho bảng `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idchitietdonhang` (`idchitietdonhang`);

--
-- Chỉ mục cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Sanpham` (`Sanpham`),
  ADD KEY `nguoidung` (`nguoidung`);

--
-- Chỉ mục cho bảng `hoadon_c`
--
ALTER TABLE `hoadon_c`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ID_Khachhang` (`ID_Khachhang`),
  ADD KEY `id_donhang` (`id_donhang`);

--
-- Chỉ mục cho bảng `imgmotasanpham`
--
ALTER TABLE `imgmotasanpham`
  ADD KEY `idmotasanpham` (`idmotasanpham`);

--
-- Chỉ mục cho bảng `loaidanhmuc`
--
ALTER TABLE `loaidanhmuc`
  ADD PRIMARY KEY (`id`),
  ADD KEY `iddm` (`iddm`);

--
-- Chỉ mục cho bảng `mausac`
--
ALTER TABLE `mausac`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idsp` (`idsp`);

--
-- Chỉ mục cho bảng `motasanpham`
--
ALTER TABLE `motasanpham`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idsp` (`idsp`);

--
-- Chỉ mục cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `phanhoibinhluansanpham`
--
ALTER TABLE `phanhoibinhluansanpham`
  ADD KEY `idbinhluansp` (`idbinhluansp`),
  ADD KEY `idnguoidung` (`idnguoidung`);

--
-- Chỉ mục cho bảng `phanhoibinhluantintuc`
--
ALTER TABLE `phanhoibinhluantintuc`
  ADD KEY `idnguoidung` (`idnguoidung`),
  ADD KEY `idbinhluantintuc` (`idbinhluantintuc`);

--
-- Chỉ mục cho bảng `phivanchuyen`
--
ALTER TABLE `phivanchuyen`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `phuongthitran`
--
ALTER TABLE `phuongthitran`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idquanhuyen` (`idquanhuyen`);

--
-- Chỉ mục cho bảng `quanhuyen`
--
ALTER TABLE `quanhuyen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idthanhpho` (`idthanhpho`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_loaidm` (`id_loaidm`);

--
-- Chỉ mục cho bảng `thanhpho`
--
ALTER TABLE `thanhpho`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `thongsosanpham`
--
ALTER TABLE `thongsosanpham`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idsp` (`idsp`);

--
-- Chỉ mục cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`id`),
  ADD KEY `iddm` (`iddm`);

--
-- Chỉ mục cho bảng `youtube`
--
ALTER TABLE `youtube`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `anhsp`
--
ALTER TABLE `anhsp`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT cho bảng `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `binhluansanpham`
--
ALTER TABLE `binhluansanpham`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `binhluantintuc`
--
ALTER TABLE `binhluantintuc`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `donhang`
--
ALTER TABLE `donhang`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `hoadon_c`
--
ALTER TABLE `hoadon_c`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT cho bảng `loaidanhmuc`
--
ALTER TABLE `loaidanhmuc`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `mausac`
--
ALTER TABLE `mausac`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `motasanpham`
--
ALTER TABLE `motasanpham`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44981013;

--
-- AUTO_INCREMENT cho bảng `phivanchuyen`
--
ALTER TABLE `phivanchuyen`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `phuongthitran`
--
ALTER TABLE `phuongthitran`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `quanhuyen`
--
ALTER TABLE `quanhuyen`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT cho bảng `thanhpho`
--
ALTER TABLE `thanhpho`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `thongsosanpham`
--
ALTER TABLE `thongsosanpham`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `youtube`
--
ALTER TABLE `youtube`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `anhsp`
--
ALTER TABLE `anhsp`
  ADD CONSTRAINT `anhsp_ibfk_1` FOREIGN KEY (`idsp`) REFERENCES `sanpham` (`id`);

--
-- Các ràng buộc cho bảng `anhtintuc`
--
ALTER TABLE `anhtintuc`
  ADD CONSTRAINT `anhtintuc_ibfk_1` FOREIGN KEY (`idtintucs`) REFERENCES `tintuc` (`id`);

--
-- Các ràng buộc cho bảng `binhluansanpham`
--
ALTER TABLE `binhluansanpham`
  ADD CONSTRAINT `binhluansanpham_ibfk_1` FOREIGN KEY (`idsanpham`) REFERENCES `sanpham` (`id`),
  ADD CONSTRAINT `binhluansanpham_ibfk_2` FOREIGN KEY (`idnguoidung`) REFERENCES `nguoidung` (`id`);

--
-- Các ràng buộc cho bảng `binhluantintuc`
--
ALTER TABLE `binhluantintuc`
  ADD CONSTRAINT `binhluantintuc_ibfk_1` FOREIGN KEY (`idnguoidung`) REFERENCES `nguoidung` (`id`),
  ADD CONSTRAINT `binhluantintuc_ibfk_2` FOREIGN KEY (`idtintuc`) REFERENCES `tintuc` (`id`);

--
-- Các ràng buộc cho bảng `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD CONSTRAINT `chitietdonhang_ibfk_1` FOREIGN KEY (`idchitietdonhang`) REFERENCES `chitietdonhang` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`Sanpham`) REFERENCES `sanpham` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `donhang_ibfk_2` FOREIGN KEY (`nguoidung`) REFERENCES `nguoidung` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `hoadon_c`
--
ALTER TABLE `hoadon_c`
  ADD CONSTRAINT `hoadon_c_ibfk_1` FOREIGN KEY (`id_donhang`) REFERENCES `sanpham` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `imgmotasanpham`
--
ALTER TABLE `imgmotasanpham`
  ADD CONSTRAINT `imgmotasanpham_ibfk_1` FOREIGN KEY (`idmotasanpham`) REFERENCES `motasanpham` (`id`);

--
-- Các ràng buộc cho bảng `loaidanhmuc`
--
ALTER TABLE `loaidanhmuc`
  ADD CONSTRAINT `loaidanhmuc_ibfk_1` FOREIGN KEY (`iddm`) REFERENCES `danhmuc` (`id`);

--
-- Các ràng buộc cho bảng `mausac`
--
ALTER TABLE `mausac`
  ADD CONSTRAINT `mausac_ibfk_1` FOREIGN KEY (`idsp`) REFERENCES `sanpham` (`id`);

--
-- Các ràng buộc cho bảng `motasanpham`
--
ALTER TABLE `motasanpham`
  ADD CONSTRAINT `motasanpham_ibfk_1` FOREIGN KEY (`id`) REFERENCES `sanpham` (`id`);

--
-- Các ràng buộc cho bảng `phanhoibinhluansanpham`
--
ALTER TABLE `phanhoibinhluansanpham`
  ADD CONSTRAINT `phanhoibinhluansanpham_ibfk_1` FOREIGN KEY (`idbinhluansp`) REFERENCES `binhluansanpham` (`id`),
  ADD CONSTRAINT `phanhoibinhluansanpham_ibfk_2` FOREIGN KEY (`idnguoidung`) REFERENCES `nguoidung` (`id`);

--
-- Các ràng buộc cho bảng `phanhoibinhluantintuc`
--
ALTER TABLE `phanhoibinhluantintuc`
  ADD CONSTRAINT `phanhoibinhluantintuc_ibfk_1` FOREIGN KEY (`idnguoidung`) REFERENCES `nguoidung` (`id`),
  ADD CONSTRAINT `phanhoibinhluantintuc_ibfk_2` FOREIGN KEY (`idbinhluantintuc`) REFERENCES `binhluantintuc` (`id`);

--
-- Các ràng buộc cho bảng `phivanchuyen`
--
ALTER TABLE `phivanchuyen`
  ADD CONSTRAINT `phivanchuyen_ibfk_1` FOREIGN KEY (`id`) REFERENCES `thanhpho` (`id`);

--
-- Các ràng buộc cho bảng `phuongthitran`
--
ALTER TABLE `phuongthitran`
  ADD CONSTRAINT `phuongthitran_ibfk_1` FOREIGN KEY (`idquanhuyen`) REFERENCES `quanhuyen` (`id`);

--
-- Các ràng buộc cho bảng `quanhuyen`
--
ALTER TABLE `quanhuyen`
  ADD CONSTRAINT `quanhuyen_ibfk_1` FOREIGN KEY (`idthanhpho`) REFERENCES `thanhpho` (`id`);

--
-- Các ràng buộc cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`id_loaidm`) REFERENCES `loaidanhmuc` (`id`);

--
-- Các ràng buộc cho bảng `thongsosanpham`
--
ALTER TABLE `thongsosanpham`
  ADD CONSTRAINT `thongsosanpham_ibfk_1` FOREIGN KEY (`idsp`) REFERENCES `sanpham` (`id`);

--
-- Các ràng buộc cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  ADD CONSTRAINT `tintuc_ibfk_1` FOREIGN KEY (`iddm`) REFERENCES `loaidanhmuc` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
