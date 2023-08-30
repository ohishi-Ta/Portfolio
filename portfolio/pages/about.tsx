import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import style from "../styles/Page.module.scss";

const about = () => {
  return (
    <Layout>
      <PageHeader pageTitle={"About"} />
      <div className={style.page__inner}>
        <h2 className="Title_1 en">
          Takato Oishi<span>大石 崇登</span>
        </h2>
        <p>1996年1月14日生　静岡県出身</p>
        <p>
          広告制作会社（Web・DTP）でフロントエンドエンジニアをしています。
          <br />
          CMS構築やWebアプリ開発などロジックを考えてコーディングするのが好きです。
          <br />
          CMSはMovable Typeをよく使用しています。
        </p>
        <div className={style.page__box}>
          <h3 className="Title_2 en">Skill</h3>
          <p>
            HTML/CSS(SCSS)/Javascript/Typescript/jQuery/React/Next.js
            <br />
            Movable Type/WordPress/HeartCore
          </p>
        </div>
        <div className={style.page__box}>
          <h3 className="Title_2 en">Blog</h3>
          <p>
            <a
              href="https://zenn.dev/t_oishi"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://zenn.dev/t_oishi
            </a>
          </p>
        </div>
        <div className={style.page__box}>
          <h3 className="Title_2 en">Hobby</h3>
          <p>■キャンプ</p>
          <p>■コーヒー</p>
        </div>
      </div>
    </Layout>
  );
};

export default about;
