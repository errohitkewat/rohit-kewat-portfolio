import * as T from "@radix-ui/react-tooltip";

export const TipProvider = ({ children }) => <T.Provider delayDuration={0}>{children}</T.Provider>;

export function Tip({ label, children }) {
  return (
    <T.Root>
      <T.Trigger asChild>{children}</T.Trigger>
      <T.Portal>
        <T.Content side="top" sideOffset={8} className="z-50 rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0">
          {label}
          <T.Arrow className="fill-primary" />
        </T.Content>
      </T.Portal>
    </T.Root>
  );
}
