import { LuShoppingBasket } from "react-icons/lu";
import { IoIosList } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { MdHistory } from "react-icons/md";

const Homepage = () => {
      return (
            <div className="border border-red-700 h-full w-full p-6 grid grid-cols-1 lg:grid-cols-[30%_70%] justify-items-start">
                  <aside className="">
                        <div className="flex flex-col gap-4">
                              <div className="flex gap-3 items-center text-shadow-lg font-bold">
                                    <LuShoppingBasket className="text-green-600 text-2xl" />
                                    <h2>Mi lista de compras</h2>
                              </div>
                              <nav>
                                    <ul className="space-y-2">
                                          <li className="flex items-center gap-2 hover:text-green-600 hover:bg-gray-100 hover:rounded-xs">
                                                <IoIosList className="" />
                                                <a href="#">Lista</a>
                                          </li>
                                          <li className="flex items-center gap-2 hover:text-green-600 hover:bg-gray-100 hover:rounded-xs">
                                                <BiCategory />
                                                <a href="#">Categorias</a>
                                          </li>
                                          <li className="flex items-center gap-2 hover:text-green-600 hover:bg-gray-100 hover:rounded-xs">
                                                <MdHistory />
                                                <a href="#">Historial</a>
                                          </li>
                                    </ul>
                              </nav>
                        </div>
                  </aside>
                  <main className="border border-amber-900 w-full text-shadow-lg font-bold">
                        <h2>Lista de Compras</h2>
                  </main>
            </div>
      )
}

export default Homepage