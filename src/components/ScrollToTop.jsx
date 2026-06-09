import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Toggle visibility of go-to-top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="#" 
      className={`go-to-top ${visible ? 'show' : ''}`} 
      onClick={scrollToTop}
      style={{ 
        display: visible ? 'block' : 'none',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999
      }}
    >
      <img src="/imgs/gototop.svg" alt="Go to top" />
    </a>
  );
}
