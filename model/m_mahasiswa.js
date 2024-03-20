const connection = require(`../config/database`);

class ModelMahasiswa {
    static async getAll() {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM mahasiswa ORDER BY id_mahasiswa DESC`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static async writeData(data) {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO mahasiswa SET ?`, data, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    static async editData(id) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM mahasiswa WHERE id_mahasiswa = ?`, [id], (err, rows) => {
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
            connection.query(`UPDATE mahasiswa SET ? WHERE id_mahasiswa = ?`, [data, id], (err, rows) => {
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
            connection.query(`DELETE FROM mahasiswa WHERE id_mahasiswa = ?`, [id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
}


module.exports = ModelMahasiswa;
