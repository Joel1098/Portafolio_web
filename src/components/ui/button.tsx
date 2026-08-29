"use client";

import React from "react";
import * as SubframeUtils from "../../utils";

export interface ButtonRootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonRootProps>(
  function ButtonRoot(
    {
      disabled = false,
      children,
      className,
      type = "button",
      ...otherProps
    }: ButtonRootProps,
    ref
  ) {
    return (
      <button
        className={SubframeUtils.twClassNames(
          "group/ed39dce8 flex h-8 cursor-pointer items-center justify-center gap-2 rounded-[4px] border border-solid border-[#e5e5e5] bg-[#ffffff] px-3 text-left hover:border hover:border-solid hover:border-[#d4d4d4] hover:bg-[#f5f5f5] active:bg-[#e5e5e5] disabled:cursor-default disabled:opacity-50 disabled:pointer-events-none hover:disabled:cursor-default hover:disabled:bg-[#e5e5e5] active:disabled:cursor-default",
          className
        )}
        ref={ref}
        type={type}
        disabled={disabled}
        {...otherProps}
      >
        {children ? (
          <span className="whitespace-nowrap font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#171717] group-disabled/ed39dce8:text-[#a3a3a3]">
            {children}
          </span>
        ) : null}
      </button>
    );
  }
);

export const Button = ButtonRoot;