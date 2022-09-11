interface ButtonProps extends React.HTMLAttributes<HTMLElement> {}

export function Button({ className, children }: ButtonProps) {
  return (
    <button className={`px-3 py-2 text-white rounded bg-teal-600 ${className}`}>
      {children}
    </button>
  );
}
