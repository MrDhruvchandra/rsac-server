const express = require('express');
const cors = require('cors');
const wkx = require('wkx');
const { Client } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL client setup
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'rsac',
    password: 'Dhruv@8317',
    port: 5432,
});

// Connect to PostgreSQL
client.connect()
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.error('Database connection error', err.stack));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.get('/graveyard', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM graveyard'); // Adjust SQL query as needed

        const geojson = {
            type: 'FeatureCollection',
            features: result.rows.map(row => ({
                type: 'Feature',
                geometry: wkx.Geometry.parse(Buffer.from(row.geom, 'hex')).toGeoJSON(), // Convert WKB to GeoJSON
                properties: {
                    gid: row.gid,
                    name: row.name,
                    address: row.address,
                    phonenumbe: row.phonenumbe
                }
            }))
        };

        res.json(geojson);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

app.get('/governmentoffices', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM state_government_office'); // Replace 'your_table_name' with your actual table name
        const geojson = {
            type: 'FeatureCollection',
            features: result.rows.map(row => ({
                type: 'Feature',
                geometry: wkx.Geometry.parse(Buffer.from(row.geom, 'hex')).toGeoJSON(), // Convert WKB to GeoJSON
                properties: {
                    gid: row.gid,
                    name: row.name,
                    address: row.address,
                    phonenumbe: row.phonenumbe
                }
            }))
        };
        res.json(geojson);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});
app.get('/busstop', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM bus_stop'); // Replace 'your_table_name' with your actual table name
        const geojson = {
            type: 'FeatureCollection',
            features: result.rows.map(row => ({
                type: 'Feature',
                geometry: wkx.Geometry.parse(Buffer.from(row.geom, 'hex')).toGeoJSON(), // Convert WKB to GeoJSON
                properties: {
                    gid: row.gid,
                    name: row.name,
                    address: row.address,
                    phonenumbe: row.phonenumbe
                }
            }))
        };
        res.json(geojson);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});
app.get('/hospital', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM hospitals'); // Replace 'your_table_name' with your actual table name
        const geojson = {
            type: 'FeatureCollection',
            features: result.rows.map(row => ({
                type: 'Feature',
                geometry: wkx.Geometry.parse(Buffer.from(row.geom, 'hex')).toGeoJSON(), // Convert WKB to GeoJSON
                properties: {
                    gid: row.gid,
                    name: row.name,
                    address: row.address,
                    phonenumbe: row.phonenumbe
                }
            }))
        };
        res.json(geojson);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});
app.get('/educationalInstitutes', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM educational'); // Replace 'your_table_name' with your actual table name
        const geojson = {
            type: 'FeatureCollection',
            features: result.rows.map(row => ({
                type: 'Feature',
                geometry: wkx.Geometry.parse(Buffer.from(row.geom, 'hex')).toGeoJSON(), // Convert WKB to GeoJSON
                properties: {
                    gid: row.gid,
                    name: row.name,
                    address: row.address,
                    phonenumbe: row.phonenumbe
                }
            }))
        };
        res.json(geojson);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});
app.get('/bank&Atm', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM banks_and_atm_'); // Replace 'your_table_name' with your actual table name
        const geojson = {
            type: 'FeatureCollection',
            features: result.rows.map(row => ({
                type: 'Feature',
                geometry: wkx.Geometry.parse(Buffer.from(row.geom, 'hex')).toGeoJSON(), // Convert WKB to GeoJSON
                properties: {
                    gid: row.gid,
                    name: row.name,
                    address: row.address,
                    phonenumbe: row.phonenumbe
                }
            }))
        };
        res.json(geojson);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});
app.get('/petrolpump', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM petrolpump'); // Replace 'your_table_name' with your actual table name
        const geojson = {
            type: 'FeatureCollection',
            features: result.rows.map(row => ({
                type: 'Feature',
                geometry: wkx.Geometry.parse(Buffer.from(row.geom, 'hex')).toGeoJSON(), // Convert WKB to GeoJSON
                properties: {
                    gid: row.gid,
                    name: row.name,
                    address: row.address,
                    phonenumbe: row.phonenumbe
                }
            }))
        };
        res.json(geojson);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});
 
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
