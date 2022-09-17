import {
  Key
} from 'react'

export type Crypto = {
  id: Key | string
  image: string | undefined
  name: string
  symbol: string
  current_price: number
  high_24h: number
  low_24h: number
  price_change_percentage_24h: string | number
}
