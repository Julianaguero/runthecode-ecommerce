import { Link } from 'react-router-dom'
import { type LinkButtonProps } from '../../types'



export default function LinkButton({title, to, buttonStyle } : LinkButtonProps) {
  return (
    <Link
        to={to}
        className={`capitalize w-full py-3 px-8  my-2 border-2 border-prussian  hover:bg-prussian hover:text-white transition-all ease-in duration-75 active:scale-95  ${buttonStyle}`}

    >
        {title}
    </Link>
  )
}
