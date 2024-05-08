const express = require('express');
const Yitizi = require('yitizi');
const app = express();

app.get('/api/yitizi', (req, res) => {
    const name = req.query.name;  // 从查询参数中获取name
    var searchResults = Yitizi.get(name)
    res.json({ message: `${searchResults} ` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});