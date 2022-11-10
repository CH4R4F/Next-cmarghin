import Link from "next/link";

const Button = ({ href = "#", text }) => {
  return (
    <Link href={href} className="btn shadow text-center tablet:flex-1">
      {text}
    </Link>
  );
};

export default Button;
