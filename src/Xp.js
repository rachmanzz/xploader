'use strict'
const Request = require('request-promise')
const Saldo = 'https://xp.sindonesia.net/api/saldo.php'
const Harga = 'https://xp.sindonesia.net/api/harga.php'
const listHarga = 'https://xp.sindonesia.net/api/daftar_harga.php'
const Order = 'https://xp.sindonesia.net/api/order.php'
const Deposit = 'https://xp.sindonesia.net/api/deposit.php'
const checkDeposit = 'https://xp.sindonesia.net/api/cek_deposit.php'
class Xp {
  constructor(obj) {
    const setup = obj
    this.setup = function () {
      // id, key & api
      return setup
    }
    this.Option = function (uri, body) {
      const form = Object.assign({}, setup, body)
      return {
        method: 'POST',
        uri: uri,
        form: form
      }
    }
  }

  * balance () {
    const result = yield Request(this.Option(Saldo, {}))
    return JSON.parse(result)
  }

  * price (code) {
    const result = yield Request(this.Option(Harga, {
      kode: code
    }))
    return JSON.parse(result)
  }

  * pricelist () {
    const result = yield Request(this.Option(listHarga, {}))
    return JSON.parse(result)
  }

  * deposit (arr) {
    const setup = {
      metode: arr.payment,
      jumlah: arr.amount
    }
    if (typeof arr.origin !== 'undefined') setup.pengirim = arr.origin
    const result = yield Request(this.Option(Deposit, setup))
    return JSON.parse(result)
  }

  * checkdeposit (trx) {
    const result = yield Request(this.Option(checkDeposit, {trx: trx}))
    return JSON.parse(result)
  }

  * order (arr) {
    const setup = {
      url: encodeURI(arr.url),
      trx: arr.trx,
      kod: arr.code,
      isi: arr.to
    }
    if (typeof arr.origin !== 'undefined') setup.sms = arr.origin
    const result = yield Request(this.Option(Order, setup))
    return JSON.parse(result)
  }
}

module.exports = Xp
