const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/students', require('./api/student'));

app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`));
