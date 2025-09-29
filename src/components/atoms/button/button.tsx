import { forwardRef, ComponentProps } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button">
>(({ children, className, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={"w-auto flex-none text-white text-lg leading-6 font-semibold py-3 px-6 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-emerald-600/40 focus:outline-none transition-transform duration-200 ease-out shadow-[0_8px_24px_rgba(9,121,26,0.35)] bg-[linear-gradient(135deg,#84C718_0%,#09791A_100%)] transform-gpu will-change-transform hover:scale-[1.03] active:scale-95 " + className}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
