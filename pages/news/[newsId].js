const Details = ({ news }) => {
    console.log(news);
    return (
        <div>
            <h1>{news.title}</h1>
        </div>
    );
};

export default Details;

export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    const paths = data.map((post) => ({
        params: { newsId: post.id.toString() },
    }));
    return { paths, fallback: false };
}
export async function getStaticProps(context) {
    const newsId  = context.params.newsId;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${newsId}`
    );
    const data = await response.json();
    return {
        props: {
            news: data,
        },
    };
}
