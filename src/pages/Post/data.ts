import { ICommentsProps } from "~/utils/interface";

export interface IParams {
  params: {
    id: number;
    title: string;
    description: string;
  }
}

export interface IPost {
  route: IParams;
}

export interface IPostLayout extends IPost {
  dataComments?: ICommentsProps[];
  title: string;
  description: string;
  authorName: string;
}