studentCode = prompt("Please input student code: ");
fullName = prompt("Please input your full name");
className = prompt("Please input your class name");

document.write("<table border='1px' style='width: 50%;' cellspacing='0'>")
document.write("<tr><th colspan='3'>Danh sách sinh viên</th></tr>")
document.write("<tr><td>MSSV</td><td>Họ tên</td><td>Lớp</td></tr>")
document.write(`<tr><td>${studentCode}</td><td>${fullName}</td><td>${className}</td></tr></table>`)
