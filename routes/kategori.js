const express = require('express');
const router = express.Router();

const connection = require('../config/database');

const ModelKategori = require('../model/model_kategori');

router.get('/', async function(req, res, next) {
    let rows = await ModelKategori.getAll();
    res.render('kategori/index', {
        data: rows
    });
});

router.get('/create', function(req, res, next) {
    res.render('kategori/create');
});

router.post('/store', async function(req, res, next) {
    try {
        let { nama_kategori } = req.body;
        let data = {
            nama_kategori
        };
        await ModelKategori.writeData(data);
        req.flash('success', 'Berhasil menambahkan data');
        res.redirect('/kategori');
    } catch (error) {
        req.flash('error', 'Terjadi kesalahan pada fungsi');
        res.redirect('/kategori');
    }
});

router.get('/edit/:id', async function(req, res, next) {
    let id = req.params.id;
    let rows = await ModelKategori.editData(id);
    res.render('kategori/edit', {
        id: rows[0].id_kategori,
        nama_kategori: rows[0].nama_kategori
    });
});

router.post('/update/:id', async function(req, res, next) {
    try {
        let id = req.params.id;
        let { nama_kategori } = req.body;
        let data = {
            nama_kategori
        };
        await ModelKategori.updateData(id, data);
        req.flash('success', 'Berhasil mengubah data');
        res.redirect('/kategori');
    } catch (error) {
        req.flash('error', 'Terjadi kesalahan pada fungsi');
        res.redirect('/kategori');
    }
});

router.get('/delete/:id', async function(req, res, next) {
    let id = req.params.id;
    await ModelKategori.deleteData(id);
    req.flash('success', 'Berhasil menghapus data');
    res.redirect('/kategori');
});

module.exports = router;
