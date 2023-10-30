import {useState} from "react"
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () =>{

  const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart;}>({});


  const onProductCountChange = ({count,product}: {count: number;product: Product;}) => {

    setShoppingCart( oldShoppingInCard => {
      const productInCart: ProductInCart = oldShoppingInCard[product.id] || {...product, count:0}

      if(Math.max(productInCart.count + count, 0) > 0){
        productInCart.count += count
        return {
          ...oldShoppingInCard,
          [productInCart.id] : productInCart
        }
      }
      const { [product.id]: toDelete, ...rest } = oldShoppingInCard;
      return {...rest}

    })
  };

  return {shoppingCart, onProductCountChange}

}