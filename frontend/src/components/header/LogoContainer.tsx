import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function LogoContainer() {
  return (
    <div className="h-12 w-40 md:w-80 order-1">
      <Link to="/" className="inline-block  h-12 w-40">
        <img
          className="h-12 w-auto aspect-[10/3]"
          typeof="svg"
          src={logo}
          alt="runthecode sneaker store"
        />
      </Link>
    </div>
  );
}
