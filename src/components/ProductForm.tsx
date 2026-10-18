import { useState } from "react";
import { MdOutlineEuro } from "react-icons/md"
import { RiAddFill } from "react-icons/ri"

type Product = {
      id: number,
      name: string,
      price: number
};

const ProductForm = () => {
      const [product, setProduct] = useState("");
      const [price, setPrice] = useState("");
      const [products, setProducts] = useState<Product[]>([]);

      console.log(products);

      const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
            event.preventDefault();

            if (!product.trim() || price === "" || +(price) <= 0) {
                  // return alert("Por favor, complete todos los campos correctamente.");
                  return;
            };

            const newProduct: Product = {
                  id: Date.now(),
                  name: product.trim(),
                  price: +(price)
            };

            // Add the new product to the state
            setProducts((prevProducts) => [...prevProducts, newProduct]);

            // Clear the form
            setProduct("");
            setPrice("");
      };
      const isValidProduct = !product.trim() || price === "" || +(price) <= 0;

      return (
            <div className="w-full h-full shadow-2xl p-4 rounded-sm">
                  <h2 className="text-shadow-lg font-bold">Agregar Articulos</h2>
                  <form
                        onSubmit={handleSubmit}
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
                                          value={product}
                                          onChange={(event) => setProduct(event.target.value)}
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
                              className={` px-3 py-2 rounded-lg
                                    ${isValidProduct
                                          ? "bg-green-200 text-slate-400 cursor-not-allowed opacyty-40"
                                          : "cursor-pointer text-white bg-green-500 hover:bg-green-700"}
                                    `}
                        >
                              Agregar
                        </button>
                  </form >
            </div>
      )
}

export default ProductForm 