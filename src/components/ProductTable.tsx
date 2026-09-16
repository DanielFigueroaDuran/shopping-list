
type Order = {
      id: number
      details: string
      status: "Delivered" | "Shipped" | "Canceled"
      date: string
      total: number
}

type ProductTableProps = {
      orders: Order[]
}

const ProductTable = ({ orders }: ProductTableProps) => {
      return (
            <div className="h-full bg-gray-100 p-3 sm:p-5 rounded-lg">
                  <h2 className="text-xl mb-2">Articulos</h2>

                  <div className="w-full overflow-x-auto rounded-lg shadow">
                        <table className="w-full mon-w-[600px]">
                              <thead className="bg-gray-50 border-b-2 border-gray-200">
                                    <tr>
                                          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                                                Imagen
                                          </th>

                                          <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Articulo
                                          </th>

                                          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                                                Precio
                                          </th>

                                          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                                                Cantidad
                                          </th>

                                          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                                                Total
                                          </th>
                                    </tr>
                              </thead>

                              <tbody className="divide-y divide-gray-100">
                                    {orders.map((order, index) => (
                                          <tr
                                                key={order.id}
                                                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                          >
                                                <td className="p-3 text-sm text-gray-700">
                                                      <a
                                                            href="#"
                                                            className="font-bold text-blue-500 hover:underline"
                                                      >
                                                            {order.id}
                                                      </a>
                                                </td>

                                                <td className="p-3 text-sm text-gray-700">
                                                      {order.details}
                                                </td>

                                                <td className="p-3 text-sm text-gray-700">
                                                      <span
                                                            className={`p-1.5 text-xs font-medium uppercase tracking-wide rounded-lg opacity-70 ${order.status === "Delivered"
                                                                  ? "text-green-800 bg-green-200"
                                                                  : order.status === "Shipped"
                                                                        ? "text-yellow-800 bg-yellow-200"
                                                                        : "text-gray-800 bg-gray-200"
                                                                  }`}
                                                      >
                                                            {order.status}
                                                      </span>
                                                </td>

                                                <td className="p-3 text-sm text-gray-700">
                                                      {order.date}
                                                </td>

                                                <td className="p-3 text-sm text-gray-700">
                                                      ${order.total.toFixed(2)}
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </div>
      )
}

export default ProductTable
