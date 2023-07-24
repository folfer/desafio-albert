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
  font-size: 19px;
  font-weight: 700;
`;

export const Description = styled.Text`
  width: 300px;

  font-size: 14px;
  font-weight: 600;
  
  margin-top: 20px;

  color: gray;
`;

export const Author = styled.Text`
  font-size: 12px;

  margin-top: 20px;

  color: gray;
`;