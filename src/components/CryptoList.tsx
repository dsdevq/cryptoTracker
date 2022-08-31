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
    <main className='flex-auto container mx-auto px-4 bg-slate-300 rounded-b-md shadow-slate-600 shadow-xl'>
      <ul className='flex flex-col'>
        <li className='flex bg-slate-300 border-b-2 py-2 gap-2 items-center font-semibold sticky top-0'>
          <span className='basis-1/12'>
            <span
              className='cursor-pointer'
              onClick={handleOnClick}>#</span>
          </span>
          <p className='basis-full pr-7 sm:pr-16 flex-1 after:content-[""] after:basis-full'>
            <span className='cursor-pointer' onClick={handleOnClick}>Name</span>
          </p>
          <p className='basis-1/2'>
            <span className='cursor-pointer' onClick={handleOnClick}>Price</span>
          </p>
          <p className='basis-1/2'>
            <span className='cursor-pointer' onClick={handleOnClick}>24h %</span>
          </p>
          <p className='basis-1/2 hidden md:block'>
            <span className='cursor-pointer' onClick={handleOnClick}>Market Cap</span>
          </p>
        </li>
        {searchResult && searchResult.map((i: Crypto) => (
          <CryptoItem {...i} key={i.id} />
        ))}
      </ul>
    </main>
  )
}
