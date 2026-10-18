import { useState } from "react";

const AdminLayoutPrueba = () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
            <div className="min-h-screen bg-background font-main text-text">

                  {/* =========================
          HEADER MÓVIL
      ========================== */}
                  <header className="flex items-center justify-between border-b bg-white px-6 py-4 md:hidden">
                        <div className="text-xl font-bold text-primary">
                              MiLogo
                        </div>

                        <button
                              onClick={() => setIsOpen(!isOpen)}
                              className="text-text"
                              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                              aria-expanded={isOpen}
                        >
                              {isOpen ? (
                                    // X
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={2}
                                          stroke="currentColor"
                                          className="h-7 w-7"
                                    >
                                          <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                          />
                                    </svg>
                              ) : (
                                    // Hamburguesa
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={2}
                                          stroke="currentColor"
                                          className="h-7 w-7"
                                    >
                                          <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                          />
                                    </svg>
                              )}
                        </button>
                  </header>


                  {/* =========================
          CONTENEDOR PRINCIPAL
      ========================== */}
                  <div className="flex min-h-[calc(100vh-73px)] md:min-h-screen">


                        {/* =========================
            SIDEBAR
        ========================== */}
                        <aside
                              className={`
            fixed left-0  z-40 h-[calc(100vh-73px)] w-64
            border-r bg-white
            transition-transform duration-300 ease-in-out
            md:static md:block md:h-screen md:translate-x-0
            ${isOpen
                                          ? "translate-x-0"
                                          : "-translate-x-full"
                                    }
          `}
                        >
                              <div className="flex h-full flex-col">

                                    {/* Logo desktop */}
                                    <div className="hidden border-b px-6 py-6 md:block">
                                          <div className="text-xl font-bold text-primary">
                                                MiLogo
                                          </div>
                                    </div>

                                    {/* Menú */}
                                    <nav className="flex flex-col gap-2 p-4">

                                          <a
                                                href="#"
                                                onClick={() => setIsOpen(false)}
                                                className="rounded-lg px-4 py-3 transition-colors hover:bg-primary hover:text-white"
                                          >
                                                Inicio
                                          </a>

                                          <a
                                                href="#"
                                                onClick={() => setIsOpen(false)}
                                                className="rounded-lg px-4 py-3 transition-colors hover:bg-primary hover:text-white"
                                          >
                                                Usuarios
                                          </a>

                                          <a
                                                href="#"
                                                onClick={() => setIsOpen(false)}
                                                className="rounded-lg px-4 py-3 transition-colors hover:bg-primary hover:text-white"
                                          >
                                                Productos
                                          </a>

                                          <a
                                                href="#"
                                                onClick={() => setIsOpen(false)}
                                                className="rounded-lg px-4 py-3 transition-colors hover:bg-primary hover:text-white"
                                          >
                                                Configuración
                                          </a>

                                    </nav>

                                    {/* Parte inferior */}
                                    <div className="mt-auto border-t p-4">
                                          <button className="w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-red-50">
                                                Cerrar sesión
                                          </button>
                                    </div>

                              </div>
                        </aside>


                        {/* =========================
            CONTENIDO
        ========================== */}
                        <main className="flex-1 p-6 md:p-8">

                              <div className="mx-auto max-w-7xl">

                                    <h1 className="text-3xl font-bold text-primary">
                                          Dashboard
                                    </h1>

                                    <p className="mt-2 text-text-secondary">
                                          Bienvenido al panel de administración.
                                    </p>

                                    {/* Aquí irá el contenido */}
                                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                                          <div className="rounded-xl bg-white p-6 shadow-sm">
                                                <h2 className="font-semibold">
                                                      Usuarios
                                                </h2>

                                                <p className="mt-2 text-3xl font-bold text-primary">
                                                      125
                                                </p>
                                          </div>

                                          <div className="rounded-xl bg-white p-6 shadow-sm">
                                                <h2 className="font-semibold">
                                                      Productos
                                                </h2>

                                                <p className="mt-2 text-3xl font-bold text-primary">
                                                      48
                                                </p>
                                          </div>

                                          <div className="rounded-xl bg-white p-6 shadow-sm">
                                                <h2 className="font-semibold">
                                                      Ventas
                                                </h2>

                                                <p className="mt-2 text-3xl font-bold text-primary">
                                                      1.245 €
                                                </p>
                                          </div>

                                    </div>

                              </div>

                        </main>

                  </div>
            </div>
      );
}



export default AdminLayoutPrueba