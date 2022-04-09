import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}
export default withRouter(ScrollToTop);