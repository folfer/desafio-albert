import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./Layout";

const mockDataPosts = [
  {
    id: 1,
    title: "Post 1",
    body: "body 1",
    userId: 1,
  },
  {
    id: 2,
    title: "Post 2",
    body: "body 2",
    userId: 2,
  },
];

test("renders Home component correctly", () => {
  const { getByText } = render(
    <NavigationContainer>
      <Home dataPosts={mockDataPosts} />
    </NavigationContainer>
  );

  expect(getByText("Publicações")).toBeTruthy();
  expect(getByText("Veja a lista completa de posts")).toBeTruthy();
});

test("navigates to Post screen when a post is pressed", () => {
  const { getByText } = render(
    <NavigationContainer>
      <Home dataPosts={mockDataPosts} />
    </NavigationContainer>
  );

  fireEvent.press(getByText("Post 1"));
});
