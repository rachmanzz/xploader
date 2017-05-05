# Documentation #

How to use Xploader module

### Setup Instance ###
#### Use adonisjs

    const xp = use('xploader') // if package is not npm module: use('/path/to/xploader/src/Xp.js')
    const Xp = new xp({
        id: 'your number id', // number only
        key: 'your key xp',
        api: 'your api xp'
      })

#### Not adonisjs framework
make sure your application support yield

    const xp = require('xploader') // if package is not npm module: require('/path/to/xploader/src/Xp.js')
    const Xp = new xp({
        id: 'your number id', // number only
        key: 'your key xp',
        api: 'your api xp'
      })

### Check Balance ###

    const result = yield Xp.saldo()

### Check Price of Product ###

    const result = yield Xp.harga(code) // code is code of Product

### Check list of price ###

    const result = yield Xp.listharga()


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

### This optional method ###
#### adonisjs

    const result = Xp.response('adonis:req', request) // request is adonisjs request return
    result.res // response.send(result.res) you can send to validate callback

#### not adonisjs framework

    const result = Xp.response('', {status: 'sukses'}) // request is adonisjs request return
    result // you can send result to view response to validate callback


### result return ###

Result return you can check at https://xp.sindonesia.net/api.php

### Module ###

Work if not any change of transaction method at https://xp.sindonesia.net/api.php
