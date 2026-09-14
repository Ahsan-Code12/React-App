import {Link as LinkScroll} from 'react-scroll'


const NavLink = ({title}) => (
    <LinkScroll
        className="base-bold text-[rgb(234,237,255)] uppercase transition-colors duration-500
    cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
        {title}
    </LinkScroll>
)
// non immdeiate function
const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-50 w-full py-10">
            <div className="container flex h-14 items-center max-lg:px-5">
                <a className="lg:hidden flex-1 cursor-pointer z-2">
                    <img src="/images/xora.svg" width={115} height={55} alt="Logo"/>
                </a>

                <div className="w-full max-lg:relative max-lg:flex max-lg:flex-col
            max-lg:min-h-screen max-lg:p6 max-lg:overflow-hidden sidebar-before
            max-md:px4">
                    <nav>
                        <ul className="flex max-lg:block max-lg:px-12">
                            <li className="nav-li">
                                <NavLink title="feutures"/>
                                <div className="dot"></div>
                                <NavLink title="pricing"/>
                            </li>

                            <li className="nav-logo">
                                <img src="/images/xora.svg" width={160} height={55} alt="logo"/>
                            </li>

                            <li className="nav-li">
                                <NavLink title="faq"/>
                                <div className="dot"/>
                                <NavLink title="pricing"/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header
