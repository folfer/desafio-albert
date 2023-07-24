export interface IPosts {
  title: string;
  description: string;
  idUser: number;
  onPressAction: () => void;
  dataAuthor?: string;
}

export interface IPostsLayout extends IPosts {
  title: string;
  description: string;
  dataAuthor: string;
}