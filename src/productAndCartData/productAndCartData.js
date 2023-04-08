import { getShoppingCart } from "../utilites/falkeDB";

const productAndCartData = async() =>{
    const productsData = await fetch('product.json');
    const products = await productsData.json();

    const storedCart = getShoppingCart();
    const initialCart = [];

    for(const id in storedCart){
      const actualProduct = products.find(pd => pd.id === id)
      if(actualProduct){
        const quantity = storedCart[id];
        actualProduct.quantity = quantity;
        initialCart.push(actualProduct);
      }
    }

    return {products, initialCart};
}

export default productAndCartData;