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
  const blog = await client.get({
    endpoint: "blog",
    queries: {
      limit: 99,
      filters: "cat[contains]WEBサイト",
    },
  });
  const blog_app = await client.get({
    endpoint: "blog",
    queries: {
      limit: 99,
      filters: "cat[contains]WEBアプリ",
    },
  });
  const tag = await client.get({
    endpoint: "tag",
    queries: {
      limit: 20,
    },
  });
  return {
    props: {
      blogs: blog.contents,
      blogs_app: blog_app.contents,
      tags: tag.contents,
    },
  };
};

// Props（blogsとtags）の型
type Props = {
  blogs: Blog[];
  blogs_app: Blog[];
  tags: Tag[];
};

const works: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
  blogs_app,
}: Props) => {
  console.log(blogs);
  return (
    <Layout>
      <PageHeader pageTitle={"Works"} />
      <div className={style.page__inner}>
        <h3 className="Title_2 en">自学</h3>
        <div className={style.page__works_btn}>
          <Link href="https://zenn.dev/t_oishi" target="_blank">Zenn</Link>
        </div>
        <ul className={style.page__works_list}>
          {blogs_app.map((blog) => (
            <li className={style.page__works_item} key={blog.id}>
              <Link href={`/works/${blog.id}`}>
                <figure>
                  {blog.image ? (
                    <Image
                      src={blog.image.url}
                      width={blog.image.width}
                      height={blog.image.height}
                      alt="サムネイル"
                    />
                  ) : (
                    <Image src="" alt="No Image" />
                  )}
                </figure>
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
          <h3 className="Title_2 en">Webサイト</h3>

          <ul className={style.page__works_list}>
            {blogs.map((blog) => (
              <li className={style.page__works_item} key={blog.id}>
                <Link href={`/works/${blog.id}`}>
                  <figure>
                    {blog.image ? (
                      <Image
                        src={blog.image.url}
                        width={blog.image.width}
                        height={blog.image.height}
                        alt="サムネイル"
                      />
                    ) : (
                      <Image src="" alt="No Image" />
                    )}
                  </figure>
                  {/* <p className={style.item_subtitle}>{blog.client}</p> */}
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
        </div>
      </div>
    </Layout>
  );
};

export default works;
