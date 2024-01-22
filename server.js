const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'react-project/build')));

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/fe/build/index.html'));
}) 