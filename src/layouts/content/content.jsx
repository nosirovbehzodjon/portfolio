import styles from "../../../styles/layouts/content.module.scss";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaTelegramPlanes } from "react-icons/fa";
import Social from "../social/socila.jsx";

import { social, page } from "./data";
const Content = ({ children }) => {
    return (
        <header className={styles.content}>
            <main className={styles.main}>
                <Social styleData={"social_left"} data={social} />
                <Social styleData={"social_right"} data={page} />
                {children}
            </main>
        </header>
    );
};
export default Content;
