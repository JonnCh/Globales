CREATE DATABASE `globales` /*!40100 DEFAULT CHARACTER SET utf8 */;

CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `UserName` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `MathQuestionIndex` int(11) DEFAULT NULL,
  `GrammarQuestionIndex` int(11) DEFAULT NULL,
  `MathTotal` int(11) DEFAULT NULL,
  `GrammarTotal` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

CREATE TABLE `questions` (
  `Id` int(255) NOT NULL AUTO_INCREMENT,
  `Question` text,
  `Option1` varchar(100) DEFAULT NULL,
  `Option2` varchar(100) DEFAULT NULL,
  `Option3` varchar(100) DEFAULT NULL,
  `Option4` varchar(100) DEFAULT NULL,
  `Answer` int(5) DEFAULT NULL,
  `Theme` varchar(50) DEFAULT NULL,
  `Option5` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;


INSERT INTO `globales`.`questions`
(
`Question`,
`Option1`,
`Option2`,
`Option3`,
`Option4`,
`Option5`,
`Answer`,
`Theme`)
VALUES
(' 1 + 1 ?','1','2','3','4','5',2,'Math');


INSERT INTO `globales`.`questions`
(
`Question`,
`Option1`,
`Option2`,
`Option3`,
`Option4`,
`Option5`,
`Answer`,
`Theme`)
VALUES
(' 1 + 3 ?','1','2','3','4','23',4,'Math');


INSERT INTO `globales`.`questions`
(
`Question`,
`Option1`,
`Option2`,
`Option3`,
`Option4`,
`Option5`,
`Answer`,
`Theme`)
VALUES
(' 1 + 5 ?','1','2','6','4','8',3,'Math');