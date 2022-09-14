import { useEffect } from 'react'
import './App.css'
import { getCryptoData } from './data/dataPull'

const arr = await getCryptoData('hi')

const App = () => {
  return (
    <div className="container mx-auto px-8 border-2 border-rose-500">
      <div>
        <h2 className="text-3xl py-8 font-semibold">Crypto Rates</h2>
      </div>
      <div>
        <table className="shadow-md rounded-md min-w-full">
          <thead className="text-left uppercase border-b-2 border-gray-200 bg-gray-100 text-gray-800">
            <th className="table-header">Currency</th>
            <th className="table-header">Currency</th>
            <th className="table-header">Currency</th>
          </thead>
          <tbody className="">
            {arr.map((currency) => (
              <tr>
                <td className="table-record">
                  <div className="flex">
                    <img
                      className="rounded-full w-10 h-10"
                      src={currency.image}
                    />
                    <div>
                      <p className="pl-3 text-base font-semibold">
                        {currency.name}
                      </p>
                      <p className="uppercase pl-3">{currency.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="table-record">
                  <p>{currency.current_price}</p>
                </td>
                <td className="table-record">
                  <p>17</p>
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
