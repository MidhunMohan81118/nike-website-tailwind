import { headerLogo} from '../assets/assets/images';
import { hamburger } from '../assets/assets/icons';
import {navLinks} from '../constants/'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between item-center max-container'>
            <a href="/">
                <img src={ headerLogo} alt="Header" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='font-monts errat leading-normal
                        text-lg text-slate-gray'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="HamburgerImage" width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav
