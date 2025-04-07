import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Main = styled.div`
  height: 290px;
  // width: 290px;
  background-color: grey;
  border-top-left-radius: 0.2em;
  border-top-right-radius: 0.2em;
`;
export default function ProfilePicture({ email }) {
  const [gravatarData, setGravatarData] = useState(null);
  useEffect(() => {
    fetch("/api/profile/" + email).then((response) => {
      response.json();
      setGravatarData(response);
    });

    console.log("Hiii", email);
  }, []);
  return (
    <Main>
      <img src={gravatarData?.url} />
    </Main>
  );
}
