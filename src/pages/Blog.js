import { useEffect, useState } from 'react';

export default function Blog() {
    const [articels, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);


    /* Fetch the api */
    useEffect(function () {
        async function getArticles() {
            const request = await fetch(
                'https://api.spaceflightnewsapi.net/v3/articles'
            );
            const response = await request.json();

            setArticles(response);
            console.log(response);
        }
        getArticles();
    }, []);

    return  <h1>Blog Page</h1>;
}