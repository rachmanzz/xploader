# Documentation #

How to use Xploader module

## Install ##

    npm install rachmanzz/xploader

### Setup Instance ###

    const xp = require('xploader')
    const Xp = new xp({
        id: 'your number id', // number only
        key: 'your key xp',
        api: 'your api xp'
      })

### Check Balance ###

    const result = yield Xp.balance()

### Check Price of Product ###

    const result = yield Xp.price(code) // code is code of Product

### Check list of price ###

    const result = yield Xp.pricelist()


### Deposit ###

    const result = yield Xp.deposit({
        payment: 'your payment method', // bitcoin, dogecoin, litecoin, bca, bni, bri, mandiri, indosat, telkomsel, xlaxiata
        amount: 'amount of deposit',
        origin: 'if needed, setup if phone load transfer/transfer pulsa' // origin is number of phone
      })


### check deposit status ###      

    const result = yield Xp.checkdeposit(trx) // trx your transaction id of deposit

### order Product ###

    const result = yield Xp.order({
        url: 'your domain callback url',
        trx: 'unique trx id',
        code: 'Product code',
        to: 'number phone to load a balance',
        origin: 'origin number phone, if need to message if success'
      })


Result return you can check at https://xp.sindonesia.net/api.php

### Module ###

Work if not any change of transaction method at https://xp.sindonesia.net/api.php
