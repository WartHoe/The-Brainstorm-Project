import Header from './components/Header';
import Main from './pages/Main';
import Brainstorm from './pages/Brainstorm';
import React from 'react'
import Timer from './components/Timer';

function App() {
  const [isStarted, setIsStarted] = React.useState(false);
  const [isStopped, setIsStopped] = React.useState(false);
  const [isOpened, setIsOpened] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);

  const [inputSavingValue, setInputSavingValue] = React.useState("");

  const onChangeSavingHandler = event => {
    setInputSavingValue(event.target.value);
  };

  const onClickStartButton = () => {
    if (isStarted === false){setIsStarted(true); setIsSaved(false)}
    else setIsStarted(false)
  }
  const onClickListButton = () => {
    if (isOpened === false){setIsOpened(true)}
    else setIsOpened(false)
  }
  const onClickStopButton = () => {
    if (isStopped === false){setIsStopped(true); setIsOpened(true);}
  }
  const onClickSaveButton = () => {
    if (isSaved === false){
      setIsSaved(true); setIsStarted(false); setIsStopped(false)
      console.log(inputSavingValue)
      setInputSavingValue('')
    }
    else setIsSaved(false)
  }


  return (
  <div className="wrapper clear">
    <Header
    onClickStartButton={onClickStartButton}
    onClickListButton={onClickListButton}
    onClickStopButton={onClickStopButton}
    onClickSaveButton={onClickSaveButton}
    onChangeSavingHandler={onChangeSavingHandler}
    isStarted = {isStarted}
    isOpened = {isOpened}
    isStopped = {isStopped}
    isSaved={isSaved}
    inputSavingValue={inputSavingValue}
    />
    <Main
    onClickStartButton={onClickStartButton}
    isStarted = {isStarted}
    />
    <Brainstorm
    isStarted={isStarted}
    onClickStopButton={onClickStopButton}
    />
    <Timer
    duration = {5}
    onClickStopButton={onClickStopButton}
    isStarted={isStarted}
    onClickStartButton={onClickStartButton}
    />
  </div>
  );
}

export default App;
