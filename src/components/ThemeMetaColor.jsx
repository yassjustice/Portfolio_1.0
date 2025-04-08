import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeMetaColor = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'dark' ? '#1a1a1a' : '#ffffff';
    }
  }, [theme]);

  return null;
};

export default ThemeMetaColor;