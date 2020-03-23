const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

async function detectQrCode(file) {
  const bin = path.join(__dirname, `bin/inspect`)
  if (!fs.existsSync(bin)) {
    return false
  }

  return new Promise(resolve => {
    exec(`${bin} ${file}`, (err, stdout, stderr) => {
      if (stderr) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

module.exports = detectQrCode
