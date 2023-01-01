import React from 'react';
import TimerWrapper from './effectWraper';
import Counter from './counter';
import ProfileViewer from './ajaxCall';
import ProfileVewerWithSearch from './profileSearch';
import './App.css';
import Video from './useRef';
import Focuser from './useRef2';
import Timer2 from './timer2';

function App ()
{
  return (
    <div className="App">
      {/* <Video /> */ }
      <Focuser />
      <Timer2 />
      {/* <TimerWraper />
      <Counter />
      <ProfileViewer name='Ellie' color='blue' />
      <ProfileViewer name='Matt' color='pink' />
      <ProfileViewer />
      <ProfileVewerWithSearch /> */}
    </div>
  );
}

export default App;
