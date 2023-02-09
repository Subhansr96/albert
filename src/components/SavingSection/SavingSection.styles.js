import styled from "styled-components";
export const SavingMainWrapper=styled.div`
display:flex;
justify-content:space-between;   
height:100vh;
width:90vw;
margin:5% auto 0% auto;
background-color:#f8f8fa;

`
export const SavingLeftWrapper=styled.div`
background-color:#fdec63;
height:90vh;
width:48%;
border-radius:40px;
display:flex;
align-items:center;
justify-content:center;
img{
    transition: transform .5s ease;
}
:hover img{
    transform: scale(1.1);
}
@media(max-width:768px){
    display:none;
}
`

export const SavingRightWrapper=styled.div`
background-color:#fdec63;
height:90vh;
width:48%;
border-radius:40px;
@media(max-width:768px){
    display:none;
}
`
export const SavingMainText=styled.div`
font-size:50px;
font-weight:700;
line-height:1.6;
color:#333;`

export const SavingSubText=styled.div`
font-size:26px;
font-weight:400;
line-height:1.3;
color:#333;
`

export const ImageWrapper=styled.img`
width:40%;
height:40%;
`;

export const TextWrapper=styled.div`
height:80vh;
display:flex;
flex-direction:column;
justify-content:center;
margin-left:10%;
width:80%
`

export const IconWrapper=styled.div`   
float:right;
margin-right:5%;
`

export const MobileSavingWrapper=styled.div`
display:none;
@media(max-width:768px){
    background-color:#fdec63;
    display:flex;
    flex-direction:column;   
    border-radius:10px;
}
`