import './App.css'

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
            <tr>
              <td className="table-record">
                <p>Ryan</p>
              </td>
              <td className="table-record">
                <p>Cheung</p>
              </td>
              <td className="table-record">
                <p>17</p>
              </td>
            </tr>
            <tr>
              <td className="table-record">
                <p>Noir</p>
              </td>
              <td className="table-record">
                <p>Blanc</p>
              </td>
              <td className="table-record">
                <p>14</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
