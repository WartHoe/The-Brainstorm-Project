import styles from './TimerField.module.scss'


function TimerField(props){
    return(
        <div>
            <div className={styles.contentTime}>
                <input type="number" id="timeH" name="H"/>
                <img width={10} height={50} src="/img/dots.svg" alt=":"/>
                <input type="number" id="timeM" name="M"/>
                <img width={10} height={50} src="/img/dots.svg" alt=":"/>
                <input type="number" id="timeS" name="S"/>
            </div>

            <div className={styles.contentTimeLetters}>
                <div>H</div>
                <span>M</span>
                <div>S</div>
            </div>
        </div>
    )
}

export default TimerField;