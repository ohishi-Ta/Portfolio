// /types/blog.ts
export type Image = {
  url: string;
  height: number;
  width: number;
}

export type Blog = {
  id: string;
  body: string;
  title: string;
  client: string;
  tags: Tag[];
  image: Image;
  images: Image;
  url:string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Tag = {
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
