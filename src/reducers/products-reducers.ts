import type { Products } from "@/types";

export type ProductActions =
      { type: "add-product"; payload: Products }

type ProductState = {
      products: Products[];
};

export const initialState: ProductState = {
      products: [],
};

export const productsReducer = (
      state: ProductState = initialState,
      action: ProductActions) => {

      if (action.type === "add-product") {
            return {
                  ...state,
                  products: [...state.products, action.payload]
            };
      };

      return state;
};