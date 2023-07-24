import React from "react";
import { render } from "@testing-library/react-native";
import { Comments } from "./Layout";

const mockData = {
  idUser: 1,
  title: "title",
  dataAuthor: "author",
};

describe("Comments", () => {
  test("renders the component correctly", () => {
    const { getByText } = render(
      <Comments
        idUser={mockData.idUser}
        title={mockData.title}
        dataAuthor={mockData.dataAuthor}
      />
    );

    const titleElement = getByText(mockData.title);
    const authorElement = getByText(`Publicado por: ${mockData.dataAuthor}`);

    expect(titleElement).toBeDefined();
    expect(authorElement).toBeDefined();
  });

  test("check if the text 'Ver mais' is present", () => {
    const { getByText } = render(
      <Comments
        idUser={mockData.idUser}
        title={mockData.title}
        dataAuthor={mockData.dataAuthor}
      />
    );

    const seeMoreElement = getByText("Ver mais");
    expect(seeMoreElement).toBeDefined();
  });
});
