'use strict'
const Request = use('request-promise')
const Saldo = 'https://xp.sindonesia.net/api/saldo.php'
const Harga = 'https://xp.sindonesia.net/api/harga.php'
const listHarga = 'https://xp.sindonesia.net/api/daftar_harga.php'
const Order = 'https://xp.sindonesia.net/api/order.php'
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

  * saldo () {
    const result = yield Request(this.Option(Saldo, {}))
    return JSON.parse(result)
  }

  * harga (code) {
    const result = yield Request(this.Option(Harga, {
      kode: code
    }))
    return JSON.parse(result)
  }

  * listharga () {
    const result = yield Request(this.Option(listHarga, {}))
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

  response (arrg, req) {
    if ('adonis:req' === arrg) {
      if (req.input('status') === 'sukses') {
        return {
          trx: req.input('trx'),
          code: req.input('kod')
          to: req.input('isi'),
          sn: req.input('sn'),
          res: 'sukses*ok*'
        }
      } else {
        return {trx: req.input('trx'), to: req.input('isi'), res: 'gagal*ok*'}
      }
    } else {
      if (req.status === 'sukses') {
        return 'sukses*ok*'
      } else {
        return 'gagal*ok*'
      }
    }
  }
}

module.exports = Xp
