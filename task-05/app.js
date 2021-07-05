/**
 * 1. Töltsd be a szükséges modulokat: http és az általad írt router modul.
 */
const http = require('http');
const router = require('./router/countryRouter');
// 2. Definiáld a port értékét 8080 -ra a port változóban.
const port = 8080;
/**
 * 3. Hozz létre egy http szervert.
 * A szerver get kérés esetén meghívja a router kapcsolódó metódusát, 
 * amely válaszol a kérésre.
 */
http.createServer(async (req, res) => {
    router[req.method.toLowerCase()](res);
})
    // 4. Állítsd be, hogy a szerver figyelje a port változóban definiált portot.
    .on('error', err => console.log(`server error:${err.message}`))
    .on('listening', () => console.log(`server is running http://127.0.0.1:${port}`))
    .listen(port)