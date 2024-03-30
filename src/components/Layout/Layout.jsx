import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';

function Layout({ children }) {
  return (
    <div>
      <AppBar />
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Layout;
