import Link from 'next/link';
import Head from 'next/head';

export default function Header(props) {
  return (
    <div>
      <header className="header">
        <Head>
          <title>{props.title}</title>
          <link rel="stylesheet" href="/styles/page.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          />
          <link
            rel="shortcut icon"
            href="/img/favicon.ico"
            type="image/x-icon"
          />
        </Head>
        <Link href="/">
          <a>
            <img src="/img/logo.svg" alt="TreinaCook Logo" />
          </a>
        </Link>
      </header>
    </div>
  );
}
