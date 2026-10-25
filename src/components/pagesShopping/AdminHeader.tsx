import ProductForm from "../ProductForm"
//import ProductTable  from "../ProductTable"
import { BsCart3 } from "react-icons/bs"
import { useProducts } from "@/hooks/useProducts";
import ProductTable from "../ProductTable";
//import { FaUser } from "react-icons/fa"

const AdminHeader = () => {
      const { state } = useProducts();

      const isValidProduct = state.products.length > 0;

      console.log(state.products);

      return (
            <main className="flex flex-col w-full min-h-full p-4 border border-gray-400">
                  <div className="flex justify-between items-center p-4 w-full text-shadow-lg font-bold ">
                        <h2 className="hidden lg:block">Lista de Compras</h2>
                        <div className="flex items-center gap-8">
                              <BsCart3 className="hidden lg:block" />
                              {/* <div className="flex items-center gap-2">
                                    <div className="hidden lg:block rounded-full bg-green-600 p-1">
                                          <FaUser className="hidden lg:block text-white rounded-full" />
                                    </div>
                                    <span className="hidden lg:block text-xs font-semibold text-shadow-lg">Usuario</span>
                              </div> */}
                        </div>
                  </div>

                  <ProductForm />

                  <div className="shadow-2xl rounded-sm mt-5 ">
                        {isValidProduct ? <ProductTable /> : ' No hay Articulos a la lista de Compras'}
                  </div>
            </main>
      )
}

export default AdminHeader