DROP TABLE IF EXISTS sensorData;
DROP TABLE IF EXISTS sensors;
DROP TABLE IF EXISTS attributes;

CREATE TABLE sensorData (
    timeMark TIMESTAMP,
    sensorID INT,
    attributeID varchar(10),
    sensorValue INT
);

CREATE TABLE sensors (
    sensorID INT,
    latitude FLOAT,
    longitude FLOAT,
    description varchar(100)
);

CREATE TABLE attributes (
    attributeID varchar(10),
    unit varchar(5),
    description varchar(100)
);