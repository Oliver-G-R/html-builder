import { createBrowserRouter, RouterProvider } from 'react-router';
import { Layout } from './routes/Layout';
import { Home } from './routes/Home';
import { Section } from './routes/Section';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'seccion/:id', element: <Section /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
