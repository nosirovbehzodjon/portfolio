import TextSpecing from "../src/components/text/textSpecing";
import TextGredient from "../src/components/text/textGredient";
import styles from "../styles/pages/home.module.scss";
function Home() {
    return (
        <div>
            <header className={styles.home__container}>
                <TextSpecing text={"this is my website"} />
                <TextGredient
                    textData={{
                        text: "behzod",
                        type: "large",
                    }}
                />
            </header>
        </div>
    );
}

export default Home;
