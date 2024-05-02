const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

//let adv_count = 231
let adv_count = 120

app.use(cors())

app.get('/solo_count', (req, res) => {
    res.json({adv_count})
})

app.post('/solo_count', (req, res) => {
    ++adv_count;
    res.json({adv_count})
})

app.post('/remove_solo_count', (req, res) => {
    --adv_count;
    res.json({adv_count})
})

app.listen(port, () => {
    console.log('Example app listening on port ' + port)
})