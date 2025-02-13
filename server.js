let http = require('http');

let server = http.createServer(async (req, res) => {
    try {
        if (req.url === "/products") {
            let response = await fetch("https://fakestoreapi.com/products");
            let data = await response.json();
            res.write(JSON.stringify(data));
            console.log(data);  
            res.end();
        }

    } catch (error) {
        console.error("data failed to fetch:", error);
    }

});
let port = 3000;
server.listen(port, () => {
    console.log('server running....');
});