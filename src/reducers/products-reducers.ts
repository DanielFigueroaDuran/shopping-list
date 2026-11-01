import type { Products } from "@/types";

export type ProductActions =
      {
            type: "add-product";
            payload: Products
      } |
      {
            type: "delete-product";
            payload: number;
      } |
      {
            type: "update-quantity";
            payload: {
                  id: number;
                  quantity: number;
            };
      };

export type ProductState = {
      products: Products[];
};

export const initialState: ProductState = {
      products: [],

};

export const productsReducer = (
      state: ProductState = initialState,
      action: ProductActions) => {
      switch (action.type) {
            case "add-product":
                  return {
                        ...state,
                        products: [...state.products, action.payload]
                  };
            case "delete-product":
                  return {
                        state,
                        products: state.products.filter(
                              (product) => product.id !== action.payload
                        ),
                  };
            case "update-quantity":
                  return {
                        ...state,
                        products: state.products.map((product) =>
                              product.id === action.payload.id
                                    ? { ...product, quantity: action.payload.quantity }
                                    : product
                        ),
                  };

            default:
                  return state;
      };
};