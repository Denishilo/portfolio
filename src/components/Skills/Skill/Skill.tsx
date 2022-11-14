import React from "react";
import styles from './Skill.module.css'

type SkillTypeProps = {
    title: string
    img: string
}

export const Skill = (props: SkillTypeProps) => {
    const {title, img} = props
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>{img}</div>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.description}></span>
        </div>
    )
}