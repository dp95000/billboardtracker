create database billboardDB;
use billboardDB;
CREATE TABLE billboards (
  id INT NOT NULL AUTO_INCREMENT,
  lat DECIMAL(10,4) NULL,
  lng DECIMAL(10,4) NULL,
  location VARCHAR(100) NULL,
  size VARCHAR(100) NULL,
  type VARCHAR(100) NULL,
  available VARCHAR(100) NULL,
  sides INT NULL,
  sign_no INT NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.947475, -75.117828, 'Admiral Wilson Blvd', '48ft x 14ft', "No", "Digital", 2, 000);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.948934, -75.119765, 'Admiral Wilson Blvd', '48ft x 14ft', "No", "Static", 2, 001);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.946107, -75.111171, 'Admiral Wilson Blvd', '48ft x 14ft', "Yes", "Static", 2, 002);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.948934, -75.119765, 'Admiral Wilson Blvd', '48ft x 14ft', "Yes", "Static", 2, 003);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.945966, -75.109798, 'Admiral Wilson Blvd', '48ft x 14ft', "Yes", "Static", 2, 004);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.945142, -75.107525, 'Admiral Wilson Blvd', '48ft x 14ft', "No", "Static", 2, 005);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.954656, -75.143354, 'Ben Franklin Bridge', '48ft x 14ft', "No", "Static", 2, 006);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.954013, -75.142501, 'Ben Franklin Bridge', '48ft x 14ft', "Yes", "Static", 3, 007);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.955122, -75.145205, 'Ben Franklin Bridge', '48ft x 14ft', "No", "Static", 1, 008);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.955244, -75.146927, 'Ben Franklin Bridge', '48ft x 14ft', "No", "Static", 1, 009);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.955639, -75.147186, 'Ben Franklin Bridge', '48ft x 14ft', "No", "Static", 1, 010);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.956393, -75.148440, 'Vine St.', '48ft x 14ft', "No", "Static", 1, 011);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.958061, -75.148027, 'Vine St.', '48ft x 14ft', "No", "Digital", 2, 012);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.956281, -75.154412, 'Route 676', '48ft x 14ft', "No", "Static", 2, 013);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.957162, -75.159969, 'Route 676', '48ft x 14ft', "No", "Static", 2, 014);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.957282, -75.161248, 'Route 676', '48ft x 14ft', "Yes", "Static", 2, 015);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.957374, -75.162230, 'Route 676', '48ft x 14ft', "No", "Static", 2, 016);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.959219, -75.178592, 'Route 676', '48ft x 14ft', "No", "Static", 2, 017);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.960094, -39.960094, 'Route 676', '48ft x 14ft', "Yes", "Static", 1, 018);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.959057, -75.181095, 'i76', '48ft x 14ft', "Yes", "Static", 2, 019);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.957633, -75.180609, 'i76', '48ft x 14ft', "No", "Static", 2, 020);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.965405, -75.186515, 'i76', '48ft x 14ft', "No", "Static", 2, 021);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.966288, -75.187528, 'i76', '48ft x 14ft', "Yes", "Static", 2, 022);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.967099, -75.188857, 'i76', '48ft x 14ft', "Yes", "Static", 2, 023);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.948747, -75.186253, 'i76', '48ft x 14ft', "Yes", "Static", 1, 024);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.944126, -75.192377, 'i76', '48ft x 14ft', "Yes", "Static", 1, 025);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.940331, -75.197740, 'S. 34th St.', '48ft x 14ft', "Yes", "Static", 2, 026);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.941661, -75.196996, 'S. 34th St.', '48ft x 14ft', "No", "Static", 2, 027);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.941318, -75.195047, 'i76', '48ft x 14ft', "No", "Static", 2, 028);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.940407, -75.195284, 'i76', '48ft x 14ft', "No", "Static", 2, 029);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.938456, -75.199076, 'S. 34th & Warton St.', '24ft x 14ft', "Yes", "Static", 1, 030);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.941353, -75.197298, 'S. 34th & Warton St.', '24ft x 14ft', "Yes", "Static", 2, 031);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.938459, -75.199074, 'Warton St.', '48ft x 14ft', "Yes", "Static", 1, 032);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.935446, -75.199147, 'Vare Ave & Dickinson St', '48ft x 14ft', "Yes", "Digital", 2, 033);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.932964, -75.200537, 'Warfield Ave.', '48ft x 14ft', "Yes", "Static", 2, 034);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.932373, -75.200537, 'Warfield Ave.', '48ft x 14ft', "Yes", "Digital", 1, 035);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.930635, -75.199755, 'i76.', '48ft x 14ft', "No", "Static", 2, 036);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.929926, -75.198525, 'i76.', '48ft x 14ft', "No", "Static", 2, 037);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.928040, -75.196528, 'i76.', '48ft x 14ft', "No", "Static", 2, 038);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.926812, -75.195435, 'i76.', '48ft x 14ft', "No", "Static", 2, 039);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.927158, -75.194697, 'i76.', '48ft x 14ft', "Yes", "Static", 2, 040);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.926105, -75.193820, 'i76.', '48ft x 14ft', "Yes", "Static", 2, 041);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.925510, -75.193225, 'i76.', '48ft x 14ft', "No", "Static", 2, 042);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.924734, -75.193591, 'i76.', '48ft x 14ft', "No", "Static", 1, 043);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.924651, -75.193475, 'i76.', '24ft x 18ft', "No", "Static", 1, 044);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.923951, -75.192977, 'i76.', '48ft x 14ft', "No", "Static", 4, 045);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.924543, -75.193479, 'i76. Off Ramp', '48ft x 14ft', "No", "Static", 1, 046);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.923917, -75.193044, 'i76. Off Ramp', '24ft x 18ft', "No", "Static", 4, 047);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.924658, -75.193589, 'i76.', '48ft x 14ft', "No", "Static", 1, 048);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.921812, -75.191602, 'i76.', '48ft x 14ft', "No", "Static", 2, 049);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.921567, -75.192124, 'i76.', '48ft x 14ft', "No", "Static", 1, 050);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.921133, -75.190873, 'i76.', '24ft x 18ft', "No", "Static", 2, 051);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.920833, -75.190297, 'i76.', '24ft x 18ft', "No", "Static", 1, 052);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.919928, -75.189455, 'i76.', '48ft x 14ft', "Yes", "Static", 1, 053);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.919262, -75.190285, 'i76.', '24ft x 18ft', "No", "Static", 2, 054);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.919111, -75.189360, 'i76.', '48ft x 14ft', "Yes", "Static", 1, 055);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.915910, -75.189963, 'i76.', '48ft x 14ft', "No", "Static", 1, 056);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.915656, -75.190575, 'i76.', '48ft x 14ft', "No", "Static", 1, 057);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.914872, -75.190122, 'i76.', '48ft x 14ft', "No", "Static", 1, 058);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.914591, -75.188711, 'i76.', '48ft x 14ft', "No", "Static", 2, 059);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.913312, -75.183523, 'i76.', '48ft x 14ft', "Yes", "Digital", 2, 060);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.913734, -75.181454, 'i76.', '48ft x 14ft', "Yes", "Digital", 2, 061);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.913511, -75.179610, 'i76.', '48ft x 14ft', "No", "Static", 2, 062);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.909024, -75.152722, 'i76.', '48ft x 14ft', "No", "Static", 2, 063);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.909259, -75.151624, 'i76.', '48ft x 14ft', "No", "Static", 2, 064);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.908587, -75.150739, 'i76.', '48ft x 14ft', "No", "Digital", 2, 065);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.908588, -75.150724, 'i76.', '48ft x 14ft', "No", "Static", 2, 066);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.909026, -75.149795, 'i76.', '48ft x 14ft', "No", "Static", 2, 067);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.909192, -75.148724, 'i76.', '48ft x 14ft', "No", "Static", 1, 068);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.908145, -75.148164, 'i76.', '48ft x 14ft', "No", "Static", 2, 069);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.908690, -75.148004, 'i76.', '48ft x 14ft', "No", "Static", 2, 070);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.908304, -75.146062, 'i76.', '48ft x 14ft', "No", "Static", 2, 071);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.907753, -75.146036, 'i76.', '48ft x 14ft', "No", "Static", 2, 072);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.908065, -75.144277, 'i76.', '48ft x 14ft', "No", "Static", 2, 073);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.907416, -75.144030, 'i76.', '48ft x 14ft', "Yes", "Digital", 2, 074);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.907112, -75.142264, 'i76.', '48ft x 14ft', "No", "Static", 2, 075);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.907669, -75.141836, 'i76.', '48ft x 14ft', "No", "Static", 2, 076);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.906806, -75.140550, 'i76.', '48ft x 14ft', "No", "Static", 2, 077);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.907318, -75.139838, 'i76.', '48ft x 14ft', "No", "Digital", 2, 078);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.906595, -75.138764, 'i76.', '48ft x 14ft', "No", "Static", 2, 079);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.906747, -75.136724, 'i76.', '48ft x 14ft', "No", "Static", 2, 080);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.906672, -75.149016, 'i95.', '48ft x 14ft', "No", "Static", 2, 081);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.905748, -75.15024, 'i95.', '48ft x 14ft', "No", "Static", 2, 082);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.905295, -75.150584, 'i95.', '48ft x 14ft', "No", "Static", 2, 083);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.904270, -75.149316, 'i95.', '48ft x 14ft', "No", "Static", 2, 084);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.903887, -75.149768, 'i95.', '48ft x 14ft', "No", "Static", 2, 085);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.902275, -75.151735, 'i95.', '48ft x 14ft', "No", "Static", 2, 086);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.902026, -75.150895, 'i95.', '48ft x 14ft', "Yes", "Static", 2, 087);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.901442, -75.151764, 'i95.', '48ft x 14ft', "No", "Static", 2, 088);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.900637, -75.153479, 'i95.', '48ft x 14ft', "No", "Static", 2, 089);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.901338, -75.153145, 'i95.', '48ft x 14ft', "No", "Static", 2, 090);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.900847, -75.155578, 'i95.', '48ft x 14ft', "No", "Static", 2, 091);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.900331, -75.155783, 'i95.', '48ft x 14ft', "No", "Static", 2, 092);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.90052, -75.158354, 'i95.', '48ft x 14ft', "No", "Digital", 2, 093);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.900104, -75.157862, 'i95.', '48ft x 14ft', "No", "Static", 2, 094);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.899800, -75.160057, 'i95.', '48ft x 14ft', "No", "Static", 2, 095);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.899547, -75.162254, 'i95.', '48ft x 14ft', "No", "Static", 2, 096);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.899282, -75.164403, 'i95.', '48ft x 14ft', "No", "Static", 2, 097);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.898810, -75.168235, 'i95.', '48ft x 14ft', "No", "Static", 2, 098);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.898583, -75.170059, 'i95.', '48ft x 14ft', "No", "Static", 2, 099);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.899252, -75.171361, 'i95.', '48ft x 14ft', "No", "Static", 2, 100);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.898745, -75.177431, 'i95.', '48ft x 14ft', "No", "Static", 2, 101);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.899506, -75.173321, 'i95.', '48ft x 14ft', "No", "Static", 2, 102);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.897973, -75.181359, 'i95.', '48ft x 14ft', "No", "Static", 2, 103);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.897552, -75.183472, 'i95.', '48ft x 14ft', "No", "Static", 2, 104);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.896729, -75.188464, 'i95.', '48ft x 14ft', "Yes", "Digital", 2, 105);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.897145, -75.190044, 'i95.', '48ft x 14ft', "Yes", "Static", 2, 106);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.885448, -75.212018, 'i95.', '48ft x 14ft', "Yes", "Static", 2, 107);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.911515, -75.149813, 'i95.', '48ft x 14ft', "No", "Static", 2, 108);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.910643, -75.148100, 'i95.', '48ft x 14ft', "No", "Static", 2, 109);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.913382, -75.147861, 'i95.', '12ft x 48ft', "No", "Static", 2, 110);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.912873, -75.148911, 'i95.', '48ft x 14ft', "No", "Static", 2, 111);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.914605, -75.148430, 'i95.', '48ft x 14ft', "No", "Static", 2, 112);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.915351, -75.147148, 'i95.', '48ft x 14ft', "Yes", "Static", 2, 113);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.917112, -75.147278, 'i95.', '48ft x 14ft', "No", "Static", 2, 114);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.916875, -75.147278, 'i95.', '48ft x 14ft', "No", "Static", 2, 115);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.917790, -75.147352, 'i95.', '48ft x 14ft', "No", "Static", 2, 116);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.918714, -75.14742, 'i95.', '48ft x 14ft', "No", "Static", 2, 117);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.918968, -75.147568, 'i95.', '48ft x 14ft', "No", "Static", 2, 118);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.920131, -75.147658, 'i95.', '48ft x 14ft', "No", "Static", 2, 119);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.922163, -75.146605, 'i95.', '48ft x 14ft', "No", "Static", 2, 120);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.925171, -75.146315, 'i95.', '48ft x 14ft', "Yes", "Digital", 2, 121);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.928402, -75.147100, 'i95.', '48ft x 14ft', "No", "Static", 2, 122);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.932786, -75.145060, 'i95.', '48ft x 14ft', "No", "Static", 2, 123);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.958283, -75.147313, 'N. 15th St.', '48ft x 14ft', "No", "Static", 1, 124);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.961389, -75.146317, 'N. 15th St. & Spring Garden St.', '48ft x 14ft', "No", "Static", 3, 125);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.961423, -75.146801, 'N. 15th St. & Spring Garden St.', '11ft x 5ft', "No", "Static", 2, 126);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.939631, -75.166644, 'S. Broad St.', '11ft x 5ft', "No", "Static", 4, 127);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.948342, -75.164299, 'S. Broad St.', '18ft x 36ft', "No", "Static", 2, 128);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.964805, -75.160688, 'S. Broad St. & Wallace St.', '48ft x 14ft', "No", "Static", 1, 129);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.969934, -75.159520, 'S. Broad St. & Poplar St.', '24ft x 14ft', "No", "Static", 4, 130);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.970265, -75.159488, 'S. Broad St. & Poplar St.', '24ft x 14ft', "No", "Static", 1, 131);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.971262, -75.159297, 'S. Broad St. & W. Girard Ave.', '48ft x 14ft', "Yes", "Static", 1, 132);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.986347, -75.155995, 'S. Broad St. & W. Susquehanna Ave.', '24ft x 14ft', "No", "Static", 2, 133);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.991134, -75.154929, 'S. Broad St.', '24ft x 14ft', "No", "Static", 2, 134);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.992531, -75.154607, 'S. Broad St.', '48ft x 14ft', "No", "Static", 1, 135);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.993622, -75.154375, 'S. Broad St.', '24ft x 14ft', "No", "Static", 4, 136);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.997427, -75.153513, 'S. Broad St.', '48ft x 14ft', "No", "Static", 1, 137);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.958859, -75.140057, 'i95.', '48ft x 14ft', "Yes", "Static", 2, 138);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.960226, -75.139931, 'i95.', '48ft x 14ft', "No", "Static", 2, 139);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.962128, -75.140461, 'i95.', '48ft x 14ft', "No", "Static", 2, 140);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.962266, -75.138924, 'i95.', '48ft x 14ft', "Yes", "Static", 2, 141);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.963333, -75.139611, 'i95.', '48ft x 14ft', "Yes", "Static", 2, 142);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.965291, -75.136545, 'i95.', '48ft x 14ft', "Yes", "Static", 2, 143);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.965541, -75.137636, 'i95.', '48ft x 14ft', "No", "Static", 2, 144);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.966724, -75.135849, 'i95.', '48ft x 14ft', "No", "Static", 2, 145);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.966044, -75.135140, 'i95.', '48ft x 14ft', "No", "Digital", 2, 146);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.966499, -75.134258, 'i95.', '24ft x 14ft', "No", "Digital", 2, 147);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.966416, -75.134311, 'i95.', '24ft x 14ft', "Yes", "Digital", 1, 148);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.967321, -75.134112, 'i95.', '48ft x 14ft', "Yes", "Digital", 2, 149);
