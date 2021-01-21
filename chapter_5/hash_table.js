class HashTable {
    constructor() {
        this.data = [];
    }

    setValue(key, value) {
        const index = this.hashFunction(key);
        this.data[index] = value;
    }

    getValue(key) {
        const index = this.hashFunction(key);
        return this.data[index];
    }

    hashFunction(word) {
        const charSum = word.split('').reduce((acc, char, i) => {
            const charCode = char.charCodeAt(0);
            const prev = word.charAt(i - 1);
            const prevCode = prev ? prev.charCodeAt(0) : 0;

            acc += charCode + prevCode;

            return acc;
        }, 0);

        return charSum % 100;
    }
}

const ht = new HashTable();

ht.setValue('apple', '200');
ht.setValue('avocado', '340');

console.log(ht.getValue('apple')); // 200
console.log(ht.getValue('avocado')); // 340

// check for collisions
ht.setValue('ab', '1');
ht.setValue('ba', '2');
console.log(ht.getValue('ab')); // 1
console.log(ht.getValue('ba')); // 2

ht.setValue('st', '11');
ht.setValue('MMM', '22');
console.log(ht.getValue('st')); // 11
console.log(ht.getValue('MMM')); // 22

// other cases
ht.setValue('Привет, друг!', 'some');
console.log(ht.getValue('Привет, друг!')); // some
console.log(ht.getValue('Привет, apple')); // undefined
