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
        <span className={style.page__header_text}>広告企画制作会社において、フロントエンドエンジニア（チーフ）として活躍しています。</span>
                  <span className={style.page__header_tag}>役割</span><span className={style.page__header_text}>フォーマットコーディング、CMS構築、案件采配、ディレクション、協力会社との折衝、新人教育などを担当しています。</span>
                  <span className={style.page__header_tag}>技術面</span><span className={style.page__header_text}>Wordpress、MovableType、PowerCMS、ハートコアなどのCMSを構築することができます。また、汎用性を考慮したCSS設計や迅速なコーディングに自信があります。</span>
                  <span className={style.page__header_tag}>ディレクション・マネージング</span><span className={style.page__header_text}>案件の采配においては、クオリティを維持しながら、技術レベルや教育の観点も考慮しています。プランナーや関係者からの相談に適切に対応し、柔軟なアドバイスを提供できると自信があります。また、自身もディレクションを行い、相談しやすい雰囲気を作ることを長所としています。
                  <br />このように、プロジェクト全体の成功に向けて効果的なリーダーシップを発揮し、チームのモチベーションと生産性を向上させることに貢献しています。</span>
                  <span className={style.page__header_tag2}>キャリア展望</span><span className={style.page__header_text}>フロントエンドだけでなくバックエンドなどWeb開発における技術を幅広く習得し、総合的な知識を持ってUXを向上させる提案・アドバイスができるようになりたいです。<br/>また、マネージング力も機会があれば、今までの経験を活かして積極的に伸ばしていきたいです。</span>
                  <span className={style.page__header_tag2}>余談</span><span className={style.page__header_text}>ReactやNext.jsなどモダンな技術へも興味があり、実務では使用していませんがこのポートフォリオをNext.js&microCMSで作成してみました。</span>

        </p>
        {/* <div className={style.page__box}>
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
        </div> */}
        <div className={style.page__box}>
          <h3 className="Title_2 en">Skill</h3>
          <p>
          HTML/CSS(Sass)/Javascript/jQuery/React/Next.js/Typescript/php/Git/Gulp
           <br />
           MovableType/WordPress/PowerCMS/ハートコア/microCMS
          </p>
        </div>
        <div className={style.page__box}>
          <h3 className="Title_2 en">資格</h3>
          <p>
          AWS Certified Cloud Practitioner（2024-04）
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
