# AllAboutExpressJS
Sonar step:
1.  download sonar server, kemudian ekstrak. masuk ke sonar yg telah di ekstrak -> bin -> win64 -> start sonar
2. jalan kan di browser localhost:9000. kemudian login dg user: admin password: admin (default)
noted: untuk sonar server latest biasanya meminta latest jdk 11
install dulu jdk 11 nya
install sonar scanner di express dg perintah npm install sonarqube-scanner --save-dev
3. buat file sonar-project.js dengan config sbb:
sonar.sources : . jika file config sonar kalian berada di root atau setara index.js, .env, dll
sonar.inclusions : src. agar yg terinclude sonar hanya yg didalam src
3. pada package.json. tambahkan script ini:
kemudian run dengan perintah npm run sonar
maka sonar akan melakukan scaning code kalian
4 jika sudah lihat kembali di browser, maka akan muncul project kalian yg ter scan sonar
5. untuk melihat coverage test yg kalian lakukan menggunakan jest. install jest sonar reporter
npm install -D jest-sonar-reporter
running kembali scan sonar (npm run sonar)
refres browser sonar anda (localhost:9000)
#refresh
