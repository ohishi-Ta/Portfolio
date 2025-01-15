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
          <span className={style.page__header_text}>
            広告企画制作会社において、フロントエンドエンジニアとしてWebサイトのコーディングやCMSの構築を主に担当しています。
          </span>
          <span className={style.page__header_tag}>経験してきた役割</span>
          <span className={style.page__header_text}>
            フォーマットコーディング、CMS構築、案件采配、ディレクション、協力会社との折衝、新人教育など。
          </span>
          <span className={style.page__header_tag}>技術面</span>
          <span className={style.page__header_text}>
            Wordpress、MovableType、PowerCMS、PowerCMSX、HeartCoreなどのCMS構築やCMSの仕様書や設計書を作成することができます。
            <br />
            コーディング面では、汎用性を考慮したCSS設計やファイル構成でコーディングができます。
            <br />
            Udemyや資格取得、技術本などを通じて、TerraformやAWSリソースの使用方法、ReactやNext.jsを使用したWeb開発を学びました。このポートフォリオはNext.jsで作成しました。
          </span>
          <span className={style.page__header_tag}>
            ディレクション・マネージング
          </span>
          <span className={style.page__header_text}>
            案件の采配においては、クオリティを維持しながら、技術レベルや教育の観点も考慮しています。ディレクターや関係者からの相談に適切に対応し、柔軟なアドバイスを提供できます。また、自身もディレクションを行い、相談しやすい雰囲気を作ることを長所としています。
            <br />
            このように、プロジェクト全体の成功に向けて効果的なリーダーシップを発揮し、チームのモチベーションと生産性を向上させることに貢献しています。
          </span>
          <span className={style.page__header_tag2}>キャリア展望</span>
          <span className={style.page__header_text}>
            これまでフロントエンドをメインにしてきましたが、協力会社とのやり取りやDNS関連業務（DNS切り替えや証明書取得）、またCMS構築におけるデータ設計や保守・拡張性を考慮した構築経験を通じてインフラの技術を学ぶことにとても楽しさを実感しました。これを機に、インフラの知識を本格的に習得し、スキルを高めたいと考えています。また、資格取得など具体的な目標に向けて努力することが自分の長所でもあります。インフラ分野には取得できる資格が多く存在するため、これからも積極的に勉強を進めていきます。
            <br />
            インフラ分野の中でも現在広く普及しているクラウド技術に興味を持っており、Terraformなどを活用したIaCに強いクラウドエンジニアを目指しています。さらに、AWSにとどまらずマルチクラウドにも対応できるスキルを身につけ、社内外から信頼される存在として成長していきたいと考えています。
          </span>
        </p>
        <div className={style.page__box}>
          <h3 className="Title_2 en">経歴</h3>
          <dl className={style.page__history}>
            <dt>2018年3月卒業 </dt>
            <dd>東京農業大学 生物産業学部 食品香粧学科</dd>
            <dt>2018年4月 ~ 2019年12月</dt>
            <dd>敷島製パン株式会社 生産職（一般職）</dd>
            <dt>2020年1月 ~ 2020年7月</dt>
            <dd>東京デザインプレックス研究所 WEBデザインコース（学生）</dd>
            <dt>2020年8月 ~ 2020年12月</dt>
            <dd>株式会社ボタン（一般職）</dd>
            <dt>2021年1月 ~ 2024年8月</dt>
            <dd>株式会社WAVE（チーフ）</dd>
            <dt>2024年9月 ~ 現在</dt>
            <dd>株式会社コンセント</dd>
          </dl>
        </div>
        <div className={style.page__box}>
          <h3 className="Title_2 en">Skill</h3>
          <p>
            ■フロントエンド
            <br />
            　HTML/CSS(Sass)/Javascript/jQuery/React/Next.js/Typescript
            <br />
            ■バックエンド
            <br />
            　php
            <br />
            ■CMS
            <br />
            　MovableType/WordPress/PowerCMS/PowerCMSX/HeartCore/microCMS
            <br />
            ■インフラ
            <br />
            　AWS/Terraform
            <br />
            ■その他
            <br />
            　Git/Gulp
          </p>
        </div>
        <div className={style.page__box}>
          <h3 className="Title_2 en">資格</h3>
          <p>
            AWS Certified Cloud Practitioner（2024-04）
            <br />
            AWS Certified Solutions Architect - Associate(2024-12)
            <br />
            Linuc Lv.1(2024-12)
          </p>
        </div>
        <div className={style.page__box}>
          <h3 className="Title_2 en">Hobby</h3>
          <p>■キャンプ</p>
          <p>
            自然が好きなので、よくキャンプに行きます。特に秋〜冬の時期に行くのが景色も空気も澄んでいてリフレッシュできます。
            <br />
            場所は、富士山周辺のキャンプ場が多いです。
          </p>
          <p>■コーヒー</p>
          <p>
            家でも豆から挽いて入れています。苦味が強いものより、酸味が強い方が好みです。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default about;
