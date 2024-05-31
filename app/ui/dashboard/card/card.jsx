import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import {fetchTotalUsers} from "@/app/lib/data";


const Card = async ({ params }) => {
    const totalUsers = fetchTotalUsers;
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
                <span className={styles.title}>Total users</span>
                <span className={styles.number}>{totalUsers()}</span>
                <span className={styles.detail}>
          <span className={styles.positive}></span>

        </span>
            </div>
        </div>
    );
};

export default Card;