export interface IComments {
  title: string;
  idUser: number;
}

export interface ICommentsLayout extends IComments {
  title: string;
  dataAuthor: string;
}

export interface CustomError {
  message: string;
}