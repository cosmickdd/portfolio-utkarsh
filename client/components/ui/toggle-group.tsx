"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";

type ToggleGroupContextType = {
  value?: string;
};

const ToggleGroupContext = React.createContext<ToggleGroupContextType>({
  value: undefined,
});

export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, value, children, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      value={value}
      className={cn(
        "relative inline-flex items-center rounded-full bg-gray-100 p-1",
        "shadow-sm",
        className
      )}
      {...props}
    >
      {/* Sliding background */}
      <div
        className={cn(
          "absolute top-1 bottom-1 w-1/2 rounded-full bg-white shadow transition-all duration-300 ease-out"
        )}
        style={{
          left: value === "designer" ? "4px" : "50%",
        }}
      />

      <ToggleGroupContext.Provider value={{ value }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
});

ToggleGroup.displayName = "ToggleGroup";

export const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, value, children, ...props }, ref) => {
  const ctx = React.useContext(ToggleGroupContext);
  const active = ctx.value === value;

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      value={value}
      className={cn(
        "relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-all",
        active
          ? "text-black"
          : "text-gray-500 hover:text-black",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = "ToggleGroupItem";
