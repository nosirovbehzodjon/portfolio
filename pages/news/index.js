const News = ({ articles }) => {
    console.log(articles);
    return (
        <div>
            <h1>bnews</h1>
            {articles?.map((item) => {
                return <div key={item.id}>{item.title}</div>;
            })}
        </div>
    );
};

export default News;

export async function getServerSideProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return {
        props: {
            articles: data,
        },
    };
}
