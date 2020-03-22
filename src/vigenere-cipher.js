class VigenereCipheringMachine {
    constructor(order = true) {
        this.order = order;
    }
    encrypt(message, key) {
        if (message == null || key == null)
            throw new Error;
        let result = [];
        let keyIndex = 0;
        for (let index = 0; index < message.length; index++) {
            if (message[index].match(/[A-Za-z]/)) {
                result[index] = String.fromCharCode((message[index].toUpperCase().charCodeAt() + key[keyIndex % key.length].toUpperCase().charCodeAt() - 65 * 2) % 26 + 65);
                keyIndex++;
            } else
                result[index] = message[index];
        }
        return this.order ? result.join('') : result.reverse().join('');
    }

    decrypt(message, key) {
        if (message == null || key == null)
            throw new Error;
        let keyIndex = 0;
        let result = [];
        for (let index = 0; index < message.length; index++) {
            if (message[index].match(/[A-Za-z]/)) {
                result[index] = String.fromCharCode((26 + message[index].toUpperCase().charCodeAt() - key[keyIndex % key.length].toUpperCase().charCodeAt()) % 26 + 65);
                keyIndex++;
            } else
                result[index] = message[index];
        }
        return this.order ? result.join('') : result.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
