function App() {


  return (
  <div className="wrapper clear">
    <header className="d-flex">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/list.svg" />
        <h1>The Brainstorm Project v1.0</h1>
      </div>
    </header>
    <div className="content d-block">
      <h2>Choose the amount of time here:</h2>
      <div className="contentTime d-flex justify-center align-center">
        <input type="number" id="timeH" name="H"/>
        <img width={10} height={50} src="/img/dots.svg" />
        <input type="number" id="timeM" name="M"/>
        <img width={10} height={50} src="/img/dots.svg" />
        <input type="number" id="timeS" name="S"/>
      </div>
      <div className="contentTimeLetters d-flex justify-center align-center">
        <div>H</div>
        <span>M</span>
        <div>S</div>
      </div>

      <div className="contentStart">
        <h3>And press this button when you’ll be ready :)</h3>
        <div className="buttonStart d-flex justify-center align-center"><p>start</p></div>
      </div>
    </div>
  </div>
  );
}

export default App;
