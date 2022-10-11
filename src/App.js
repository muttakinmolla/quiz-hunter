import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Blog from './components/Blog/Blog';
import Static from './components/Static/Static';
import Error from './components/Error/Error';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/quiz/:courseId',
          loader: async ({ params }) => {
            return await fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: 'static',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Static></Static>
        }
      ]
    },
    { path: '*', element: <Error></Error> }
  ])
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
