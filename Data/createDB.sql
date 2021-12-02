/*Must create schema named 'aqms'*/
DROP TABLE IF EXISTS aqms.sensorData;
DROP TABLE IF EXISTS aqms.sensors;
DROP TABLE IF EXISTS aqms.attributes;

CREATE TABLE aqms.sensorData (
    timeMark TIMESTAMP,
    sensorID varchar(10),
    attributeID varchar(10),
    sensorValue DECIMAL
);

CREATE TABLE aqms.sensors (
    sensorID varchar(10),
    latitude DECIMAL,
    longitude DECIMAL
);

CREATE TABLE aqms.attributes (
    attributeID varchar(10),
    unit varchar(5),
    description varchar(100)
);
