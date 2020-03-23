const path = require('path')
const detectQr = require('node-quirc')

test('detectQr should returns true when detects qr code', async () => {
  const qrCode = path.join(__dirname, 'assets/qrCode.png')
  expect(await detectQr(qrCode)).toBeTruthy()
})

test('detectQr should returns false when not detects qr code', async () => {
  const notQrCode = path.join(__dirname, 'assets/notQrCode.png')
  expect(await detectQr(notQrCode)).toBeFalsy()
})
