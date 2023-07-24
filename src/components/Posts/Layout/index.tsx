import * as React from "react";

import * as S from "./styles";
import { IPostsLayout } from "../data";

export const Posts = ({
  title,
  description,
  dataAuthor,
  onPressAction,
}: IPostsLayout) => (
  <S.Container testID="posts-container" onPress={onPressAction}>
    <S.Title>{title}</S.Title>
    <S.Description numberOfLines={2} ellipsizeMode="tail">
      {description}
    </S.Description>
    <S.Author>Publicado por: {dataAuthor}</S.Author>
  </S.Container>
);
