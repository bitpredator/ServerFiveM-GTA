USE `es_extended`;

INSERT INTO `addon_account` (name, label, shared) VALUES
	('society_ambulance', 'EMS', 1)
;

INSERT INTO `datastore` (name, label, shared) VALUES
	('society_ambulance', 'EMS', 1)
;

INSERT INTO `items` (name, label, weight) VALUES
	('bandage','curativo', 2),
	('medikit','kit medico', 2)
;
