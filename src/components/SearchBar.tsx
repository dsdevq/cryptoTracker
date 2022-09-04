import { FaSearch } from 'react-icons/fa'
import { useAppDispatch } from '../app/hooks'
import { filter } from '../features/crypto/cryptoSlice'

export const SearchBar = () => {

  const dispatch = useAppDispatch()

  const handleOnSubmit = (e: { preventDefault: () => void }) => e.preventDefault()
  const handleOnChange = (e: { target: { value: string } }) => {
    dispatch(filter(e.target.value))
  }

  return (
    <form className='flex-auto container mx-auto px-2 sm:px-4 py-1' action="submit" onSubmit={handleOnSubmit}>
      <article className='relative'>
        <FaSearch className='absolute z-10 top-1/3 left-1 text-slate-700' />
        <input className='relative outline-none rounded-sm py-2 px-6 transition-all duration-200 focus:px-7 ' placeholder='Enter coin name' type="text" onChange={handleOnChange} />
      </article>
    </form>
  )
}
