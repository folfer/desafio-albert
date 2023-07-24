import * as React from "react";

import * as S from "./styles";
import { IHomeLayout } from "../data";
import { Posts } from "~/components/Posts";
import { FlatList } from "react-native";
import {
  NavigationContainerRef,
  useNavigation,
} from "@react-navigation/native";
import { RootStackParamList } from "~/utils/interface";

export const Home = ({ dataPosts }: IHomeLayout) => {
  const navigation: NavigationContainerRef<RootStackParamList> =
    useNavigation();

  return (
    <S.Container>
      <S.Title>Publicações</S.Title>
      <S.SubTitle>Veja a lista completa de posts</S.SubTitle>
      <FlatList
        data={dataPosts}
        renderItem={({ item }) => (
          <Posts
            title={item.title}
            description={item.body}
            idUser={item.userId}
            onPressAction={() =>
              navigation.navigate("Post", {
                id: item.id,
                title: item.title,
                description: item.body,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </S.Container>
  );
};
