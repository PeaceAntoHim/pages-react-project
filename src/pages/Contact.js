import { useEffect } from "react";

export default function Contact() {
    useEffect(function() {
        document.title = 'Contact';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Contact Page</h1>
            <p className="section-description">Kamu dapat menghubungiku di bawah ini: </p>
                <ul>
                    <li>WA: 085217095294</li>
                    <li>Email: stefanusfranssebastian@gmail.com</li>
                </ul>
                <p>Atau kamu dapat melihatku di sosmed: </p>
                <li>Facebook: stefanufranssebstian</li>
                <li>Instagram: frans_sbstian</li>
        </section>
    );
}