import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react"

export type Crypto = {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
}
