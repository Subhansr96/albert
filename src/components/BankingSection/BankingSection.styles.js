import styled from "styled-components"
export const BankingMainText=styled.div`
font-size:50px;
font-weight:700;
line-height:1.6;
color:#333;
@media (max-width:768px){
    font-size:1.75rem;
}
`
export const BankingSubText=styled.div`
font-size:26px;
font-weight:400;
line-height:1.3;
color:#333;
@media (max-width:768px){
    font-size:1.15rem;
    font-weight:500;
}
`

export const BankingWrapper=styled.div`
width:90vw;
height:100vh;
background-color:#ffffff;
margin:5% auto;
border-radius:40px;
img{
    transition: transform .5s ease;
}
:hover img{
    transform: scale(1.05);
}
@media (max-width:768px){
    height:90vh;
    border-radius:16px;
}
`

export const IconWrapper=styled.div`   
float:right;
margin-right:3%;
margin-bottom:3%;
@media (max-width:768px){
    margin-right:20px;
    margin-bottom:20px;
}
`

export const CardImage=styled.img`
width:42%;
height:80%;
@media (max-width:768px){
    width:80%;
    height:40%;
    margin-top:0%;
    margin-bottom:20%;
}
`
export const TextWrapper=styled.div`
`

export const BankingSecondaryWrapper=styled.div`
display:flex;
align-items:center;
height:87vh;
justify-content:space-between;
padding:1% 10% 0% 6%;
@media (max-width:768px){
    flex-direction:column;   
    justify-content:space-around;
    height:80vh;
}
`