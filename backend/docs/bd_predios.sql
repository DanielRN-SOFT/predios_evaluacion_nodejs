-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-03-2026 a las 14:03:39
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_predios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `predio`
--

CREATE TABLE `predio` (
  `identificacion` int(11) NOT NULL,
  `descripcion` text NOT NULL,
  `area` decimal(10,2) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `fotografia` varchar(100) NOT NULL,
  `observaciones` text NOT NULL,
  `avaluo` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `predio`
--

INSERT INTO `predio` (`identificacion`, `descripcion`, `area`, `direccion`, `status`, `fotografia`, `observaciones`, `avaluo`) VALUES
(456, 'Apartamento actualizado', 11.00, 'Carrera 7', 'Activo', 'apartamento_actualiado.jpg', 'Observaciones actualizadas', 100000.00),
(789, 'Consultorio en buen estado y amueblado', 10.00, 'Carrera 6', 'Activo', 'consultoro.jpg', 'Ubicacion bodega 20', 2000000.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `predio`
--
ALTER TABLE `predio`
  ADD PRIMARY KEY (`identificacion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
