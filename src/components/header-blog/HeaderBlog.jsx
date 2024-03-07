import './header.css'
import Search from '../search/Search'
import Logo from '../logo/Logo'
import Socials from '../socials/Socials'
import Nav from '../nav/Nav'
export default function Header() {
    return (
        <div className='head'>
            <div className="py-3 px-5 d-flex align-items-center border-bottom justify-content-between">
                <Search />
                <Logo />
                <Socials />
                <Nav />
            </div>
        </div>
    )
}
