import { useProducts } from "@/hooks/useProducts"
import { useState } from "react";
import type { Products } from "@/types";
import DeleteModal from "./DeleteModal";
import ProductItems from "./ProductItems";

const ProductTable = () => {
      const [productToDelete, setProductToDelete] = useState<Products | null>(null);
      const { state, dispatch } = useProducts();

      const total = state.products.reduce((acc, product) => acc + product.price * product.quantity, 0);

      const handleCancelDelete = () => {
            setProductToDelete(null);
      };

      const handleConfirmDelete = () => {
            if (!productToDelete) return;

            dispatch({
                  type: "delete-product",
                  payload: productToDelete.id,
            });

            setProductToDelete(null);
      };

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

                                          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-center">
                                                Precio
                                          </th>

                                          <th className="w-24 p-3  text-sm font-semibold tracking-wide text-center">
                                                Cantidad
                                          </th>
                                          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-center">
                                                Eliminar
                                          </th>
                                          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-center">
                                                SubTotal
                                          </th>
                                    </tr>
                              </thead>

                              <tbody className="divide-y divide-gray-100">
                                    {state.products.map((product) => (
                                          <ProductItems
                                                key={product.id}
                                                product={product}
                                                setProductToDelete={setProductToDelete}
                                          />
                                    ))}
                              </tbody>
                              <tfoot className="border-2 border-gray-200">
                                    {/* Fila para Móvil (colSpan 3) */}
                                    <tr className="border-t-2 border-gray-300 md:hidden">
                                          <td colSpan={3} className="p-4 text-right font-semibold text-gray-700">
                                                Total:
                                          </td>
                                          <td className="p-4 text-right font-black text-lg">
                                                {total.toFixed(2)} €
                                          </td>
                                    </tr>

                                    {/* Fila para Escritorio / Desktop (colSpan 4) */}
                                    <tr className="border-t-2 border-gray-300 hidden md:table-row">
                                          <td colSpan={4} className="p-4 text-right font-semibold text-gray-700">
                                                Total:
                                          </td>
                                          <td className="p-4 text-right font-black text-lg">
                                                {total.toFixed(2)} €
                                          </td>
                                    </tr>
                                    {/* <tr className="border-t-2 border-gray-300 ">
                                          <td colSpan={3} className="p-4 text-right font-semibold text-gray-700">
                                                Total:
                                          </td>

                                          <td className="p-4 text-right font-black text-lg">
                                                {total.toFixed(2)} €
                                          </td>
                                    </tr> */}
                              </tfoot>
                        </table>
                        {productToDelete && (
                              <DeleteModal
                                    productName={productToDelete.name}
                                    onCancel={handleCancelDelete}
                                    onConfirm={handleConfirmDelete}
                              />
                        )}
                  </div>
            </div>
      )
}

export default ProductTable
