
const ProductTable = () => {
      return (
            <>
                  <div className="p-5 h-screen bg-gray-100 rounded-lg">
                        <h2 className="text-xl mb-2">Your orders</h2>
                        <div className="overflow-auto rounded-lg shadow">
                              <table className="w-full">
                                    <thead className=" bg-gray-50 border-b-2 border-gray-200">
                                          <tr>
                                                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Details</th>
                                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">status</th>
                                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Total</th>
                                          </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-100">
                                          <tr className="bg-white">
                                                <td className="p-3 text-sm text-gray-700">
                                                      <a href="#" className="font-bold tect-blue-500 hover:underline">10001</a>
                                                </td>
                                                <td className="p-3 text-sm text-gray-700">Kring New Fit office</td>
                                                <td className="p-3 text-sm text-gray-700">
                                                      <span className="p-1.5 text-xs font-medium uppercase tracking-wide text-green-800 bg-green-200 rounded-lg opacity-50">
                                                            Delivered
                                                      </span>
                                                </td>
                                                <td className="p-3 text-sm text-gray-700">16/10/2026</td>
                                                <td className="p-3 text-sm text-gray-700">$200.00</td>
                                          </tr>
                                          <tr className="bg-gray-20">
                                                <td className="p-3 text-sm text-gray-700">
                                                      <a href="#" className="font-bold tect-blue-500 hover:underline">10002</a>
                                                </td>
                                                <td className="p-3 text-sm text-gray-700">Kring New Fit office</td>
                                                <td className="p-3 text-sm text-gray-700">
                                                      <span className="p-1.5 text-xs font-medium uppercase tracking-wide text-yellow-800 bg-yellow-200 rounded-lg opacity-50">Shipped</span>
                                                </td>
                                                <td className="p-3 text-sm text-gray-700">16/10/2026</td>
                                                <td className="p-3 text-sm text-gray-700">$200.00</td>
                                          </tr>
                                          <tr className="bg-white">
                                                <td className="p-3 text-sm text-gray-700">
                                                      <a href="#" className="font-bold tect-blue-500 hover:underline">10003</a>
                                                </td>
                                                <td className="p-3 text-sm text-gray-700">Kring New Fit office</td>
                                                <td className="p-3 text-sm text-gray-700">
                                                      <span className="p-1.5 text-xs font-medium uppercase tracking-wide text-gray-800 bg-gray-200 rounded-lg opacity-50">
                                                            Canceled
                                                      </span>
                                                </td>
                                                <td className="p-3 text-sm text-gray-700">16/10/2026</td>
                                                <td className="p-3 text-sm text-gray-700">$200.00</td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>

                  </div>

            </>
      )
}

export default ProductTable