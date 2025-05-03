const getTenantDB = require('../config');
const util = require('util');
exports.createStockDetail = async (req, res) => {
    const schemaName = req.schema;
    const con = getTenantDB(schemaName);
    const query = util.promisify(con.query).bind(con);
    try {
        const {
            QTY, MRP, SALEPRICE, PRODUCT, BARCODE, ITEMID, LOOKUP, ITEMNAME, BRAND,
            I_SIZE, COLOR, SCOLOR, UNIT, PACKING, BUYER, SEASON, COMPANY, SHELFNO,
            SECTION, MATERIAL, STYLE, CATEGORY, GENDER, PURPRICE, DEALERNAME,
            AMOUNT, MRP_AMOUNT
        } = req.body;
        const sql = `
            INSERT INTO stockdetail (
                QTY, MRP, SALEPRICE, PRODUCT, BARCODE, ITEMID, LOOKUP, ITEMNAME, BRAND,
                I_SIZE, COLOR, SCOLOR, UNIT, PACKING, BUYER, SEASON, COMPANY, SHELFNO,
                SECTION, MATERIAL, STYLE, CATEGORY, GENDER, PURPRICE, DEALERNAME,
                AMOUNT, MRP_AMOUNT
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            QTY, MRP, SALEPRICE, PRODUCT, BARCODE, ITEMID, LOOKUP, ITEMNAME, BRAND,
            I_SIZE, COLOR, SCOLOR, UNIT, PACKING, BUYER, SEASON, COMPANY, SHELFNO,
            SECTION, MATERIAL, STYLE, CATEGORY, GENDER, PURPRICE, DEALERNAME,
            AMOUNT, MRP_AMOUNT
        ];
        await query(sql, values);
        res.status(201).json({ message: 'Stock detail inserted successfully' });
    } catch (err) {
        console.error('POST stockdetail error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        con.end();
    }
};
exports.getStockDetails = async (req, res) => {
    const schemaName = req.schema;
    const con = getTenantDB(schemaName);
    const query = util.promisify(con.query).bind(con);
    try {
        const result = await query('SELECT * FROM stockdetail');
        res.json(result);
    } catch (err) {
        console.error('GET stockdetail error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        con.end();
    }
};