const crypto = require('crypto');
const encryptionType = 'aes256'; //aes256
const encryptionEncoding = 'base64';
const bufferEncryption = 'utf-8';
const key = process.env.REACT_APP_KEY; //replace with your key
const iv = process.env.REACT_APP_IV; //replace with your IV

export const encrypt = ((authorizationKey) => {
    var cipher = crypto.createCipheriv(encryptionType, key, iv);
    var encrypted = cipher.update(authorizationKey, bufferEncryption, encryptionEncoding);
    encrypted += cipher.final(encryptionEncoding);
    return encrypted
});

export const decrypt = ((authorizationKey) => {
    var decipher = crypto.createDecipheriv(encryptionType, key, iv);
    var deciphered = decipher.update(authorizationKey, bufferEncryption, encryptionEncoding);
    deciphered += decipher.final(encryptionEncoding);
    return deciphered;
});
