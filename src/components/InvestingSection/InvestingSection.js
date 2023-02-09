import {
    InvestingMainText,
    InvestingSecondaryWrapper,
    InvestingSubText,
    InvestingWrapper,
    CardImage,
    IconWrapper,
    TextWrapper,
  } from "./InvestingSection.styles.js";
  import cellphone from "../../static/images/cellphone_pic_low.png";
  import { useState } from "react";
  import {IoMdAddCircleOutline} from 'react-icons/io';
  import {IoMdAddCircle} from "react-icons/io"
  const InvestingSection = () => {
    const [hover,setHover]=useState(false);
  
    return (
      <div>
        <InvestingWrapper onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
          <InvestingSecondaryWrapper>
            <TextWrapper>
              <InvestingMainText>Investing</InvestingMainText>
              <InvestingSubText>
                Start building your portfolio with just $1.
              </InvestingSubText>
            </TextWrapper>
            <CardImage src={cellphone}></CardImage>
          </InvestingSecondaryWrapper>
          <IconWrapper>
            {hover?<IoMdAddCircle size="40px" color="#333"/>:<IoMdAddCircleOutline size="40px" color="#333"/>}
          </IconWrapper>
        </InvestingWrapper>
      </div>
    );
  };
  
  export default InvestingSection;
  