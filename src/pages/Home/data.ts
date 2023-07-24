import { IPostsProps } from "~/utils/interface";

export interface IHome {
  dataPosts: IPostsProps[];
}

export interface IHomeLayout extends IHome {
  dataPosts: IPostsProps[];
}