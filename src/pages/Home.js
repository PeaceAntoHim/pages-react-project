import { useEffect } from 'react';

export default function Home() {

    useEffect(function() {
        document.title = 'Home';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Selamat datang di website ku</h1>
            <p clssName="section-description">Halo, selamat datang di website ku. Di sini kamu bisa melihat profileku</p>
        </section>
    );
}