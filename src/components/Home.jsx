import React from "react"
import { Category } from "./category/Category"
import { Order } from "./hero/Order"
import { Slider } from "./hero/Slider"
import { Product } from "./product/Product"

export const Home = () => {
  return (
    <>
      <Slider />
      <Order />
      <Category />
      <Product />
    </>
  )
}
