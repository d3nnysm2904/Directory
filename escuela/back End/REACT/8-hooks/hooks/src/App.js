import logo from './logo.svg';
import './App.css';
import Mood from './moodClicker';
import Counter from './counter';
import ColorPicker from './colorPicker';
import SignUpForm from './signUpForm';
import DogDetail from './dogDetail';
function App ()
{
  return (
    <div className="App">
      <DogDetail />
      <Mood />
      <Counter />
      <ColorPicker />
      <SignUpForm />
    </div>
  );
}

export default App;
