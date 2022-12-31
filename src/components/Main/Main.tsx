import React from "react";
import styles from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <div className={styleContainer.container}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Hi, I'm Denis</h1>
                    <p className={styles.text}>I’m a developer & I’m very passionate and dedicated to my work. I have acquired the skills and
                        knowledge necessary to make your project a success.</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    )
}