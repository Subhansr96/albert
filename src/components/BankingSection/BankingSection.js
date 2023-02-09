import {
  BankingMainText,
  BankingSecondaryWrapper,
  BankingSubText,
  BankingWrapper,
  CardImage,
  IconWrapper,
  TextWrapper,
} from "./BankingSection.styles.js";
import cards from "../../static/images/cards.jpg";
import { useState } from "react";
import {IoMdAddCircleOutline} from 'react-icons/io';
import {IoMdAddCircle} from "react-icons/io"
const BankingSection = () => {
  const [hover,setHover]=useState(false);

  return (
    <div>
      <BankingWrapper onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <BankingSecondaryWrapper>
          <TextWrapper>
            <BankingMainText>Banking</BankingMainText>
            <BankingSubText>
              Get paid early. Advance up to $250. No minimums. No overdrafts.
            </BankingSubText>
          </TextWrapper>
          <CardImage src={cards}></CardImage>
        </BankingSecondaryWrapper>
        <IconWrapper>
          {hover?<IoMdAddCircle size="40px" color="#333"/>:<IoMdAddCircleOutline size="40px" color="#333"/>}
        </IconWrapper>
      </BankingWrapper>
    </div>
  );
};

export default BankingSection;
