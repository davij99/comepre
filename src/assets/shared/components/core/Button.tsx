export interface ButtonProps {
  handleClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="px-24 py-6 bg-[#172842] text-white rounded-xl shadow-2xl"
      onClick={props.handleClick}
    >
      Indietro
    </button>
  );
};

export default Button;