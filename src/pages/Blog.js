import { useEffect, useState } from 'react';

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
                            return <article>{article.title}</article>;
                        })};
                    </div>
                )};
        </section>

    )
}