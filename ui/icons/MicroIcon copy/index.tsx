type Props = {
  className?: string;
};
export const MicroFillIcon = (props: Props) => {
  return (
    <svg
      width="32"
      height="44"
      viewBox="0 0 32 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M16 27.7895C19.7943 27.7895 22.8343 24.6863 22.8343 20.8421L22.8571 6.94737C22.8571 3.10316 19.7943 0 16 0C12.2057 0 9.14286 3.10316 9.14286 6.94737V20.8421C9.14286 24.6863 12.2057 27.7895 16 27.7895ZM28.1143 20.8421C28.1143 27.7895 22.3086 32.6526 16 32.6526C9.69143 32.6526 3.88571 27.7895 3.88571 20.8421H0C0 28.7389 6.21714 35.2695 13.7143 36.4042V44H18.2857V36.4042C25.7829 35.2926 32 28.7621 32 20.8421H28.1143Z"
        fill="#7C4DFF"
      />
    </svg>
  );
};