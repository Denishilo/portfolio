import React from "react";
import styles from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <div className={styleContainer.container}>
                <div className={styles.info}>
                    <span>Hi There</span>
                    <h1>I am Denis Anishchenko</h1>
                    <p>fronted developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    )
}