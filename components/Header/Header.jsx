import Head from 'next/head'

function Header ({ namePage }) {
    return (
        <Head>
            <title>{namePage}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/VDlogo.ico" />
        </Head>
    )
}
export default Header;

    
    
    