import { Link } from 'react-router-dom'
import { type LinkButtonProps } from '../../types'


export default function LinkButton({title, buttonStyle } : LinkButtonProps) {
  return (
    <Link
        to="/cart"
        className={`capitalize bg-lightviolet text-white w-full py-3 px-8  my-2 border-2 hover:border-black hover:bg-violet hover:scale-[1.03] transition-all ease-in duration-75 active:scale-100  ${buttonStyle}`}

    >
        {title}
    </Link>
  )
}
