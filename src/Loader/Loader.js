import { getStoreCart } from "../utilities/fakedb"

export const loadData = async () =>{
    const productsData = await fetch('products.json')
    const products = await productsData.json()
    // console.log(products)

    // get data from fake db
    const storedCart = getStoreCart()
    const initialCart = []
    for (const id in storedCart) {
        const addProducts = products.find(product => product.id === id)
        if (addProducts){
            addProducts.quantity = storedCart[id]
            initialCart.push(addProducts)

        }
        
    }
    // console.log(storedCart);
    return {products:products,initialCart:initialCart}
}