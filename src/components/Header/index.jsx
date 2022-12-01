import React from 'react'
import styles from './Header.module.scss'

function Header (props){
    const [isOpened, setIsOpened] = React.useState(false);

    const onClickListButton = () => {
        if (isOpened === false){setIsOpened(true)}
        else setIsOpened(false)
    } 

    return(
        <header style={isOpened ? {paddingTop : '60em'} : {paddingTop : '33px'}} className="d-flex">
            <center style={isOpened ? {marginTop : 'auto'} : {marginBottom : 'none'}} className="d-flex align-center">
                <button onClick={onClickListButton}>
                    <img style={isOpened ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} className={styles.headerList} width={40} height={40} src="/img/list.svg" alt = "List"/>
                </button>
                <h1>The Brainstorm Project v1.0</h1>
            </center>
        </header>
    )
}

export default Header