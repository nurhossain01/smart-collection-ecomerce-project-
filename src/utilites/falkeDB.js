// use local storage to manage cart data
const addToDb = id =>{
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if(!quantity){
    shoppingCart[id] = 1;
  }
  else{
    const newQuantity =  quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

// remove shopping cart from the local storage
const removeFromDb = id =>{
  const shoppingCart = getShoppingCart();
  if(id in shoppingCart){
    delete shoppingCart[id];
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
  }
};

// get shopping cart
const getShoppingCart = () =>{
  let shoppingCart = {};

  // get the shopping cart from local storage;
  const storedCart = localStorage.getItem('shopping-cart');
  if(storedCart){
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
}

// shopping items all clear from the local storage
const clearAllShoppingCart = () =>{
  localStorage.removeItem('shopping-cart');
}

export {
  addToDb, 
  removeFromDb, 
  getShoppingCart,
  clearAllShoppingCart
}