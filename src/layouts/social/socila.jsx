import styles from "../../../styles/layouts/social.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Social = ({ data, styleData }) => {
    return (
        <>
            <aside className={styles[styleData]}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            scale: 0.8,
                            opacity: 0,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: 0.4,
                            },
                        },
                    }}
                >
                    <ul>
                        {data?.map((item) => {
                            return (
                                <li key={item.id}>
                                    <Link href={item.path}>
                                        <a>
                                            {
                                                <item.icon
                                                    className={styles.icon}
                                                />
                                            }
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>
            </aside>
        </>
    );
};
export default Social;
