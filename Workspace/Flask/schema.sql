STUDENT TABLE

CREATE TABLE lecturer(
Lecturer_ID integer PRIMARY KEY,
Lecturer_Name text NOT NULL
);

        INSERT INTO lecturer
        VALUES (1,
        'Dai');
        
        INSERT INTO lecturer
        VALUES (2,
        'Sandra');
        
        INSERT INTO lecturer
        VALUES (3,
        'Martin');
        
        INSERT INTO lecturer
        VALUES (4,
        'Chris');
        
        INSERT INTO lecturer
        VALUES (5,
        'Joanne');
        
        INSERT INTO lecturer
        VALUES (6,
        'Nigel');

CREATE TABLE lessons(
Lessons_ID integer PRIMARY KEY,
Student_ID integer,
Lecturer_ID integer,
Day text NOT NUll,
StartHour int NOT NULL,
StartMinute int NOT NULL,
EndTime int NOT NULL,
EndMinute int NOT NULL,
FOREIGN KEY (Lecturer_ID) REFERENCES lecturer(Lecturer_ID),
FOREIGN KEY (Student_ID) REFERENCES student(Student_ID)
);

INSERT INTO lessons VALUES (1,
1,
1,
'Wednesday',
'13',
'15',
'14',
'15'
);

INSERT INTO lessons VALUES (2,
1,
1,
'Monday',
'12',
'15',
'13',
'45'
);

INSERT INTO lessons VALUES (3,
1,
1,
'Tuesday',
'15',
'15',
'17',
'15'
);

CREATE TABLE student(
Student_ID integer PRIMARY KEY,
Lecturer_ID integer,
Name text NOT NULL,
DOB text NOT NULL,
Phone integer NOT NULL,
Email text NOT NULL,
FOREIGN KEY (Lecturer_ID) REFERENCES lecturer(Lecturer_ID)
);

        INSERT INTO student
        VALUES (1,
        1,
        'Greg Thomas',
        '21/08/96',
        01792445566,
        'myemail@anEmail.co.uk');
    
CREATE TABLE street (
Address_ID integer PRIMARY KEY,
Student_ID integer,
Address text NOT NULL,
FOREIGN KEY (Student_ID) REFERENCES student(Student_ID)
);

        INSERT INTO street
        VALUES (1,
        1,
        '27 Clos-Alt-y-gog');

CREATE TABLE county(
County text PRIMARY KEY,
Address_ID integer,
FOREIGN KEY (Address_ID) REFERENCES street(Address_ID)
);
        
        INSERT INTO county
        VALUES ('Swansea',
        1);
        
        INSERT INTO county
        VALUES ('Ammanford',2);
        
        INSERT INTO county
        VALUES ('Carmarthen',3);
        
        INSERT INTO county
        VALUES ('Kidwelly',4);
        
        INSERT INTO county
        VALUES ('Llanelli',5);

CREATE TABLE postcode(
PostCode_ID text PRIMARY KEY,
Student_ID integer,
County text,
FOREIGN KEY (County) REFERENCES county(County)
FOREIGN KEY (Student_ID) REFERENCES student(Student_ID)
);

        INSERT INTO postcode
        VALUES ('SA48JH',
        'Swansea');

CREATE TABLE city(
City text PRIMARY KEY,
County text,
FOREIGN KEY (County) REFERENCES county(County)
);
        INSERT INTO city
        VALUES ('Pontarddulais',
        'Swansea');
    
CREATE TABLE login(
Student_ID integer,
Username text NOT NULL,
Password text NOT NULL,
FOREIGN KEY (Student_ID) REFERENCES student(Student_ID)
);

        INSERT INTO login
        VALUES (1,
        'student1',
        'password');
        
