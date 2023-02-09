import styled from "styled-components";
export const PeopleMainWrapper=styled.div`
display:flex;
justify-content:space-between;   
height:100vh;
width:90vw;
margin:5% auto 0% auto;
background-color:#f8f8fa;
img{
    transition: transform .5s ease;
}
:hover img{
    transform: scale(1.05);
}
`
export const PeopleLeftWrapper=styled.div`
height:98vh;
width:49%;
border-radius:40px;
display:flex;
align-items:center;
justify-content:center;
img{
    transition: transform .5s ease;
}
:hover img{
    transform: scale(1);
}
@media(max-width:768px){
    display:none;
}
`

export const PeopleRightWrapper=styled.div`
background-color:#000000;
height:98vh;
width:49%;
border-radius:40px;
@media(max-width:768px){
    display:none;
};

`
export const PeopleMainText=styled.div`
font-size:50px;
font-weight:700;
line-height:1.1;
padding-top:10%;
color:#ffc700;
background: -webkit-linear-gradient(22deg, #ffc700 22.14%, #a03a01 116.27%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`

export const PeopleSubText=styled.div`
font-size:26px;
font-weight:400;
line-height:1.3;
color:#ffc700;
margin:4% 10% 0 0;
background: -webkit-linear-gradient(30deg, #ffc700 22.14%, #a03a01 116.27%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ImageWrapper=styled.img`
width:100%;
height:100%;
`;

export const TextWrapper=styled.div`
height:85vh;
display:flex;
flex-direction:column;
justify-content:center;
margin-left:15%;
width:80%
`

export const IconWrapper=styled.div`   
float:right;
margin-right:7%;
`

export const MobilePeopleWrapper=styled.div`
display:none;
@media(max-width:768px){
    background-color:#fdec63;
    display:flex;
    flex-direction:column;   
    border-radius:10px;
}
`