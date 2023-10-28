import Layout from "../components/layout";
import hello from "../lib/hello";
import utilStyles from '../styles/utils.module.css';

export default function Hello({ text }) {
    return (
        <Layout>
            <h1 className={utilStyles.heading2Xl}>{text}</h1>
        </Layout>
    );
}

export async function getStaticProps() {
    const data = await hello();

    return {
        props: {
            text: data.text,
        },
    };
}
