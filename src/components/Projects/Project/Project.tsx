import React from "react";
import styles from './Project.module.css'

type ProjectPropsType = {
    img: string
    title: string
    description: string
}
export const Project = (props:ProjectPropsType)=>{
    const {title,description} = props
    return (
        <div className={styles.projectContainer}>
            <div className={styles.iconButtonWrapper}><button>see</button></div>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    )
}