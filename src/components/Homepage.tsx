import { LuShoppingBasket } from "react-icons/lu";
import { IoIosList } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { MdHistory } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import ProductTable from "./ProductTable";
import { useState } from "react";

type Order = {
      id: number,
      details: string,
      status: "Delivered" | "Shipped" | "Canceled",
      date: string,
      total: number
};


const Homepage = () => {
      const [orders, setOrders] = useState<Order[]>([
            {
                  id: 10003,
                  details: "New product",
                  status: "Delivered",
                  date: "17/10/2026",
                  total: 150,
            },
      ]);
      return (
            <div className="border border-red-700 h-full w-full  grid grid-cols-1 lg:grid-cols-[30%_70%] justify-items-start">
                  <aside className="lg:border-r lg:border-gray-400 p-8">
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
                  <main className="flex flex-col gap-5 w-full h-full p-8">
                        <div className="flex justify-between  items-center p-4  w-full text-shadow-lg font-bold ">
                              <h2>Lista de Compras</h2>
                              <div className="flex items-center gap-8">
                                    <BsCart3 />
                                    <div className="flex items-center gap-2">
                                          <div className="rounded-full bg-green-600 p-1">
                                                <FaUser className="text-white rounded-full" />
                                          </div>
                                          <span className="text-xs font-semibold text-shadow-lg">Usuario</span>
                                    </div>
                              </div>
                        </div>
                        <div className="flex items-center gap-2 border bg-gray-100 border-gray-200 rounded-lg px-3 py-2 w-full">
                              <RiAddFill className="text-green-600" />
                              <input
                                    type="text"
                                    placeholder="Agregar produtos"
                                    className="outline-none w-full"
                              />
                        </div>

                        {orders.length === 0 ? "" : <ProductTable orders={orders} />}
                  </main>

            </div>
      )
}

export default Homepage