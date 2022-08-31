import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../app/hooks'
import { Crypto, getData, selectSearchResult, sort } from '../features/crypto/cryptoSlice'
import { CryptoItem } from './CryptoItem'

export const CryptoList = () => {
  const searchResult = useSelector(selectSearchResult)
  const dispatch = useAppDispatch()

  const handleOnClick = (e: any) => {
    dispatch(sort(e.target.innerText))
  }
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <main className='flex-auto container mx-auto px-2 bg-slate-300 shadow-slate-600 shadow-xl sm:px-4 relative'>
      <ul className='flex flex-col'>
        <li className='flex bg-slate-300 border-b-2 py-2 gap-2 items-center font-semibold sticky top-0'>
          <span className='basis-6 shrink-0'>
            <span
              className='cursor-pointer'
              onClick={handleOnClick}>#</span>
          </span>
          <p className='basis-3/4'>
            <span className='cursor-pointer' onClick={handleOnClick}>Name</span>
          </p>
          <p className='basis-1/3'>
            <span className='cursor-pointer' onClick={handleOnClick}>Price</span>
          </p>
          <p className='basis-1/3'>
            <span className='cursor-pointer' onClick={handleOnClick}>24h %</span>
          </p>
          <p className='basis-1/3 hidden md:block'>
            <span className='cursor-pointer' onClick={handleOnClick}>Market Cap</span>
          </p>
        </li>
        {
          searchResult.length ? searchResult.map((i: Crypto) => (
            <CryptoItem {...i} key={i.id} />
          ))
            :
            <p className='text-center font-semibold text-4xl underline text-gray-800'>No results...</p>
        }
      </ul>
    </main>
  )
}
