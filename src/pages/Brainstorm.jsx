import Timer from '../components/Timer';

function Brainstorm(props){

return(
<div style={props.isStarted ? {display : ''} : {display : 'none'}} className='content'>
    <h2>Тут будет оставшееся время и так далее</h2>
    <input></input>
</div>
)
}

export default Brainstorm