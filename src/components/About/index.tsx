import {resume} from "../../data/resume.ts";
import styles from "./About.module.css"

interface Props {
    date: string;
    city: string;
    phone: string;
    email: string;
}

function About(props: Props) {
    return (
        <div className={styles.about}>
            <p><b>Дата рождения:</b> {props.date}</p>
            <p><b>Город:</b> {props.city}</p>
            <p><b>Моб.телефон:</b> {props.phone}</p>
            <p><b>E-mail:</b> {props.email}</p>
        </div>
    );
};

export default function AboutResume() {
    return <About {...resume}/>
};