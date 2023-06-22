import { getShoppingCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  //get products
  const productsData = await fetch("http://localhost:5000/users");
  const products = await productsData.json();
  //get cart
  const savedCart = getShoppingCart();
  const initialCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }

  return { products: products, initialCart: initialCart };
};
