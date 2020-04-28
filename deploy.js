const Client = require('ftp');
const fs = require('fs');
const folderDist = './dist/';
const uploadFolder = 'public_html';

var c = new Client();

c.on('ready', function () {

  c.rmdir(uploadFolder, true, () => {
    c.mkdir(uploadFolder, false, () => {
      fs.readdirSync(folderDist).forEach(fileName => {
        c.put(folderDist + fileName, uploadFolder + '/' + fileName, function (err) {
          if (err) { throw err; }
          c.end();
        });
      });
    });
  });
});

let connectOptions = {
  host: 'hegel.timeweb.ru',
  user: 'bezrukovyra_123',
  password: 'bezrukovyra123'
}

c.connect(connectOptions);
