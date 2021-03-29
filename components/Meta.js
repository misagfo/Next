import Head from 'next/head'

export default function Meta({title, keywords}) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="keywords" content={keywords}></meta>
                <meta charSet="utf-8"/>
                <title>{title}</title>
            </Head>
        </div>
    )
}
