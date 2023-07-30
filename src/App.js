import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { NavMenuDesktop } from './Components/NavMenuDesktop';
import { RocketAir } from './Components/RocketAir';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<NavMenuDesktop/>}/>
          <Route path='/rocketAir' element={<RocketAir/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
