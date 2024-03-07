type HistoryIconProps = {
  className?: string;
};

export default function HistoryIcon(props: HistoryIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.08879 1.93421C6.08583 0.470627 8.55482 -0.200059 11.0179 0.0519617C13.481 0.303983 15.763 1.46079 17.4222 3.29848C19.0815 5.13618 20 7.52408 20 10V11.6756L14.874 8.3422L15.8652 6.81796L17.9798 8.19306C17.6721 6.83417 17.0199 5.56599 16.0727 4.51694C14.7152 3.01338 12.8481 2.0669 10.8328 1.8607C8.81758 1.6545 6.7975 2.20324 5.16355 3.40072C3.52961 4.5982 2.398 6.35925 1.98775 8.34304C1.57749 10.3268 1.91776 12.3923 2.9427 14.1396C3.96764 15.887 5.60437 17.1919 7.53609 17.802C9.46782 18.4121 11.5572 18.2838 13.3998 17.442C15.2424 16.6003 16.7072 15.1049 17.5107 13.2453L19.1797 13.9665C18.1977 16.2393 16.4073 18.067 14.1553 19.0958C11.9032 20.1246 9.34955 20.2814 6.98855 19.5358C4.62756 18.7902 2.62712 17.1952 1.37441 15.0595C0.121705 12.9239 -0.294183 10.3995 0.207241 7.97482C0.708665 5.55019 2.09174 3.39779 4.08879 1.93421ZM8.45674 5.04666H10.2749V10.0534L13.6731 11.8859L12.8101 13.4862L8.45674 11.1387V5.04666Z"
        fill="#E0E0E0"
        className="group-hover:fill-primary-600"
      />
    </svg>
  );
}