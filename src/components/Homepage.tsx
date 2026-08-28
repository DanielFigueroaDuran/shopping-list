import { LuShoppingBasket } from "react-icons/lu";

const Homepage = () => {
      return (
            <div className="border border-red-700 h-full w-full p-4 grid grid-cols-2 mg :grid-cols-1">
                  <section className="border border-amber-900 w-[50%] ">
                        <div className="flex items-center gap-3">
                              <LuShoppingBasket />
                              <h2>Mi lista de compras</h2>
                        </div>

                  </section>
                  <section className="border border-amber-900 w-full">
                        seccion2
                  </section>
            </div>
      )
}

export default Homepage