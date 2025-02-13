let http = require('http');

let server = http.createServer(async (req, res) => {
    // try {
    //     if (req.url === "/products") {
    //         let response = await fetch("https://fakestoreapi.com/products");
    //         let data = await response.json();
    //         res.write(JSON.stringify(data));  
    //         res.end();
    //     }
    try {
        if (req.url === "/products") {
            let response = await fetch('https://fakestoreapi.com/products')
            let data = await response.json()
            res.write(JSON.stringify(data))
            res.end()
        } else if (req.url === '/quotes') {
            let response = await fetch('https://dummyjson.com/quotes')
            let data = await response.json()
            res.write(JSON.stringify(data))
            res.end()
        } else if (req.url = '/posts') {
            let response = await fetch('https://dummyjson.com/posts')
            let data = await response.json()
            res.write(JSON.stringify(data))
            res.end()
        } else {
            res.write('Please Enter Correct Path')
            res.end()
        }

    } catch (error) {
        console.error("data failed to fetch:", error);
    }

});
let port = 3000;
server.listen(port, () => {
    console.log('server running....');
});