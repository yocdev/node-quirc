const { exec } = require('child_process')
const path = require('path')
const os = require('os')

function detectQrCode(file) {
  return new Promise((resolve) => {
    const bin = path.join(__dirname, `bin/inspect`)
    exec(`${bin} ${file}`, (err, stdout, stderr) => {
      console.log(stdout)
      console.log(stderr)
      if (stderr) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

module.exports = detectQrCode
