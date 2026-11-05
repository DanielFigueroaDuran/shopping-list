import type { Products } from "@/types";
import Counter from "./Counter"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useProducts } from "@/hooks/useProducts";

type ProductItemsProps = {
      product: Products;
      key: number;
      setProductToDelete: (product: Products | null) => void
};

const ProductItems = ({ product, setProductToDelete }: ProductItemsProps) => {
      const { dispatch } = useProducts();

      return (
            <tr
                  key={product.id}
                  className="border-b border-gray-200"
            >
                  <td className="p-3 text-sm text-gray-700 text-center">
                        <span>agregar</span>
                  </td>

                  <td className="p-3 text-sm text-gray-700">
                        {product.name}
                  </td>

                  <td className="p-3 text-sm text-gray-700 text-center">
                        <span className="p-2">
                              {product.price.toFixed(2)} €
                        </span>
                  </td>

                  <td className="p-3 text-sm text-gray-700 text-center">
                        <span className="">
                              <Counter
                                    quantity={product.quantity}
                                    onChange={(quantity) => dispatch({
                                          type: "update-quantity",
                                          payload: {
                                                id: product.id,
                                                quantity,
                                          },
                                    })
                                    }
                                    onDeleteRequest={() => setProductToDelete(product)}

                              />
                        </span>
                  </td>

                  <td className="flex items-center justify-center p-3 text-sm text-gray-700 text-center">
                        <span className="p-2">
                              <RiDeleteBin6Line
                                    className="cursor-pointer w-5 h-5 text-red-800"
                                    onClick={() => setProductToDelete(product)}
                              />
                        </span>
                  </td>

                  <td className="p-3 text-sm text-gray-700 text-center">
                        {(product.price * product.quantity).toFixed(2)} €
                  </td>
            </tr>
      )
}

export default ProductItems