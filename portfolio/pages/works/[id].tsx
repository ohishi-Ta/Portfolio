import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { client } from "../../libs/client";
import type { Blog } from "../../types/blog";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import style from "../../styles/Page.module.scss";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Link from "next/link";

// APIリクエストを行うパスを指定
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content: Blog) => `/works/${content.id}`);
  return { paths, fallback: false };
};

// microCMSへAPIリクエスト
export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

// Props（blog）の型
type Props = {
  blog: Blog;
};

const BlogId: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog,
}: Props) => {
  console.log();
  return (
    <Layout>
      <PageHeader pageTitle={"Works"} />
      <div className={`${style.page__inner} ${style.page__worksD_inner}`}>
        <div className={style.page__worksD_titlebox}>
          <h1 className={style.page__worksD_title}>{blog.title}</h1>
          <p className={style.page__worksD_client}>{blog.client}</p>
        </div>
        <div className={style.page__worksD_img}>
          <Splide
            options={{
              autoplay: true,
              interval: 3000,
            }}
          >
            {blog.images.map((images) => (
              <SplideSlide>
                <div className={style.page__worksD_imgItem}>
                  {/* <img src={images.url} /> */}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className={style.page__worksD_detailList}>
          <div className={style.page__worksD_detailItem}>
            <span className={style.subtitle}>URL</span>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              {blog.url}
            </a>
          </div>
        </div>
        <div className={style.page__worksD_detailList}>
          <div className={style.page__worksD_detailItem}>
            <span className={style.subtitle}>Skill</span>
            {blog.tags.map((tag) => (
              <span className={style.tag} key={tag.id}>
                {tag.tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className={style.page__worksD_body}
          dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
        ></div>

        <div className={style.page__worksD_btn}>
          <Link href="/works">一覧へ戻る</Link>
        </div>
      </div>
    </Layout>
  );
};

export default BlogId;
