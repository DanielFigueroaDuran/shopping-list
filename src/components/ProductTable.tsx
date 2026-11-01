import { useProducts } from "@/hooks/useProducts"
import Counter from "./Counter"

type Order = {
      id: number
      details: string
      date: string
      total: number
}

// type ProductTableProps = {
//       orders: Order[]
// }

const ProductTable = () => {
      const { state } = useProducts();

      return (
            // <div className="mt-6">
            //       <h3 className="font-bold"> Productos Agregados</h3>
            //       <ul className="mt-2 space-y-2">
            //             {state.products.map(product => (
            //                   <li
            //                         key={product.id}
            //                         className="flex justify-between border-b py-2"
            //                   >
            //                         <span>
            //                               {product.name}
            //                         </span>
            //                         <span>{product.price} €</span>
            //                   </li>
            //             ))
            //             }
            //       </ul>
            // </div>
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

                                          <th className="w-24 p-3  text-sm font-semibold tracking-wide text-left">
                                                Cantidad
                                          </th>

                                          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                                                Total
                                          </th>
                                    </tr>
                              </thead>

                              <tbody className="divide-y divide-gray-100">
                                    {state.products.map((product) => (
                                          <tr
                                                key={product.id}
                                          >
                                                <td className="p-3 text-sm text-gray-700">
                                                      <a
                                                            href="#"
                                                            className="font-bold text-blue-500 hover:underline"
                                                      >
                                                            {product.id}
                                                      </a>
                                                </td>

                                                <td className="p-3 text-sm text-gray-700">
                                                      {product.name}
                                                </td>

                                                <td className="p-3 text-sm text-gray-700">
                                                      <span className="p-2">
                                                            {product.price.toFixed(2)} €
                                                      </span>
                                                </td>

                                                <td className="p-3 text-sm text-gray-700">
                                                      <span className="">
                                                            <Counter />
                                                      </span>
                                                </td>

                                                <td className="p-3 text-sm text-gray-700">
                                                      {product.price.toFixed(2)} €
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
