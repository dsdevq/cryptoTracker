import { useAppDispatch } from '../app/hooks'
import { filter } from '../features/crypto/cryptoSlice'
import { FaSearch } from 'react-icons/fa';

export const NavBar = () => {

  const dispatch = useAppDispatch()

  const handleOnChange = (e: any) => {
    dispatch(filter(e.target.value))
  }

  const handleOnSubmit = (e: any) => e.preventDefault()

  return (
    <header className='bg-slate-500'>
      <form className='container mx-auto py-1 px-2 flex justify-center' action="submit" onSubmit={handleOnSubmit}>
        <div className='relative'>
          <FaSearch className='absolute z-10 top-1/3 left-1 text-slate-700' />
          <input className='relative outline-none rounded-md py-2 px-6 transition-all duration-200 focus:px-7 ' placeholder='Enter coin name' type="text" onChange={handleOnChange} />
        </div>
      </form>
    </header>
  )
}
