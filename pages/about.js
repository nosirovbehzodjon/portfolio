import TextGredient from "../src/components/text/textGredient";
import styles from "../styles/pages/about.module.scss";

const About = () => {
    return (
        <header className={styles.about_container}>
            <main className={styles.imgBox}></main>
            <main className={styles.textBox}>
                <TextGredient
                    textData={{
                        text: "about",
                        type: "small",
                    }}
                />
                <p>
                    Error: Failed to load jshint library. Please install jshint
                    in your workspace folder using npm install jshint or
                    globally using npm install -g jshint and then reload. at
                    Linter.
                    (c:\Users\Behzodjon\.vscode\extensions\dbaeumer.jshint-0.11.0\jshint-server\out\server.js:336:23)
                    at Generator.throw at rejected
                    (c:\Users\Behzodjon\.vscode\extensions\dbaeumer.jshint-0.11.0\jshint-server\out\server.js:9:65)
                    at processTicksAndRejections
                    (node:internal/process/task_queues:96:5) [Error - 11:24:56]
                    Connection to server got closed. Server will not be
                    restarted.
                </p>
            </main>
        </header>
    );
};
export default About;
