import { Crypto } from '../features/crypto/cryptoSlice'

export const CryptoItem = ({ id, image, name, market_cap, price_change_percentage_24h, current_price, symbol, market_cap_rank }: Crypto) => {
  return (
    <li className='flex py-2 gap-2 items-center border-b last:border-b font-medium'>
      <p className='basis-6 shrink-0'>{market_cap_rank}</p>
      <img className='aspect-square w-12' src={image} alt={id} />
      <p className='basis-full '>{name}</p>
      <p className='basis-full text-gray-500'>{symbol.toUpperCase()}</p>
      <p className='basis-full'>${current_price.toLocaleString()}</p>
      <p className='basis-full font-bold'><span className={price_change_percentage_24h > 0 ? 'text-green-600 before:content-["▲"]' : 'text-red-600 before:content-["▼"]'}>{price_change_percentage_24h.toFixed(2)}%</span></p>
      <p className='basis-full hidden md:block'>${market_cap.toLocaleString()}</p>
    </li>
  )
}
