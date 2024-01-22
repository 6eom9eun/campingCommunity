const express = require('express');
const path = require('path');
const app = express();
const { MongoClient } = require('mongodb')

require('dotenv').config()

let db
const url = process.env.DB_URL
new MongoClient(url).connect().then((client)=>{
    console.log('DB연결성공')
    db = client.db('camp')
}).catch((err)=>{
    console.log(err)
})

app.use(express.static(path.join(__dirname, 'fe/build')));

app.listen(process.env.PORT, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/fe/build/index.html'));
}) 

app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/fe/build/index.html'));
});