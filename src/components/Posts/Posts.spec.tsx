import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Posts } from "../Posts";

// Mock dos dados de exemplo para o componente Posts
const mockData = {
  title: "Título do Post",
  description: "Descrição do Post",
  dataAuthor: "Autor do Post",
};

describe("Posts Component", () => {
  it("renders correctly with provided data", () => {
    const { getByText } = render(
      <Posts
        idUser={1}
        title={mockData.title}
        description={mockData.description}
        dataAuthor={mockData.dataAuthor}
        onPressAction={() => {}}
      />
    );

    const titleElement = getByText(mockData.title);
    const descriptionElement = getByText(mockData.description);
    const authorElement = getByText(`Publicado por: ${mockData.dataAuthor}`);

    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
    expect(authorElement).toBeTruthy();
  });

  it("triggers onPressAction when the container is pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Posts
        idUser={1}
        title={mockData.title}
        description={mockData.description}
        dataAuthor={mockData.dataAuthor}
        onPressAction={onPressMock}
      />
    );

    const container = getByTestId("posts-container");
    fireEvent.press(container);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
