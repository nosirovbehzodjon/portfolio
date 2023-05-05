import styles from "../../../styles/components/text.module.scss";

const TextGredient = ({ textData }) => {
    return (
        <div className={styles.textG_container}>
            <h1 className={styles[textData.type]}>{textData.text}</h1>
        </div>
    );
};
export default TextGredient;
