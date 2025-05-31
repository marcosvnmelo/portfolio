import { useLayoutEffect } from 'react';

export function useSystemDarkMode() {
  useLayoutEffect(() => {
    // Function to apply dark mode based on preference
    const applyDarkMode = (isDarkModePreferred: boolean) => {
      if (isDarkModePreferred) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    };

    // Create a media query to watch for changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Check system preference
    const isDarkModePreferred = mediaQuery.matches;

    // Apply initial dark mode setting
    applyDarkMode(isDarkModePreferred);

    // Define listener for preference changes
    const handleChange = (e: MediaQueryListEvent) => {
      applyDarkMode(e.matches);
    };

    // Add event listener
    mediaQuery.addEventListener('change', handleChange);

    // Clean up when component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
}
