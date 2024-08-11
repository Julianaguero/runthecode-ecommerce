import { type ActionButtonProps } from "../../types";

export default function GenericButton({
  title,
  buttonStyle,
  isDisabled,
  onClick,
  type
}: ActionButtonProps) {

  return (
    <button
      disabled={isDisabled}
      className={`
        ${
          isDisabled
            ? "bg-red-600 text-isabelline cursor-not-allowed"
            : "capitalize bg-lightviolet text-white w-full py-3 active:scale-[99%] cursor-pointer active:shadow-[0.1rem_0.1rem_#772dff,-0.1rem_-0.1rem_#772dff]  hover:scale-[1.03]  "
        } 
       max-w-[350px] border-black border-2  px-4  hover:shadow-[0.15rem_0.15rem_#772dff,-0.15rem_-0.15rem_#ffcb00] transition 
        ${buttonStyle}`}
      onClick={onClick}
      type={type || "button"}
    >
      {title}
    </button>
  );
}
