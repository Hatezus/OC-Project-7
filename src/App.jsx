import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import Lodging from './pages/Lodging';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/Lodging/:id',
		element: <Lodging />,
	},
	{
		path: '/About',
		element: <AboutUs />,
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
]);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
