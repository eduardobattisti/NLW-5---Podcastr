//SPA
/**
 *  Surgira efeito somente quando a página é carregada, é quando é feita a solicitação.
 * 
 useEffect(() => {
        fetch("http://localhost:3333/episodes")
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);
 */
//SSR

/**
 *
 */
//SSG

import { useEffect } from "react";
import { Header } from "../components/Header";

export default function Home(props) {
    console.log(props.episodes);

    return <h1>Index</h1>;
}

export async function getStaticProps() {
    const response = await fetch("http://localhost:3333/episodes");
    const data = await response.json();

    return {
        props: {
            episodes: data,
        },
        revalidate: 60 * 60 * 8,
    };
}
