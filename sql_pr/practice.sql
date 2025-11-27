-- 1번 연습
CREATE TABLE recruit (
    id INT,             -- 정수형
    name VARCHAR(20),   -- 문자열(최대 20자)
    age INT             -- 정수형 
);

-- 2번 연습
CREATE TABLE weapon (
    weapon_id INT PRIMARY KEY,          -- 정수형, 기본 키
    model_name VARCHAR(50) NOT NULL,    -- 문자열(최대 50자), 비어있으면 안 됨
    ammo_count INT                      -- 정수형
);

-- 3번 연습
CREATE TABLE mess_hall (
    menu_id INT PRIMARY KEY,            -- 정수형, 기본 키
    menu_name VARCHAR(30) NOT NULL,     -- 문자열(최대 30자), 비어있으면 안 됨
    is_sold_out VARCHAR(1) DEFAULT('N') -- 문자열(최대 1자), 기본값은 'N'
);

-- 4번 연습
CREATE TABLE vehicle (
    vehicle_id INTEGER PRIMARY KEY AUTOINCREMENT,
    plate_number TEXT UNIQUE,
    driver_name TEXT
);