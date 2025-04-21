const getTenantDB = require('../config');
const util = require('util');

exports.getEmployee = async (req, res) => {
    const schemaName = req.schema;
    const con = getTenantDB(schemaName);
    const query = util.promisify(con.query).bind(con); // 🔑 Convert to promise

    try {
        const result = await query('SELECT * FROM empmaster');
        res.json(result);
    } catch (err) {
        console.error('Error fetching empmaster:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        con.end(); // ✅ Always close the connection
    }
};
