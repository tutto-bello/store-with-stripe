// coffe price_1MOZt6CETHr9JijnYN0JeTa7
// sunglasses price_1MOZuQCETHr9JijnQGhM3Fyo
// camera price_1MOZvOCETHr9JijnJYotG7jS

const productsArray = [
  {
    id: "price_1MOZt6CETHr9JijnYN0JeTa7",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1MOZuQCETHr9JijnQGhM3Fyo",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "price_1MOZvOCETHr9JijnJYotG7jS",
    title: "Camera",
    price: 39.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
