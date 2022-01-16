import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);


    /* Fetch the api */
    useEffect(function () {
        document.title = 'Blog';
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
        <section className="section">
            <h1 className="section-title">Blog Page</h1>
            <p className="section-description">Berikut ini adalah tulisan-tulisan ku tapi boong</p>
            {loading && (<i>Loading articles ... </i>)}
                {!loading && (
                    <div className="articles">
                        {articles.map(function(article) {
                            return(
                                <article key={article.id} className="article">
                                    <h2 className="article-title">
                                        <Link to={`/blog/${article.id}`}>{article.title}></Link>
                                    </h2>
                                    <time className="article-time">
                                        {new Date(article.publishedAt).toLocaleDateString()}
                                    </time>
                                </article>
                            )
                        })}
                    </div>
                )}
        </section>

    )
}