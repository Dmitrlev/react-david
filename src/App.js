import './App.css';
import BodyLeft from './components/BLeft/BodyLeft.jsx'
import LOGO from './LOGO/LOGO'
import MainProfile from './components/MainProfile/MainProfile.jsx' 
import MainMessages from './components/MainMessages/MainMessages.jsx'
import { Routes, Route, Router } from 'react-router-dom';

function App(props) {
  return (    
    <div className='body-wrapper'>
      <BodyLeft />
      <section className='BodyRight'>
      <LOGO />
      <Routes>
        <Route path='/'>
          <Route path='profile'
                 element={<MainProfile State={props.State}
                                       dispatch={props.dispatch}
                                       />}/>
          <Route path='messages/*'
                 element={<MainMessages State={props.State}
                                        dispatch={props.dispatch}
                                        />}>
          </Route>
        </Route>
      </Routes>
      </section>
    </div>
  );
}


export default App;

{/* <Route path='/news' element={<MainProfile />}/>
<Route path='/music' element={<MainMessages />}/>
<Route path='/settings' element={<MainMessages />}/> */}

// exact

//darget


