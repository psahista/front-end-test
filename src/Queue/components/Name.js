import styled from "styled-components";
import React from "react";

const header = styled.h1`
  font-size: 16px;
  color: darkslategrey;
`;
export default function Name({ name }) {
  return <header>{name}</header>;
}
