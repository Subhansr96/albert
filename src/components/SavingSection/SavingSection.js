import React, { useState } from "react";
import {
  ImageWrapper,
  SavingLeftWrapper,
  SavingMainText,
  SavingMainWrapper,
  SavingRightWrapper,
  SavingSubText,
  TextWrapper,
  IconWrapper,
  MobileSavingWrapper,
} from "./SavingSection.styles";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import sample from "../../static/images/sample_image.jpg";
const SavingSection = () => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <SavingMainWrapper>
        <SavingLeftWrapper>
          <ImageWrapper src={sample}></ImageWrapper>
        </SavingLeftWrapper>
        <SavingRightWrapper
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <TextWrapper>
            <SavingMainText>Saving</SavingMainText>
            <SavingSubText>
              Automatic saving based on your income, spending, and bills.
            </SavingSubText>
          </TextWrapper>
          <IconWrapper>
            {hover ? (
              <IoMdAddCircle size="40px" color="#333" />
            ) : (
              <IoMdAddCircleOutline size="40px" color="#333" />
            )}
          </IconWrapper>
        </SavingRightWrapper>
        <MobileSavingWrapper>
          
          <IconWrapper>
            {hover ? (
              <IoMdAddCircle size="40px" color="#333" />
            ) : (
              <IoMdAddCircleOutline size="40px" color="#333" />
            )}
          </IconWrapper>
        </MobileSavingWrapper>
      </SavingMainWrapper>
    </div>
  );
};

export default SavingSection;
