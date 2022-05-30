const 
    express = require('express'), 
    path = require('path'),
    PORT = process.env.PORT || 5000;

express()
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use('/api/', require('./api/'))
    .use(express.static(path.join(__dirname, 'build')))
    .get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))
    .listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))

 

