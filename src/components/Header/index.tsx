import {resume} from "../../data/resume.ts";
import styles from "./Header.module.css";

interface Props {
    dreamJob: string;
    nameRu: string;
    nameEn: string;
}

function Header(props: Props) {
    return (
        <header className={styles.header}>
            <h1 className={styles.dreamJob}>{props.dreamJob}</h1>
            <p className={styles.nameRu}>{props.nameRu}</p>
            <p className={styles.nameEn}>({props.nameEn})</p>
        </header>
    );
};

export default function HeaderResume() {
    return <Header {...resume}/>
};
