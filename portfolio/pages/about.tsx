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
        広告企画制作会社でフロントエンドエンジニア（役職：チーフ）をしています。<br />
        CMSなどでシステム構築する際にロジックを考えてコーディングするのが好きです。<br />
        実務では使用していませんが、ReactやNext.jsなどモダンな技術を使用して、<br />
        WEB開発（アプリ・サイト）に携わりたいと考えています。<br />
        （このポートフォリオもNext.jsとmicroCMSを使用しています。）<br />
        また、バックエンドやAWSなどフロント以外のことも扱えるようになっていきたいです。
        </p>
        <div className={style.page__box}>
          <h3 className="Title_2 en">経歴</h3>
          <dl className={style.page__history}>
            <dt>2018年3月卒業</dt>
            <dd>東京農業大学 生物産業学部 食品香粧学科</dd>
            <dt>2018年4月 ~ 2019年12月</dt>
            <dd>敷島製パン株式会社 生産職（一般職）</dd>
            <dt>2020年1月 ~ 2020年7月</dt>
            <dd>東京デザインプレックス研究所 WEBデザインコース（学生）</dd>
            <dt>2020年8月 ~ 2020年12月</dt>
            <dd>株式会社ボタン（一般職）</dd>
            <dt>2021年1月 ~ 現職</dt>
            <dd>株式会社WAVE（チーフ）</dd>
          </dl>
        </div>
        <div className={style.page__box}>
          <h3 className="Title_2 en">Skill</h3>
          <p>
            HTML/CSS(SASS)/Javascript/Typescript/jQuery/React/Next.js
            <br />
            Movable Type/WordPress/HeartCore/microCMS
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
          <p>自然が好きなので、よくキャンプに行きます。特に秋〜冬の時期に行くのが景色も空気も澄んでいてリフレッシュできます。
            <br />場所は、富士山周辺のキャンプ場が多いです。
          </p>
          <p>■コーヒー</p>
          <p>家でも豆から挽いて入れています。苦味が強いものより、酸味が強い方が好みです。</p>
        </div>
      </div>
    </Layout>
  );
};

export default about;
