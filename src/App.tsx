import { useEffect, useState } from 'react'
import './App.css'
import { getCryptoData } from './data/dataPull'

const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
const arr = await getCryptoData(API)

const App = () => {
  const [filteredArray, setFilteredArray] = useState(arr)

  useEffect(() => {}, [filteredArray])

  const changeSelectOption = (value: string) => {
    if (value == 'default') {
      const sortedArr = [...arr]
      setFilteredArray(sortedArr)
    } else if (value == 'price') {
      const sortedArr = [...arr].sort(
        (x: { current_price: number }, y: { current_price: number }) =>
          y.current_price - x.current_price
      )
      setFilteredArray(sortedArr)
    } else if (value == 'name') {
      const sortedArr = [...arr].sort((x, y) => x.name.localeCompare(y.name))
      setFilteredArray(sortedArr)
    } else if (value == 'gain') {
      const sortedArr = [...arr].sort(
        (
          x: { price_change_percentage_24h: number },
          y: { price_change_percentage_24h: number }
        ) => y.price_change_percentage_24h - x.price_change_percentage_24h
      )
      setFilteredArray(sortedArr)
    } else if (value == 'loss') {
      const sortedArr = [...arr].sort(
        (
          x: { price_change_percentage_24h: number },
          y: { price_change_percentage_24h: number }
        ) => x.price_change_percentage_24h - y.price_change_percentage_24h
      )
      setFilteredArray(sortedArr)
    } else {
      throw Error('unsorted')
    }
  }

  return (
    <div className="page-container">
      <div>
        <h2 className="page-title">Crypto Rates</h2>
      </div>
      <div className="select-container">
        <h2 className="select-title">Sort By:</h2>
        <select
          className="select-component"
          onChange={(e) => changeSelectOption(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
          <option value="gain">Top Gainers</option>
          <option value="loss">Top Losers</option>
        </select>
      </div>
      <div>
        <table className="table-container">
          <thead className="table-header-container">
            <tr>
              <th className="table-header">Currency</th>
              <th className="table-header">Price (USD)</th>
              <th className="table-header">24h High</th>
              <th className="table-header">24h Low</th>
              <th className="table-header">Gain/Loss</th>
            </tr>
          </thead>
          <tbody className="">
            {filteredArray.map((currency) => (
              <tr key={currency.id}>
                <td className="table-record">
                  <div className="flex">
                    <img className="table-image" src={currency.image} />
                    <div>
                      <p className="currency-title">{currency.name}</p>
                      <p className="currency-symbol">{currency.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="table-record">
                  <p className="currency-price">{currency.current_price}</p>
                </td>
                <td className="table-record">
                  <p className="currency-price">{currency.high_24h}</p>
                </td>
                <td className="table-record">
                  <p className="currency-price">{currency.low_24h}</p>
                </td>
                <td className="table-record">
                  <div className="flex">
                    <p className="currency-price basis-1/2">
                      {currency.price_change_percentage_24h + '%'}
                    </p>
                    <p
                      className={
                        currency.price_change_percentage_24h >= 0
                          ? 'currency-gain'
                          : 'currency-loss'
                      }
                    >
                      {currency.price_change_percentage_24h >= 0
                        ? 'Gain'
                        : 'Loss'}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
