import { useEffect } from 'react';

export default function Profile() {
    useEffect(function() {
        document.title = 'Profile';
    });

    return (
        <section className="section">
            <h1 className="section-title">Profile page</h1>
            <p clssName="section-description">Halo nama saya adalah frans sebastian saya lulus dari universitas harvard/Binus</p>
        </section>
    );
}