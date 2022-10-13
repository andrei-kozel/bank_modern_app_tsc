type Props = {
  styles: string;
};

const Button = ({ styles }: Props) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get started
    </button>
  );
};

export default Button;
