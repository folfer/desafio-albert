import * as React from "react";
import { Ionicons } from "@expo/vector-icons";

import * as S from "./styles";
import { IPostLayout } from "../data";
import { FlatList } from "react-native";
import { Comments } from "~/components/Comments";
import { useNavigation } from "@react-navigation/native";

export const Post = ({
  dataComments,
  title,
  description,
  authorName,
}: IPostLayout) => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <Ionicons
        name="arrow-back-sharp"
        size={44}
        color="black"
        testID="back-button"
        onPress={() => navigation.goBack()}
      />
      <S.Title>{title}</S.Title>
      <S.Author>Publicado por: {authorName}</S.Author>
      <S.Description>{description}</S.Description>
      <S.SubTitle>Comentários</S.SubTitle>
      <FlatList
        data={dataComments}
        renderItem={({ item }) => (
          <Comments title={item.body} idUser={item.id} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </S.Container>
  );
};
