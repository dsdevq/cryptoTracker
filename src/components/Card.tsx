import { useAppSelector } from "../app/hooks"
import { selectModal } from "../features/crypto/cryptoSlice"

export const Card = () => {
  const { name, id, image, market_cap_rank, market_cap, current_price, price_change_percentage_24h, symbol } = useAppSelector(selectModal)

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal text-gray-400">
        <div className="modal-box max-h-[100vh] relative flex flex-col items-start gap-2">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold flex items-center">{name}, {symbol?.toUpperCase()}
            <img className="w-11 p-2 motion-safe:animate-spin-slow" src={image} alt={name} />
          </h3>
          <p>Market Cap is ${market_cap?.toLocaleString()} Rank: #{market_cap_rank}</p>
          <p>Rank: #{market_cap_rank}</p>
          <p>Current price is ${current_price?.toLocaleString()}</p>
          <p>Price change in last 24h is {price_change_percentage_24h}%</p>
          <a target='blank_' href={`https://www.coingecko.com/en/coins/${id}/`} className=" text-slate-200 underline italic motion-safe:animate-bounce ">More details</a>
        </div>
      </div>
    </>
  )
}
