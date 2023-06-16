import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Posts from './components/Posts';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Posts />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Route>
    </Routes>
  );
}

export default App;
