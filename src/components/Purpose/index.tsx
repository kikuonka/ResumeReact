import {resume} from "../../data/resume.ts";
import styles from "./Purpose.module.css";

interface Props {
    purpose: string;
}

function Purpose(props: Props) {
    return (
        <div className={styles.purpose}>
            <p className={styles.purposeText}><b>Цель:</b> {props.purpose}</p>
        </div>
    );
};

export default function PurposeResume() {
    return <Purpose {...resume}/>
};
