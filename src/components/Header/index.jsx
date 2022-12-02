import React from 'react'
import styles from './Header.module.scss'

function Header (props){
    const [isOpened, setIsOpened] = React.useState(false);

    const onClickListButton = () => {
        if (isOpened === false){setIsOpened(true)}
        else setIsOpened(false)
    } 

    return(
        <div className='d-flex'>
            <header className={styles.hiddenHeader}>
                <div style={isOpened ? {top : '0'} : {top : '-60em'}}>
                    <h1>Тут будут плашки</h1>
                </div>
            </header>

            <header className={styles.defaultHeader}>
                <div style={isOpened ? {top : '60em'} : {top : '0'}} className={styles.header}>
                    <center style={isOpened ? {marginTop : 'auto'} : {marginBottom : 'none'}} className="d-flex align-center">
                        <button onClick={onClickListButton}>
                            <img style={isOpened ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} className={styles.headerList} width={40} height={40} src="/img/list.svg" alt = "List"/>
                        </button>
                        <h1>The Brainstorm Project v1.0</h1>
                    </center>
                </div>
            </header>
        </div>
    )
}

export default Header