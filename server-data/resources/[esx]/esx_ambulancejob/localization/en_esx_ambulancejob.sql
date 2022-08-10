USE `es_extended`;

INSERT INTO `addon_account` (name, label, shared) VALUES
	('society_ambulance', 'EMS', 1)
;


INSERT INTO `datastore` (name, label, shared) VALUES
	('society_ambulance', 'EMS', 1)
;

INSERT INTO `items` (name, label, weight) VALUES
	('bandage','Bandage', 2),
	('medikit','Medikit', 2)
;
