import Link from "next/link";

const Tag = ({ text }: any) => {
  return (
    <Link
      href={`/`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(" ").join("-")}
    </Link>
  );
};

export default Tag;
