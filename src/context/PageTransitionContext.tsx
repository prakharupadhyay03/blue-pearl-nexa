"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { usePathname, useRouter } from "next/navigation";

interface PageTransitionContextType {
  isExiting: boolean;
  navigateWithTransition: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  isExiting: false,
  navigateWithTransition: () => {},
});

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isExiting, setIsExiting] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Reset exit state whenever pathname changes (navigation completed)
  useEffect(() => {
    setIsExiting(false);
  }, [pathname]);

  const navigateWithTransition = useCallback(
    (href: string) => {
      // If already on the exact same page, ignore redundant exit animation
      if (href === pathname) {
        return;
      }

      setIsExiting(true);

      // Wait for exit animation to complete (260ms), then execute router.push
      setTimeout(() => {
        router.push(href);
      }, 260);
    },
    [pathname, router]
  );

  // Global click listener to intercept internal link clicks across Navbar, Footer, and Buttons
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("//") &&
        !anchor.target &&
        anchor.getAttribute("download") === null &&
        anchor.getAttribute("data-no-transition") === null &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey &&
        e.button === 0 // Left mouse button only
      ) {
        // Skip same-page anchor / hash navigation
        if (
          href === pathname ||
          href === `${pathname}#` ||
          href.startsWith("#")
        ) {
          return;
        }

        e.preventDefault();
        navigateWithTransition(href);
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, [pathname, navigateWithTransition]);

  return (
    <PageTransitionContext.Provider
      value={{ isExiting, navigateWithTransition }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  return useContext(PageTransitionContext);
}
