export interface ProductProps {
  id?: string;
  name: string;
  quantity: number | null;
  code: string;
  price: number | null;
  company: string;
}

export const initialState = {
  theme: "light",
  products: [],
  product: {
    id: "",
    name: "",
    quantity: 0,
    code: "",
    price: 0,
    company: "",
  },
};
