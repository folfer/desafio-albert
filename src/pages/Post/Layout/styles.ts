import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  
  padding: 40px 20px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  background-color: #eef1f6;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;

  margin-top: 50px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;

  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
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