import React from "react";
import styles from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {SkillType} from "../../App";

type SkillsPropsType = {
    skills: Array<SkillType>
}
export const Skills = (props: SkillsPropsType) => {
    const {skills} = props
    return (
        <div className={styles.skillsWrapper}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.skillsTitle}>My Skills</h2>
                <div className={styles.skillsContent}>
                    {skills.map(el => {
                        return (
                            <Skill key={el.id} title={el.title} img={el.img}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}