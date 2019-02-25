import React from "react";
import styled from "styled-components";

const Logo = props => (
  <Container
    style={{
      shadowOffset: { width: 0, height: 5 },
      shadowColor: "rgba(0,0,0,0.15)",
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 3,
      /* background color must be set */
      backgroundColor: "#fff"
    }}
  >
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15); */
  align-items: center;
  margin: 4px 8px;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  font-size: 17px;
  font-weight: 600;
  margin-left: 8px;
`;
