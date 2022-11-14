import React from "react";
import styles from './Navigation.module.css'

export const Navigation = ()=>{
    return (
            <div className={styles.navigationWrapper}>
                <a className={styles.link} href="#">Main</a>
                <a className={styles.link} href="#">Skills</a>
                <a className={styles.link} href="#">Projects</a>
                <a className={styles.link} href="#">Contacts</a>
            </div>
    )
}