type Props = {
  className?: string;
};
export default function SearchIcon(props: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M11.1111 9.77778H10.4089L10.16 9.53778C11.0311 8.52444 11.5556 7.20889 11.5556 5.77778C11.5556 2.58667 8.96889 0 5.77778 0C2.58667 0 0 2.58667 0 5.77778C0 8.96889 2.58667 11.5556 5.77778 11.5556C7.20889 11.5556 8.52444 11.0311 9.53778 10.16L9.77778 10.4089V11.1111L14.6756 16L16 14.6756L11.1111 9.77778ZM5.77778 9.77778C3.56444 9.77778 1.77778 7.99111 1.77778 5.77778C1.77778 3.56444 3.56444 1.77778 5.77778 1.77778C7.99111 1.77778 9.77778 3.56444 9.77778 5.77778C9.77778 7.99111 7.99111 9.77778 5.77778 9.77778Z"
        fill="#757575"
      />
    </svg>
  );
}