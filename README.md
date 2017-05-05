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


### Check list of price ###

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
