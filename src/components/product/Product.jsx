import React from "react"
import "./product.css"
import { ProductCart } from "./ProductCart"
import { product } from "../../redux/storage"

export const Product = () => {
  return (
    <>
      <section className="product">
        <div className="container grid3">
          {product.map((item) => (
            <div key={item.id}>
              <ProductCart
                id={item.id}
                cover={item.cover}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
