import React, { createContext, useReducer, type Dispatch } from "react";
import { productsReducer, initialState, type ProductActions, type ProductState } from "@/reducers/products-reducers";

type ProductsContextProps = {
      state: ProductState,
      dispatch: Dispatch<ProductActions>
};

type ProductsProviderProps = {
      children: React.ReactNode
};

export const ProductsContext = createContext<ProductsContextProps>(null!);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {

      const [state, dispatch] = useReducer(productsReducer, initialState);

      return (
            <ProductsContext.Provider value={{ state, dispatch }}>
                  {children}
            </ProductsContext.Provider>
      )
};