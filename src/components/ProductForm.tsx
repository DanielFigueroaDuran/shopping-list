import { useProducts } from "@/hooks/useProducts";
import { useState, type SubmitEvent } from "react";
import { MdOutlineEuro } from "react-icons/md"
import { RiAddFill } from "react-icons/ri"

type Product = {
      id: number,
      name: string,
      price: number
};

const ProductForm = () => {
      const [nameProduct, setNameProduct] = useState("");
      const [price, setPrice] = useState("");
      const { dispatch } = useProducts();

      const handleSubmit2 = (event: SubmitEvent<HTMLFormElement>) => {
            event.preventDefault();

            if (!isValidProduct) {
                  return;
            }

            dispatch({
                  type: "add-product",
                  payload: {
                        id: Date.now(),
                        name: nameProduct.trim(),
                        price: Number(price),
                  },
            });

            // Clear the fields after adding the product
            setNameProduct("");
            setPrice("");

      };

      const isValidProduct =
            nameProduct.trim() !== "" &&
            price.trim() !== "" &&
            Number.isFinite(Number(price)) &&
            Number(price) > 0;

      return (
            <>
                  <div className="w-full shadow-2xl p-4 rounded-sm">
                        <h2 className="text-shadow-lg font-bold">Agregar Articulos</h2>
                        <form
                              onSubmit={handleSubmit2}
                              className="grid lg:grid-cols-2 gap-6 mt-4"
                        >
                              <div className="">
                                    <label htmlFor="product" className="text-sm font-semibold">
                                          Articulo
                                    </label>
                                    <div className="flex items-center gap-2 border bg-gray-100 border-gray-200 rounded-lg px-3 py-2 w-full">
                                          <RiAddFill className="text-green-600" />
                                          <input
                                                id="product"
                                                type="text"
                                                placeholder="Agregar articulos"
                                                className="outline-none w-full"
                                                value={nameProduct}
                                                onChange={(event) => setNameProduct(event.target.value)}
                                          />
                                    </div>
                              </div>
                              <div className="">
                                    <label htmlFor="price" className="text-sm font-semibold">
                                          Precio:
                                    </label>
                                    <div className="flex items-center gap-2 border bg-gray-100 border-gray-200 rounded-lg px-3 py-2 w-full">
                                          <MdOutlineEuro className="text-green-600" />
                                          <input
                                                id="price"
                                                type="number"
                                                min="0.01"
                                                step="0.01"
                                                placeholder="Ej. 25.00"
                                                className="outline-none w-full no-spinner"
                                                value={price}
                                                onChange={(event) => setPrice(event.target.value)}
                                          />
                                    </div>
                              </div>

                              <button
                                    type="submit"
                                    disabled={!isValidProduct}
                                    className={` px-3 py-2 rounded-lg
                                    ${isValidProduct
                                                ? "cursor-pointer text-white bg-green-500 hover:bg-green-700"
                                                : "bg-green-200 text-slate-400 cursor-not-allowed opacyty-40"}
                                          `}
                              >
                                    Agregar
                              </button>
                        </form >
                  </div>

                  {/* <div className="mt-6">
                        <h3 className="font-bold">Productos agregados</h3>

                        {products.length === 0 ? (
                              <p className="text-gray-500 mt-2">Todavía no hay productos.</p>
                        ) : (
                              <ul className="mt-2 space-y-2">
                                    {products.map((item) => (
                                          <li
                                                key={item.id}
                                                className="flex justify-between border-b py-2"
                                          >
                                                <span>{item.name}</span>
                                                <span>{item.price.toFixed(2)} €</span>
                                          </li>
                                    ))}
                              </ul>
                        )}
                  </div> */}
            </>
      )
}

export default ProductForm 