export default function SocialIcon({ kind, href, size = 8 }: any) {
  console.log(kind, href, size);

  return (
    <>
      <img src={`./social-icons/${kind}.svg`} />
    </>
  );
  /*  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  ); */
}
