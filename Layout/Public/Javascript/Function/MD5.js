




const crypto = require('crypto');

// Cấu hình thuật toán, key (32 byte) và IV (16 byte)
const algorithm = 'aes-256-cbc';
const key = Buffer.from('0123456789abcdef0123456789abcdef'); // 32 ký tự
const iv = Buffer.from('abcdef9876543210'); // 16 ký tự

// Hàm mã hóa
function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Hàm giải mã
function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

const plaintext = '89128391';
const encryptedText = encrypt(plaintext);
console.log('Mã hóa:', encryptedText);

// Khi cần, bạn có thể giải mã để lấy lại dữ liệu gốc
const decryptedText = decrypt(encryptedText);
console.log('Giải mã:', decryptedText);
