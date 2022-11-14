import React from "react";
import styles from './Footer.module.css'
import stylesContainer from '../../common/styles/Container.module.css'

export const Footer=()=>{
    return (
        <div className={styles.footerWrapper}>
            <div className={`${stylesContainer.container} ${styles.footerContent}`}>
                <p className={styles.name}>Denis Anishchenko</p>
                <div className={styles.links}>
                    <div className={styles.linkWrapper}></div>
                    <div className={styles.linkWrapper}></div>
                    <div className={styles.linkWrapper}></div>
                    <div className={styles.linkWrapper}></div>
                </div>
                <p className={styles.year}>&copy; 2022</p>
            </div>

        </div>
    )
}