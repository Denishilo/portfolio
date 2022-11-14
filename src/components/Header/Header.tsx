import React from "react";
import styles from './Header.module.css'
import stylesContainer from '../../common/styles/Container.module.css'
import {Navigation} from "../Navigation/Navigation";

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={`${stylesContainer.container} ${styles.headerContent}`}>
                <Navigation/>
            </div>
        </div>
    )
}