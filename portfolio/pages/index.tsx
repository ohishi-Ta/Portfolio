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
                    FrontEndEngineer
                  </p>
                </div>
              </div>
              
              <div className={style.home__Lead_inner}>
                <p className={style.home__Lead}>
                  <span className={style.home__Lead_tag}>Skill</span>
                  <span className={style.home__Lead_text}>
                    ■フロントエンド<br />　
                    　HTML/CSS(Sass)/Javascript/jQuery/React/Next.js/Typescript<br />
                    ■バックエンド<br />
                    　php<br />
                    ■CMS<br />
                    　MovableType/WordPress/PowerCMS/PowerCMSX/HeartCore/microCMS<br />
                    ■インフラ<br />
                    　AWS/Terraform<br />
                    ■その他<br />
                    　Git/Gulp
                    
                    
                    </span>
                  <span className={style.home__Lead_tag}>資格</span><span className={style.home__Lead_text}>AWS Certified Cloud Practitioner（2024-04）<br />AWS Certified Solutions Architect - Associate(2024-12)<br />Linuc Lv.1(2024-12)</span>
                  <span className={style.home__Lead_tag2}><Link href="/about/">About</Link></span>
                  <span className={style.home__Lead_tag2}><Link href="/works/">Works</Link></span>
                  <span className={style.home__Lead_tag2}><Link href="https://zenn.dev/t_oishi" target="_blank">Zenn</Link></span>
                  <span className={style.home__Lead_tag2}><Link href="https://github.com/ohishi-Ta" target="_blank">Github</Link></span>
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
