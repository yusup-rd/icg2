interface IconProps {
  className: string;
}

const WithdrawSVG: React.FC<IconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 24 24" className={`${className}`} fill="currentColor">
      <path
        fillRule="evenodd"
        d="M18 3H6a4 4 0 0 0-1.5 7.71V7A1.5 1.5 0 0 1 6 5.5h12A1.5 1.5 0 0 1 19.5 7v3.71A4.001 4.001 0 0 0 18 3zm0 16V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zm-6.75-3.81-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V11a.75.75 0 1 0-1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default WithdrawSVG;
