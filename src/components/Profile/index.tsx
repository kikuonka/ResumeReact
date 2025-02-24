import imgProfile from "../../assets/img.png"
import styles from "./Profile.module.css"

export default function Profile() {
    return (
        <div className={styles.profile}>
            <img className={styles.img} src={imgProfile} alt="profile" />
        </div>
    );
};
