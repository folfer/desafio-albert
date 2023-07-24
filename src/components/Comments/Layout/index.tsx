import * as React from "react";

import * as S from "./styles";
import { ICommentsLayout } from "../data";

export const Comments = ({ title, dataAuthor }: ICommentsLayout) => (
  <S.Container>
    <S.Title numberOfLines={3} ellipsizeMode="tail">
      {title}
    </S.Title>
    <S.SeeMore>Ver mais</S.SeeMore>
    <S.Author>Publicado por: {dataAuthor}</S.Author>
  </S.Container>
);
