import React from "react";
import { Main ,Call, FlexWrapperOne, Icon, Location, MakeACall, Title } from "./PharmacyDataElements"
const PharmacyData = ({name,phoneNumber,location}) => {
  return (
    <Main>
      <FlexWrapperOne>
        <Title>
          {name}
        </Title>
        <Call backgroundColor="#5bd467">
          <MakeACall>{phoneNumber}</MakeACall>
        </Call>
      </FlexWrapperOne>
      <FlexWrapperOne>
        <Icon
          alt=""
          src="https://static.overlay-tech.com/assets/aad05a01-be19-4331-8eb2-f077f5c87e7a.png"
        />
        <Location>
          {location}
        </Location>
      </FlexWrapperOne>
    </Main>
  );
};

export default PharmacyData;