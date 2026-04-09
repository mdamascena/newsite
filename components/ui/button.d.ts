import * as React from "react"

export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"

export type ButtonSize = "default" | "sm" | "lg" | "icon"

export type ButtonVariantsInput = {
  variant?: ButtonVariant | null
  size?: ButtonSize | null
  className?: string
}

export function buttonVariants(input?: ButtonVariantsInput): string

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>
