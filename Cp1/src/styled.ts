import styled from "styled-components";

export const DivApp = styled.div`
    width: 100%;
    height: 100vh;

    h1{
        background-color: royalblue;
        padding: 20px;
        color: #fff;
        text-align: center;
    }

    div{
        padding: 20px;
        display: flex;
        justify-content: space-between;
        
    }


`;

export const DivBookCard = styled.div`

border: 1px solid #000;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    h2{
        text-align: center;
        margin-bottom: 10px;
    }
    img{max-width: 100%;
    }
    p{
        text-align: center;
        padding: 5px;
    }
`;