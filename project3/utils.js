const fs = require('fs');

const uniqueId = Math.random().toString(36).substring(2) + Date.now().toString(36);

module.exports.createFileWriteAsync = (data) => {
  const fileName = `${uniqueId}.json`
  fs.writeFile(fileName, data, function (err) {
    if (err) { throw `error:${err}` }
  });
  return fileName
}

