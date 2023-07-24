import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  padding: 20px 20px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  background-color: #ffffff;

  margin-top: 20px;

  border-radius: 12px;
`;

export const Title = styled.Text`
  min-width: 300px;

  font-size: 14px;
  font-weight: 600;

  color: gray;
`;

export const SeeMore = styled.Text`
  font-size: 14px;

  align-self: flex-end;

  margin-top: 10px;

  color: blue;
`;

export const Author = styled.Text`
  font-size: 12px;

  margin-top: 10px;

  color: gray;
`;