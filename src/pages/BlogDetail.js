import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development"; 

export default function BlogDetail() {
    const params = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(function() {
        async function getArticle() {
            const request = await fetch(
                `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
            );
            const response = await request.json();
            
            setArticle(response);
            setLoading(false);
        } 
        getArticle();
    }, 
        [params]
    );

    return(
        <section>
            {loading ? (
                <i>Loading Article</i>
            ) : (
                <article>
                    <h1>{article.title}</h1>
                        <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                            <img src={article.imageUrl} alt={article.title} />
                                <p>{article.summary}</p>
                                    <p>
                                    Source: {'  '} 
                                    <a href={article.url} target="_blank" rel="noreferrer">
                                {article.newsSite}
                            </a>
                        </p> 
                </article>
            )}
           
        </section>
    );
}