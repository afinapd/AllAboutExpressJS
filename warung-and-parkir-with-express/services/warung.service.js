const uuidv1 = require('uuid/v1');
const _ = require("lodash");

const users = [
    {
        id: 1,
        name: 'nasi',
        price: 5000,
        stok: 2
    },
    {
        id: 2,
        name: 'uduk',
        price: 5000,
        stok: 2
    }
];
let struk = [];

class WarungService {
    async untukBeli(menu) {
        const beli = new Promise((resolve, reject) => {
            for (let i = 0; i < users.length; i++) {
                if (users[i].name == menu.name) {
                    struk.push(users[i])
                    users[i].stok -= 1
                }
            }
            resolve(users);
        });
        const result = await beli;
        return result;
    }

    async struk() {
        const strukk = new Promise((resolve, reject) => {
            let listNama = "";
            let harga = []
            // struk.forEach((item) => {
            //     listNama == "" ? listNama += item.name : listNama += `, ${struk[i].name}`
            //     harga.push(item.harga)
            // })
            for (let i = 0; i < struk.length; i++) {
                if (listNama === "") {
                    listNama = struk[i].name
                } else {
                    listNama += `, ${struk[i].name}`
                }
                harga.push(struk[i].price)
            }
            let total = _.sum(harga)
            resolve(`pesanan ${listNama} dengan total ${total}`)
        });
        const result = await strukk;
        return result;
    }

    async listMakanan() {
        const promise = new Promise((resolve, reject) => {
            resolve(users);
        });
        const result = await promise;
        return result;
    }
}

module.exports = WarungService;