import Link from "next/link";
import Layout from "../components/Layout";
import type { InferGetStaticPropsType, NextPage } from "next";
import PageHeader from "../components/PageHeader";
import style from "../styles/Page.module.scss";
import { client } from "../libs/client";
import type { Blog, Tag } from "../types/blog";
import Image from "next/image";

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blog" });
  const tag = await client.get({ endpoint: "tag" });

  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  };
};

// Props（blogsとtags）の型
type Props = {
  blogs: Blog[];
  tags: Tag[];
};



const works: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
  tags,
}: Props) => {
  return (
    <Layout>
      <PageHeader pageTitle={"Works"} />
      <div className={style.page__inner}>
        <h3 className="Title_2 en">Webサイト</h3>
        <p>
          有名大学の公式サイトや自治体の特設サイトなど立ち上げから数多く経験してきました。
        </p>
        <p>
          CMS構築では、Movable
          Type、Wordpressなどブロックエディタでお客様が簡単に
          更新できるようなシステムも実装しました。
        </p>

        <ul className={style.page__works_list}>
          {blogs.map((blog) => (
            <li className={style.page__works_item} key={blog.id}>
              <Link href={`/works/${blog.id}`}>
                {/* <figure>
                  <Image src={blog.image.url} width={blog.image.width} height={blog.image.height} alt="サムネイル" />
                </figure> */}
                <p className={style.item_subtitle}>{blog.client}</p>
                <p className={style.item_title}>{blog.title}</p>
                <p className={style.item_skill}>
                  {blog.tags.map((tag) => (
                    <span key={tag.id}>{tag.tag}</span>
                  ))}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className={style.page__block}>
          <h3 className="Title_2 en">Webアプリ</h3>
          <p>Udemyなどで勉強しながら、開発しました。</p>

          <ul className={style.page__works_list}>
            <li className={style.page__works_item}>
              <Link href="test">
                <figure>
                  <img src="/dammy.jpg" alt="" />
                </figure>
                <p className={style.item_subtitle}>学校法人 XXXXX</p>
                <p className={style.item_title}>公式サイト</p>
                <p className={style.item_skill}>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Wordpress</span>
                </p>
              </Link>
            </li>
            <li className={style.page__works_item}>
              <Link href="test">
                <figure>
                  <img src="/dammy.jpg" alt="" />
                </figure>
                <p className={style.item_subtitle}>学校法人 XXXXX</p>
                <p className={style.item_title}>公式サイト</p>
                <p className={style.item_skill}>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Wordpress</span>
                </p>
              </Link>
            </li>
            <li className={style.page__works_item}>
              <Link href="test">
                <figure>
                  <img src="/dammy.jpg" alt="" />
                </figure>
                <p className={style.item_subtitle}>学校法人 XXXXX</p>
                <p className={style.item_title}>公式サイト</p>
                <p className={style.item_skill}>
                  <span>HTML</span>
                </p>
              </Link>
            </li>
            <li className={style.page__works_item}>
              <Link href="test">
                <figure>
                  <img src="/dammy.jpg" alt="" />
                </figure>
                <p className={style.item_subtitle}>学校法人 XXXXX</p>
                <p className={style.item_title}>公式サイト</p>
                <p className={style.item_skill}>
                  <span>HTML</span>
                </p>
              </Link>
            </li>
            <li className={style.page__works_item}>
              <Link href="test">
                <figure>
                  <img src="/dammy.jpg" alt="" />
                </figure>
                <p className={style.item_subtitle}>学校法人 XXXXX</p>
                <p className={style.item_title}>公式サイト</p>
                <p className={style.item_skill}>
                  <span>HTML</span>
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default works;
