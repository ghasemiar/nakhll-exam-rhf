import { ReactNode } from "react";

interface AppButtonProps {
  type?: "button" | "submit" | "reset";
  costumeClass?: string;
  disable?: boolean;
  children: ReactNode;
  onClick?: () => void;
}
export default function AppButton({
  type,
  costumeClass,
  disable,
  onClick,
  children,
}: AppButtonProps) {
  return (
    <button
      type={type}
      disabled={disable}
      className={costumeClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
