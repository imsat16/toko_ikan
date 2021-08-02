-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Agu 2021 pada 11.59
-- Versi server: 10.4.18-MariaDB
-- Versi PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_toko_ikan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_ikan`
--

CREATE TABLE `tb_ikan` (
  `id_ikan` int(11) NOT NULL,
  `nama_ikan` text NOT NULL,
  `deskripsi_ikan` text NOT NULL,
  `img_ikan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_ikan`
--

INSERT INTO `tb_ikan` (`id_ikan`, `nama_ikan`, `deskripsi_ikan`, `img_ikan`) VALUES
(6, 'okabe rintarou', 'asodiasjdoiasj adoisj asodij asdiasodi ', 'C:\\fakepath\\sqbook.jpg'),
(7, 'senku', 'e=mc2', 'C:\\fakepath\\dr_stone.jpg'),
(12, 'makise kurisu', 'slfk la skdj i ihad', 'slfk la skdj i ihad'),
(13, 'Shiina Mayuri', 'askfjd po i dpoeq ej m', 'askfjd po i dpoeq ej m'),
(14, 'aiueo', 'bcdfghjklmnpqrstvwxyz', 'bcdfghjklmnpqrstvwxyz'),
(15, 'nnnnnnnn', 'lkfdaslk', 'lkfdaslk'),
(16, 'abv', 'pwen askdm msd ', 'pwen askdm msd ');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_ikan`
--
ALTER TABLE `tb_ikan`
  ADD PRIMARY KEY (`id_ikan`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_ikan`
--
ALTER TABLE `tb_ikan`
  MODIFY `id_ikan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
