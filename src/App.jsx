import Header from './components/Header';
import TimerField from './components/TimerField'

function App() {

  return (
  <div className="wrapper clear">
    <Header/>
    <div style={{paddingTop : '100px'}}>
    <div className="content d-block">
      <h2>Choose the amount of time here:</h2>
      <TimerField/>
      <div className="contentStart">
        <h3>And press this button when you'll be ready :)</h3>
        <button className="buttonStart d-flex justify-center align-center cu-p">
        <div><p>start</p></div>
        </button>
      </div>
    </div>
    </div>
  </div>
  );
}

export default App;
