import { NavLink } from 'react-router-dom'
import { FramerMagnetic } from '../index'
import { links } from '../../utils/data'

function MainNav() {
  return (
    <nav className="flex flex-1 justify-center col-span-2 order-3 md:order-2">
    <ul className="flex gap-8">
      {links.map((link) => (
        
        <FramerMagnetic key={link.name}>
          <li  className="group relative px-4 py-3">
            <NavLink
              to={link.path}
              className="group inherit font-ginto-nord-regular text-lg  hover:font-bold group-active:text-[1rem] focus:font-bold transition-all ease-linear duration-100 "
            >
              {link.name}

              <div className="underline-dot group-hover:scale-100 group-active:scale-50  group-focus:scale-75 transition ease-linear duration-150 " />
            </NavLink>
          </li>
        </FramerMagnetic>
      ))}
    </ul>
  </nav>
  )
}

export default MainNav