import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop(): JSX.Element {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <>
    </>);
}

export default ScrollToTop;