INSERT INTO billboards (lat, lng, location, size, available, type, sides, sign_no) VALUES (39.967284, -75.133809, 'i95.', '48ft x 14ft', "Yes", "Digital", 1, 150);




CREATE TABLE contracts (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NULL,
  last_name VARCHAR(100) NULL,
  business_name VARCHAR(100) NULL,
  bill_address VARCHAR(100) NULL,
  phone_number VARCHAR(100) NULL,
  number_signs INT NULL,
  signs_rented VARCHAR(100) NULL,
  contract_term VARCHAR(100) NULL,
  monthly_rent VARCHAR(100) NULL,
  delinquent_account VARCHAR(100) NULL,
  past_due_payment INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO contracts (first_name, last_name, business_name, bill_address, phone_number, number_signs, signs_rented, contract_term, monthly_rent, delinquent_account, past_due_payment) VALUES ('John', 'Doe', 'Walmart', '702 S.W. 8th St. Bentonville, Arkansas, AK 72716', '800-925-6278', 6, '000, 011, 019, 084, 124, 150', '6 months', '$6,800 per month', 'No', 0.00);
INSERT INTO contracts (first_name, last_name, business_name, bill_address, phone_number, number_signs, signs_rented, contract_term, monthly_rent, delinquent_account, past_due_payment) VALUES ('George', 'Smith', 'Wawa', 'Red Roof, 260 W. Baltimore Pike, Wawa, Pennsylvania 19063', '610-358-8000', 10, '001, 012, 020, 088, 124, 148', '3 months', '$6,800 per month', 'No', 0.00);
INSERT INTO contracts (first_name, last_name, business_name, bill_address, phone_number, number_signs, signs_rented, contract_term, monthly_rent, delinquent_account, past_due_payment) VALUES ('Mike', 'Greg', 'Dunkin Donuts', '130 Royall St, Canton, MA 02021', '781-737-3000', 6, '003, 016, 025, 081, 125, 143', '3 months', '$6,800 per month', 'No', 0.00);
INSERT INTO contracts (first_name, last_name, business_name, bill_address, phone_number, number_signs, signs_rented, contract_term, monthly_rent, delinquent_account, past_due_payment) VALUES ('Tim', 'Cook', 'Apple', 'One Apple Park Way, Cupertino, CA 95014', '408-996–1010', 4, '007, 013, 050, 072', '3 months', '$4,500 per month', 'No', 0.00);
INSERT INTO contracts (first_name, last_name, business_name, bill_address, phone_number, number_signs, signs_rented, contract_term, monthly_rent, delinquent_account, past_due_payment) VALUES ('Ray', 'Crock', 'McDonalds', '1 McDonalds Plaza, Oak Brook, Illinois 60523', '800-244-6227', 4, '008, 022, 091, 077', '6 months', '$4,500 per month', 'No', 0.00);
INSERT INTO contracts (first_name, last_name, business_name, bill_address, phone_number, number_signs, signs_rented, contract_term, monthly_rent, delinquent_account, past_due_payment) VALUES ('Ed', 'Johston', 'Nike', 'One Bowerman Drive, Beaverton, OR 97005', '503-671-6453', 5, '008, 022, 091, 077', '3 months', '$4,500 per month', 'No', 0.00);
INSERT INTO contracts (first_name, last_name, business_name, bill_address, phone_number, number_signs, signs_rented, contract_term, monthly_rent, delinquent_account, past_due_payment) VALUES ('Joe', 'Shmoe', 'Comcast', '1701 JFK Blvd. Philadelphia, PA 19103', '215-286-1700', 7, '008, 022, 091, 077', '3 months', '$4,500 per month', 'No', 0.00);



CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NULL,
  password VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

INSERT INTO users (user_name, password) VALUES ('david', 'Pass1234' );
INSERT INTO users (user_name, password) VALUES ('ian', 'Pass1234' );
INSERT INTO users (user_name, password) VALUES ('tyler', 'Pass1234' );
INSERT INTO users (user_name, password) VALUES ('didier', 'Pass1234' );