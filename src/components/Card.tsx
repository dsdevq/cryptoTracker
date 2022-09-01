import { useAppDispatch, useAppSelector } from "../app/hooks"
import { openModal, selectModal } from "../features/crypto/cryptoSlice"

export const Card = () => {
  const { name, id, image, market_cap_rank, market_cap, current_price, price_change_percentage_24h, symbol } = useAppSelector(selectModal)
  const dispatch = useAppDispatch()

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => dispatch(openModal(''))}>✕</label>
          <h3 className="text-lg font-bold">{name}, {symbol?.toUpperCase()}</h3>
          <figure><img className="w-24" src={image} alt="Shoes" /></figure>
          <p className="py-4">Market Cap is ${market_cap?.toLocaleString()} Rank: #{market_cap_rank}</p>
          <p className="py-4">Current price is ${current_price?.toLocaleString()}</p>
          <p className="py-4">Price change in last 24h is {price_change_percentage_24h}%</p>
          <a target='blank_' href={`https://www.coingecko.com/en/coins/${id}/`} className="py-4 text-slate-200 underline">More details</a>
        </div>
      </div>
    </>
  )
}
