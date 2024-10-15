import * as React from "react";

import { cn } from "@/lib/utils";

import { motion } from "framer-motion";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow w-full ",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("pl-5 -mt-5 h-20 w-20 ", className)}
    {...props}
  />
));
CardIcon.displayName = "CardIcon";

interface CardAvatarProps extends React.ComponentProps<typeof motion.div> {
  hoverAction?: boolean;
}

const CardAvatar = React.forwardRef<HTMLDivElement, CardAvatarProps>(
  ({ className, hoverAction = false, ...props }, ref) =>
    hoverAction ? (
      <motion.div
        ref={ref}
        className={cn(" flex justify-center items-center -mt-5 ", className)}
        whileHover={{ y: -50 }}
        transition={{ type: "spring", duration: 0.3 }}
        {...props}
      />
    ) : (
      <motion.div
        ref={ref}
        className={cn(" flex justify-center items-center  -mt-5 ", className)}
        {...props}
      />
    )
);
CardAvatar.displayName = "CardAvatar";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(" flex flex-col space-y-1.5 p-4 ", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(" leading-none tracking-tight ", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4  border-t-2 ", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardAvatar,
  CardIcon,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
