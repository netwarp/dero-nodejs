const Daemon = require('./src/Daemon')
const Wallet = require('./src/Wallet')

const crypto = require('crypto')

function MakePaymentId() {
    return crypto.randomBytes(32).toString('hex')
}

const wallet = new Wallet('127.0.0.1', '30309')

//d.getheight().then(data => console.log(data))
//wallet.getaddress().then(data => console.log(data))
//wallet.getbalance().then(data => console.log(data))
//wallet.getheight().then(data => console.log(data))

wallet.transfer(1, 'dEToXZ99LNGgQxmhdi4whWT7nUinyj23Y6kr6hdughGQTKyq8fMbwYt1142TsJziKzdsTgscWyW1t3yPf7sbd8zg2puBKBmNxX', 6, MakePaymentId()).then(data => console.log(data))


//wallet.get_transfer_by_txid('eddc10d9c10a70a6a2538327bfa8b57f8faa29113d9ed55ae04306fcb695b6e4').then(data => console.log(data))
//wallet.split_integrated_address('dETom4Mu5yJ7t3BujwkWUj4DYACZNNByEL9vVbykjigkS6HmSxFfL9zeVwXU7uW3qnbGkrDwNoqgQFhBJH5KwjLN8YCyeRQGsq').then(data => console.log(data))
//wallet.query_key().then(data => console.log(data))
//wallet.get_transfers().then(data => console.log(data))

//wallet.make_integrated_address('')

//const d = new Daemon('127.0.0.1', '30306')

exports.Daemon = require('./src/Daemon')
exports.Wallet = require('./src/Wallet')
