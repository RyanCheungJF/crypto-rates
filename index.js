import { http } from '@google-cloud/functions-framework'
import axios from 'axios'

const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'

http('dataPull', async (_, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, POST')
  res.set('Access-Control-Allow-Credentials', 'true')

  const req = await axios.get(API)
  if (req.status != 200) {
    res.status(404).send({ error: 'Could not pull data from CoinGecko' })
    return
  }
  const data = req.data
  const dataByPrice = [...data].sort(
    (x, y) => y.current_price - x.current_price
  )
  const dataByName = [...data].sort((x, y) => x.name.localeCompare(y.name))
  const dataByGain = [...data].sort(
    (x, y) => y.price_change_percentage_24h - x.price_change_percentage_24h
  )
  const dataByLoss = [...data].sort(
    (x, y) => x.price_change_percentage_24h - y.price_change_percentage_24h
  )
  res.status(200).send({
    default: data,
    price: dataByPrice,
    name: dataByName,
    gain: dataByGain,
    loss: dataByLoss,
  })
})
