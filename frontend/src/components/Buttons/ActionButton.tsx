import { type ActionButtonProps } from "../../types";

export default function ActionButton({
  title,
  buttonStyle,
  isDisabled,
  onClick
}: ActionButtonProps) {

  return (
    <button
      disabled={isDisabled}
      className={`
        ${
          isDisabled
            ? "bg-red-600 text-isabelline cursor-not-allowed"
            : "bg-white active:scale-[99%] cursor-pointer active:shadow-[0.1rem_0.1rem_#123C64ff,-0.1rem_-0.1rem_#123C64ff]"
        } 
        border-black border-2 uppercase  px-4 py-2  hover:shadow-[0.15rem_0.15rem_#123C64ff,-0.15rem_-0.15rem_#E85A13ff] transition 
        ${buttonStyle}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
