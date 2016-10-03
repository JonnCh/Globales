CREATE DATABASE `globales` /*!40100 DEFAULT CHARACTER SET utf8 */;
CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `UserName` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `MathQuestionIndex` int(11) DEFAULT NULL,
  `GrammarQuestionIndex` int(11) DEFAULT NULL,
  `MathTotal` int(11) DEFAULT NULL,
  `GrammarTotal` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `themes` (
  `Id` int(11) NOT NULL,
  `Name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `questions` (
  `Id` int(11) NOT NULL,
  `Question` varchar(45) DEFAULT NULL,
  `ThemeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Theme_idx` (`ThemeId`),
  CONSTRAINT `Theme` FOREIGN KEY (`ThemeId`) REFERENCES `themes` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `answers` (
  `Id` int(11) NOT NULL,
  `Answer` varchar(45) DEFAULT NULL,
  `QuestionId` int(11) DEFAULT NULL,
  `Correct` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Question_idx` (`QuestionId`),
  CONSTRAINT `Question` FOREIGN KEY (`QuestionId`) REFERENCES `questions` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


