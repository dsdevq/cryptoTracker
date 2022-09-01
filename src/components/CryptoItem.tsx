import { useAppDispatch } from '../app/hooks'
import { Crypto, openModal } from '../features/crypto/cryptoSlice'

export const CryptoItem = ({ id, image, name, market_cap, price_change_percentage_24h, current_price, symbol, market_cap_rank }: Crypto) => {
  const dispatch = useAppDispatch()

  const handleOnClick = () => {
    dispatch(openModal(id))
  }

  return (
    <>
      <li className='flex py-2 gap-2 items-center border-b last:border-b font-medium relative'
      >
        {/* //! Open modal */}
        <label onClick={handleOnClick} htmlFor="my-modal-3" className="btn modal-button opacity-0 absolute w-full cursor-default p-0"></label>

        <p className='basis-6 shrink-0'>{market_cap_rank}</p>
        <img className='aspect-square w-12' src={image} alt={id} />
        <p className='basis-full'>
          {name}
        </p>
        <p className='basis-full hidden text-gray-500 sm:block'>{symbol.toUpperCase()}</p>
        <p className='basis-full'>${current_price.toLocaleString()}</p>
        <p className='basis-full font-bold'><span className={price_change_percentage_24h > 0 ? 'text-green-600 before:content-["▲"]' : 'text-red-600 before:content-["▼"]'}>{price_change_percentage_24h.toFixed(2)}%</span></p>
        <p className='basis-full hidden md:block'>${market_cap.toLocaleString()}</p>
      </li>
    </>
  )
}
