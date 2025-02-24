import {resume} from "../../data/resume.ts";
import styles from "./Education.module.css"

interface University {
    firstDate: string;
    lastDate: string;
    nameMainUniversity: string;
    faculty: string;
    specialization: string;
}

interface Course {
    year: number;
    nameUniversity: string;
    nameCourse: string;
}

interface Props {
    universities: University[];
    courses: Course[];
}

function Education(props: Props) {
    return (
        <div className={styles.education}>
            <h2 className={styles.h2}>Образование</h2>
            {props.universities.map((university, index) =>
                <div className={styles.educationUniversity} key={index}>
                    <div>
                        <p>{university.firstDate} - {university.lastDate}</p>
                    </div>
                    <div className={styles.infoBlock}>
                        <p>{university.nameMainUniversity}</p>
                        <p>{university.faculty}</p>
                        <p>{university.specialization}</p>
                    </div>
                </div>
            )}

            <div>
                <h3 className={styles.h3}>Курсы</h3>
                {props.courses.map((course, index) =>
                    <div className={styles.educationCourse} key={index}>
                        <div>
                            <p>{course.year} г.</p>
                        </div>
                        <div className={styles.infoBlock}>
                            <p>{course.nameUniversity}</p>
                            <p>{course.nameCourse}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function EducationResume() {
    return <Education {...resume}/>
};
