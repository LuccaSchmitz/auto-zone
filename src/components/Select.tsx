import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
}

export default function Select({ children, disabled, value, onChange }: Props) {
  return (
    <select
      className="flex-1 trucante border-slate-400 border-2 max-h-[60px] rounded-lg text-slate-500 px-4 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-400"
      disabled={disabled}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {children}
    </select>
  );
}
