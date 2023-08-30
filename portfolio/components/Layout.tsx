import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const currentrouter = router.pathname.split("/").join("");

  return (
    <>
      <Head>
        {/* <title>Takato Oishi Portfolio</title> */}
        <meta name="description" content="Takato Oishi Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700&family=Montserrat:wght@500;600;700&family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <main className={currentrouter === "" ? "home" : currentrouter}>
        {children}
      </main>
    </>
  );
};

export default Layout;
