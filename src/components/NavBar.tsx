import { Link } from 'react-router-dom';

export const NavBar = () => {

  return (
    <header className='bg-slate-500 sticky top-0 z-50'>
      <div className='container mx-auto p-2 flex items-center gap-2 font-medium text-2xl'>
        <Link to={'/explore'}>
          Explore
        </Link>
        <Link to={'/convert'}>
          Convert
        </Link>
      </div>
    </header>
  )
}
