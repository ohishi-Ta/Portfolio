import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import style from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import HeaderMenu from "../components/HeaderMenu";

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);

  const toggleVisibility = () => {
    window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsShowLoading(true);
    }, 500);
  });

  return (
    <>
      <Layout>
        <HeaderMenu
          isHamburgerMenu={isHamburgerMenu}
          setIsHamburgerMenu={setIsHamburgerMenu}
        />
        <div
          className={style.home__Inner}
          data-menu={isHamburgerMenu ? "open" : "clouse"}
        >
          <div className={style.Circle_box}>
            <div
              className={`${style.Circle_1} ${isVisible ? "active" : ""}`}
            ></div>
            <div className={style.Circle_2}></div>
            <div className={style.Circle_3}></div>
            <div className={style.Circle_4}></div>
            <div className={style.Circle_5}></div>
            <div className={style.Circle_6}></div>
          </div>
          <div
            className={`${style.home__mvTitle} contents ${
              isVisible ? "active" : ""
            }`}
            data-load={isShowLoading ? "action" : ""}
          >
            <div className={style.home__mvTitle_box}>
              <div className={style.home__mvTitle_inner}>
                <h1 className={`${style.home__mvTitle_text} en`}>
                  <span className="mvTitle_1">T</span>
                  <span className="mvTitle_2">a</span>
                  <span className="mvTitle_3">k</span>
                  <span className="mvTitle_4">a</span>
                  <span className="mvTitle_5">t</span>
                  <span className="mvTitle_6">o</span>
                  <span className="mvTitle_blank"></span>
                  <span className="mvTitle_7">O</span>
                  <span className="mvTitle_8">i</span>
                  <span className="mvTitle_9">s</span>
                  <span className="mvTitle_10">h</span>
                  <span className="mvTitle_11">i</span>
                  <br />
                  <span className="mvTitle_12">P</span>
                  <span className="mvTitle_13">o</span>
                  <span className="mvTitle_14">r</span>
                  <span className="mvTitle_15">t</span>
                  <span className="mvTitle_16">f</span>
                  <span className="mvTitle_17">o</span>
                  <span className="mvTitle_18">l</span>
                  <span className="mvTitle_19">i</span>
                  <span className="mvTitle_20">o</span>
                  <span className="mvTitle_blank"></span>
                  <span className="mvTitle_21">S</span>
                  <span className="mvTitle_22">i</span>
                  <span className="mvTitle_23">t</span>
                  <span className="mvTitle_24">e</span>
                </h1>
                <div className={style.home__mvTitle_profile}>
                  <p className={`${style.home__mvTitle_name} en`}>
                    Takato Oishi
                    <span>大石 崇登</span>
                  </p>
                  <p className={style.home__mvTitle_birth}>
                    1996年1月14日生 静岡県出身
                  </p>
                  <p className={`${style.home__mvTitle_job} en`}>
                    Web Engineer
                  </p>
                  <p className={style.home__Lead_skill}>
                    <span className={style.home__Lead_skill_title}>Skills</span>
                    HTML/CSS(Sass)/Javascript/jQuery/React/Next.js/Typescript/php/Git/Gulp
                    <br />
                    MovableType/WordPress/PowerCMS/ハートコア/microCMS
                    <br />
                    <span className={style.home__Lead_skill_title}>資格</span>
                    AWS Certified Cloud Practitioner（2024-04）
                  </p>
                </div>
              </div>
              <div className={style.home__Lead_inner}>
                <p className={style.home__Lead}>
                  <span className={style.home__Lead_text}>広告企画制作会社において、フロントエンドエンジニア（チーフ）として活躍しています。</span>
                  <span className={style.home__Lead_tag}>役割</span><span className={style.home__Lead_text}>フォーマットコーディング、CMS構築、案件采配、ディレクション、協力会社との折衝、新人教育などを担当しています。</span>
                  <span className={style.home__Lead_tag}>技術面</span><span className={style.home__Lead_text}>Wordpress、MovableType、PowerCMS、ハートコアなどのCMSを構築することができます。また、汎用性を考慮したCSS設計や迅速なコーディングに自信があります。</span>
                  <span className={style.home__Lead_tag}>ディレクション・マネージング</span><span className={style.home__Lead_text}>案件の采配においては、クオリティを維持しながら、技術レベルや教育の観点も考慮しています。プランナーや関係者からの相談に適切に対応し、柔軟なアドバイスを提供できると自信があります。また、自身もディレクションを行い、相談しやすい雰囲気を作ることを長所としています。
                  <br />このように、プロジェクト全体の成功に向けて効果的なリーダーシップを発揮し、チームのモチベーションと生産性を向上させることに貢献しています。</span>
                  <span className={style.home__Lead_tag2}>キャリア展望</span><span className={style.home__Lead_text}>フロントエンドだけでなくバックエンドなどWeb開発における技術を幅広く習得し、総合的な知識を持ってUXを向上させる提案・アドバイスができるようになりたいです。<br/>また、マネージング力も機会があれば、今までの経験を活かして積極的に伸ばしていきたいです。</span>
                  <span className={style.home__Lead_tag2}>余談</span><span className={style.home__Lead_text}>ReactやNext.jsなどモダンな技術へも興味があり、実務では使用していませんがこのポートフォリオをNext.js&microCMSで作成してみました。</span>
                </p>
              </div>
            </div>
            <div
              className={`${style.home__Link} sp ${isVisible ? "active" : ""}`}
            >
              <div className={style.home__Button}>
                <div className={style.home__Button_item}>
                  <Link href="/about" className="en">
                    About
                  </Link>
                </div>
                <div className={style.home__Button_item}>
                  <Link href="/works" className="en">
                    Works
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${style.home__Link} pc ${isVisible ? "active" : ""}`}
          >
            <div className={style.home__Button}>
              <div className={style.home__Button_item}>
                <Link href="/about" className="en">
                  About
                </Link>
              </div>
              <div className={style.home__Button_item}>
                <Link href="/works" className="en">
                  Works
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`${style.scroll_anime_box} pc ${
              isVisible ? "active" : ""
            }`}
          >
            <span className="en">Scroll</span>
            <div className={`${style.scroll_anime}`}></div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
