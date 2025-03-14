interface IconProps {
  className: string;
}

const DepositSVG: React.FC<IconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 24 24" className={`${className}`} fill="currentColor">
      <g>
        <path
          fillRule="evenodd"
          d="M18 3H6C3.8 3 2 4.8 2 7c0 1.7 1 3.1 2.5 3.7V7c0-.4.2-.8.4-1.1s.7-.4 1.1-.4h12c.4 0 .8.2 1.1.4s.4.7.4 1.1v3.7C21 10.1 22 8.7 22 7c0-2.2-1.8-4-4-4zm0 16V7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2zm-6.8-6.6-.7.7c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l1.3-1.3c.7-.7 1.8-.7 2.5 0l1.3 1.3c.3.3.3.8 0 1.1s-.8.3-1.1 0l-.7-.7v4.2c0 .4-.3.8-.8.8s-.8-.3-.8-.8v-4.2z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
};

export default DepositSVG;
