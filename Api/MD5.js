
// // Mã hóa hai chiều
// const crypto = require('crypto');// Cấu hình thuật toán, key (32 byte) và IV (16 byte)
// const algorithm = 'aes-256-cbc';
// const key = Buffer.from('0123456789abcdef0123456789abcdef'); // 32 ký tự
// const iv = Buffer.from('abcdef9876543210'); // 16 ký tự


// class MD5 {
//   MD5_Mahoa = (Key) => {
//     alert ('lll');

//     const cipher = crypto.createCipheriv(algorithm, key, iv);
//     let encrypted = cipher.update(Key, 'utf8', 'hex');
//     encrypted += cipher.final('hex');
//       return encrypted;
//   }
  
//   MD5_Giaima = (Key) => {
//     const decipher = crypto.createDecipheriv(algorithm, key, iv);
//     let decrypted = decipher.update(Key, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//       return decrypted;
//   }
// }


// export default MD5;

