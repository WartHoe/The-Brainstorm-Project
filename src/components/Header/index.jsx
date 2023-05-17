import React from 'react'
import styles from './Header.module.scss'

function Header (props){
    return(
        <div className='d-flex'>
            <header className={styles.defaultHeader}>
                <div style={props.isOpened ? {top : '0'} : {top : '-54.8em'}} className={styles.headerContent}>
                    <center style={props.isOpened ? {marginTop : 'auto'} : {marginBottom : 'none'}} className="d-flex align-center">

                        <button style={props.isStarted ? {display : 'none'} : {display : ''}} onClick={props.onClickListButton}>
                            <img style={props.isOpened ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} className={styles.headerList} width={40} height={40} src="/img/list.svg" alt = "List"/>
                        </button>

                        <button style={props.isStarted ? {display : ''} : {display : 'none'}} onClick={props.onClickStopButton}>
                            <img style={props.isOpened ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} className={styles.headerList} width={40} height={40} src="/img/stop.svg" alt = "List"/>
                        </button>


                        <h1>The Brainstorm Project v1.0</h1>
                    </center>

                    <div style={props.isStopped ? {display:'none'} : {display: ''}} className={styles.headerSaving}>
                        <h1>Тут будут плашки</h1>
                    </div>

                    <div style={props.isStopped ? {display:''} : {display:'none'}} className={styles.headerSaving}>
                        <h1>Name your Brainstorm:</h1>
                        <input
                        type="text"
                        name="name"
                        onChange={props.onChangeSavingHandler}
                        value={props.inputSavingValue}>
                        </input>
                        <button onClick={props.onClickSaveButton}><p>Save</p></button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header