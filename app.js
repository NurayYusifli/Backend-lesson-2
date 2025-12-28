const express = require('express');
const app = express();

const product = [
    { "name": "spone", "coast": 5, "number": 45, "id": 1 },
    { "name": "fork", "coast": 7, "number": 87, "id": 2 },
    { "name": "apple", "coast": 1, "number": 12, "id": 3 },
    { "name": "banana", "coast": 2, "number": 26, "id": 4 },
    { "name": "pineapple", "coast": 4, "number": 39, "id": 5 },
    { "name": "orange", "coast": 3, "number": 66, "id": 6 },
    { "name": "ball", "coast": 5, "number": 88, "id": 7 },
    { "name": "laptop", "coast": 5000, "number": 1, "id": 8 },
    { "name": "headphone", "coast": 90, "number": 96, "id": 9 },
    { "name": "phone", "coast": 2999, "number": 9, "id": 10 }
]


app.get('/', (req, res) => {
    res.json(product);
});

app.get('/product', (req, res) => {
    res.json(product);
    
});

app.get('/product/name', (req, res) => {
    const product_name = product.map(product => product.name)
    res.json(product_name)
})

app.get('/product/coast', (req, res) => {
    const product_coast = product.map(product => product.coast)
    res.json(product_coast)
})

app.get('/product/number', (req, res) => {
    const product_number = product.map(product => product.number)
    res.json(product_number)
})

app.get('/product/id', (req, res) => {
    const product_id = product.map(product => product.id)
    res.json(product_id)
})

app.get('/product/id/:id', (req, res) => {
    const product_id = Number(req.params.id)
    const products = product.find(a => a.id == product_id)
    if(products){
        // res.json(`Mehsul:${products}`) 
        res.send("Mehsul: " + JSON.stringify(products));  //bunu gpt dediii yoxsa object object verirdi ;( 
    }else{
        res.send('Mehsul tapılmadı! Müveqqeti naratlıq üçün üzür isteyirik ;(')
    }
})


app.listen(3000, () => {
    console.log('server isleyir');
})