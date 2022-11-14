import React from "react";
import styles from './Contacts.module.css'
import stylesContainer from '../../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contactsWrapper}>
            <div className={`${stylesContainer.container} ${styles.contactsContent}`}>
                    <h3 className={styles.title}>Contacts</h3>
                    <form className={styles.form} action="##">
                        <input className={styles.input} type="text"/>
                        <input className={styles.input} type="text"/>
                        <textarea className={styles.textArea} name="" id="" cols={30} rows={10}></textarea>
                    </form>
                    <button>send</button>
            </div>
        </div>
    )
}