import React from "react";
import styles from './Projects.module.css'
import stylesContainer from '../../common/styles/Container.module.css'
import {ProjectType} from "../../App";
import {Project} from "./Project/Project";

type ProjectsPropsType = {
    projects: Array<ProjectType>
}
export const Projects = (props: ProjectsPropsType) => {
    const {projects} = props
    return (
        <div className={styles.projectsWrapper}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h3 className={styles.title}>My Projects</h3>
                <div className={styles.projectsContent}>
                    {projects.map(el => {
                        return (<Project key={el.id} title={el.title} img={el.img} description={el.description}/>)
                    })}
                </div>
            </div>
        </div>
    )
}