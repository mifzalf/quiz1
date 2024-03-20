var connection = require("../config/database");

class ModelProduk {
    static async getAll() {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM produk a RIGHT JOIN kategori b ON a.id_kategori = b.id_kategori ORDER BY a.id_produk DESC`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static async store(data) {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO produk SET ?`, data, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    static async getID(id) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM produk WHERE id_produk = ${id}`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static async updateData(id, data) {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE produk SET ? WHERE id_produk = ${id}`, data, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static async deleteData(id) {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM produk WHERE id_produk = ${id}`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
}

module.exports = ModelProduk;
