USE `es_extended`;

INSERT INTO `addon_account` (name, label, shared) VALUES
	('society_ambulance', 'Ambulance', 1)
;

INSERT INTO `datastore` (name, label, shared) VALUES
	('society_ambulance', 'Pogotowie ratunkowe', 1)
;


INSERT INTO `items` (name, label, weight) VALUES
	('bandage','Bandaż', 2),
	('medikit','Defibrylator', 2)
;

