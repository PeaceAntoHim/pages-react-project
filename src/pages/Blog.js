import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);


    /* Fetch the api */
    useEffect(function () {
        async function getArticles() {
            const request = await fetch(
                'https://api.spaceflightnewsapi.net/v3/articles'
            );
            const response = await request.json();

            setArticles(response);
            // console.log(response);
            setLoading(false);
        }
        getArticles();
    }, []);

    return  (
        <section>
            <h1>Blog Page</h1>
            <p>Berikut ini adalah tulisan-tulisan ku tapi boong</p>
            {loading && (<i>Loading articles ... </i>)}
                {!loading && (
                    <div>
                        {articles.map(function(article) {
                            return(
                                <article key={article.id}>
                                    <h2>
                                        <Link to={`/blog/${article.id}`}>{article.title}></Link>
                                    </h2>
                                    <date>
                                        {new Date(article.publishedAt).toLocaleDateString()}
                                    </date>
                                </article>
                            )
                        })};
                    </div>
                )};
        </section>

    )
}