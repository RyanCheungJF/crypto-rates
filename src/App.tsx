import './App.css'
import { getCryptoData } from './data/dataPull'

const arr = await getCryptoData('hi')

const App = () => {
  return (
    <div className="container mx-auto px-8">
      <div>
        <h2 className="text-3xl py-8 font-semibold">Crypto Rates</h2>
      </div>
      <div>
        <table className="shadow-md rounded-md min-w-full">
          <thead className="text-left uppercase border-b-2 border-gray-200 bg-gray-100 text-gray-800">
            <th className="table-header">Currency</th>
            <th className="table-header">Price (USD)</th>
            <th className="table-header">24h High</th>
            <th className="table-header">24h Low</th>
            <th className="table-header">Gain/Loss</th>
          </thead>
          <tbody className="">
            {arr.map((currency) => (
              <tr>
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
                      {currency.price_change_percentage_24h}
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
      <button onClick={() => getCryptoData('hi')}>button test!</button>
    </div>
  )
}

export default App
