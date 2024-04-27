import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './const';

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOUSING + '/:id'} element={<Housing />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
