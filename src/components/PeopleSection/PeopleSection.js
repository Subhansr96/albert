import React, { useState } from "react";
import {
  ImageWrapper,
  PeopleLeftWrapper,
  PeopleMainText,
  PeopleMainWrapper,
  PeopleRightWrapper,
  PeopleSubText,
  TextWrapper,
  IconWrapper,
  MobilePeopleWrapper,
} from "./PeopleSection.styles";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import people from "../../static/images/people_image.png";
const PeopleSection = () => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <PeopleMainWrapper>
        <PeopleLeftWrapper>
          <ImageWrapper src={people}></ImageWrapper>
        </PeopleLeftWrapper>
        <PeopleRightWrapper
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <TextWrapper>
            <PeopleMainText>Advice from real people</PeopleMainText>
            <PeopleSubText>
              Ask our Genuises anything money.
            </PeopleSubText>
          </TextWrapper>
          <IconWrapper>
            {hover ? (
              <IoMdAddCircle size="40px" color="#ffc700" />
            ) : (
              <IoMdAddCircleOutline size="40px" color="#ffc700" />
            )}
          </IconWrapper>
        </PeopleRightWrapper>
        <MobilePeopleWrapper>
          
          <IconWrapper>
            {hover ? (
              <IoMdAddCircle size="40px" color="#333" />
            ) : (
              <IoMdAddCircleOutline size="40px" color="#333" />
            )}
          </IconWrapper>
        </MobilePeopleWrapper>
      </PeopleMainWrapper>
    </div>
  );
};

export default PeopleSection;
