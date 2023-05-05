import styles from "../../../styles/components/text.module.scss";
const TextSpecing = ({text}) => {
    return (
        <div className={styles.textS_container}>
            <p>{text}</p>
        </div>
    );
};
export default TextSpecing;
