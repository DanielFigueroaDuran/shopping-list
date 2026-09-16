import { MdOutlineEuro } from "react-icons/md"
import { RiAddFill } from "react-icons/ri"

const ProductForm = () => {
      return (
            <div className="w-full h-full shadow-2xl p-4 rounded-sm">
                  <h2 className="text-shadow-lg font-bold">Agregar Articulos</h2>
                  <form className="grid lg:grid-cols-2 gap-6 mt-4">
                        <div className="">
                              <label htmlFor="" className="text-sm font-semibold">
                                    Articulo
                              </label>
                              <div className="flex items-center gap-2 border bg-gray-100 border-gray-200 rounded-lg px-3 py-2 w-full">
                                    <RiAddFill className="text-green-600" />
                                    <input
                                          type="text"
                                          placeholder="Agregar articulos"
                                          className="outline-none w-full"
                                    />
                              </div>
                        </div>
                        <div className="">
                              <label htmlFor="" className="text-sm font-semibold">
                                    Precio:
                              </label>
                              <div className="flex items-center gap-2 border bg-gray-100 border-gray-200 rounded-lg px-3 py-2 w-full">
                                    <MdOutlineEuro className="text-green-600" />
                                    <input
                                          type="number"
                                          placeholder="Ej. 25.00"
                                          className="outline-none w-full"
                                    />
                              </div>
                        </div>
                        <div className="grid lg:grid-cols-2  gap-6">
                              <button className="flex text-white cursor-pointer items-center justify-center gap-1 border bg-green-500 border-gray-200 rounded-lg px-3 py-2 ">
                                    <RiAddFill className="text-white" />
                                    Agregar
                              </button>
                              <button className="flex items-center cursor-pointer justify-center gap-2 border  border-gray-200 rounded-lg px-3 py-2">
                                    Cancelar
                              </button>
                        </div>

                  </form>
            </div>
      )
}

export default ProductForm