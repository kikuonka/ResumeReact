import {resume} from "../../data/resume.ts";
import styles from "./Skills.module.css"

interface Skill {
    name: string;
}

interface Project {
    hrefProject: string;
    hrefImage: string;
}

interface Props {
    skills: Skill[];
    projects: Project[];
}

function Skills(props: Props) {
    return (
        <div className={styles.skills}>
            <h2 className={styles.h2}>Ключевые навыки</h2>
            <div className={styles.skillsList}>
                {props.skills.map((skill, index) =>
                    <div className={styles.skillsItem} key={index}>
                        <p>{skill.name}</p>
                    </div>
                )}
            </div>
            <h3 className={styles.h3}>Проекты</h3>
            <div className={styles.tables}>
                {props.projects.map((project, index) =>
                    <div key={index}>
                        <a href={project.hrefProject}>
                            <img className={styles.img} src={project.hrefImage} />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function SkillsResume() {
    return <Skills {...resume}/>
};