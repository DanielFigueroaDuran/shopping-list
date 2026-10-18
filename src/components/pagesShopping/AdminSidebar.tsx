import { useState } from "react"
import { BiCategory } from "react-icons/bi"
import { BsCart3 } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoIosList, IoMdClose } from "react-icons/io"
import { LuShoppingBasket } from "react-icons/lu"
import { MdHistory } from "react-icons/md"

const AdminSidebar = () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
            <nav className="relative bg-white flex flex-col gap-2">
                  <div className="hidden md:flex md:justify-between max-w-7xl items-center gap-2 px-6 py-4 text-shadow-lg font-bold">
                        <div className="flex items-center gap-3">
                              <LuShoppingBasket className="text-green-600 text-2xl" />
                              <h2 >Mi lista de compras</h2>
                        </div>
                        <div className="lg:hidden flex items-center gap-8">
                              <BsCart3 className="hidden md:block" />
                              {/* <div className="flex items-center gap-2">
                                    <div className="hidden md:block rounded-full bg-green-600 p-1">
                                          <FaUser className="hidden md:block text-white rounded-full" />
                                    </div>
                                    <span className="hidden md:block text-xs font-semibold text-shadow-lg">Usuario</span>
                              </div> */}
                        </div>
                  </div>
                  {/* Menú desktop */}
                  <ul className="hidden lg:flex flex-col gap-2">
                        <li className="flex items-center gap-3 hover:text-green-600 hover:bg-gray-100 hover:rounded-xs">
                              <IoIosList />
                              <a href="#">Lista</a>
                        </li>
                        <li className="flex items-center gap-3 hover:text-green-600 hover:bg-gray-100 hover:rounded-xs">
                              <BiCategory />
                              <a href="#">Categorias</a>
                        </li>
                        <li className="flex items-center gap-3 hover:text-green-600 hover:bg-gray-100 hover:rounded-xs">
                              <MdHistory />
                              <a href="#">Historial</a>
                        </li>
                  </ul>

                  {/* Mobile button */}
                  <div className="flex gap-5 items-center md:hidden">
                        <button
                              onClick={() => setIsOpen(!isOpen)}
                              className="lg:hidden flex gap-4 items-center"
                              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                              aria-expanded={isOpen}
                        >
                              {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
                        </button>
                        <span className="flex border border-red-400 w-full px-4 items-center gap-2 justify-between">
                              <h2 className="text-md font-semibold text-shadow-lg">Mi lista de compras</h2>
                              <div>
                                    <BsCart3 />
                              </div>
                        </span>
                  </div>

                  {/* Animated mobile menu */}
                  <div
                        className={`
                                  absolute left-0 top-full w-full bg-white shadow-md
                                  transition-all duration-300 ease-in-out md:hidden
                                  ${isOpen
                                    ? "translate-y-0 opacity-100"
                                    : "-translate-y-4 opacity-0 pointer-events-none"
                              }
                                  `}
                  >
                        <ul className="flex flex-col gap-4 px-6 py-5">
                              <li className="flex items-center gap-3 hover:text-green-600 hover:bg-gray-100 hover:rounded-xs">
                                    <IoIosList />
                                    <a href="#" onClick={() => setIsOpen(false)}>Lista</a>

                              </li>

                              <li className="flex items-center gap-3 hover:text-green-600 hover:bg-gray-100 hover:rounded-xs">
                                    <BiCategory />
                                    <a href="#" onClick={() => setIsOpen(false)}>Categorias</a>
                              </li>
                              <li className="flex items-center gap-3 hover:text-green-600 hover:bg-gray-100 hover:rounded-xs">
                                    <MdHistory />
                                    <a href="#" onClick={() => setIsOpen(false)}>Historial</a>
                              </li>
                        </ul>
                  </div>
            </nav >
      )
}

export default AdminSidebar