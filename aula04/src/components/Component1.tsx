import styled from "styled-components"

// cria yum elemen  to estilizado 
const DivComp1 = styled.div`
   border: 2px solid lime;
   background-color: #333;
   padding: 15px;

   /* Nesting = Recurso que alinha os seletores CSS */
    h2{
        color:lime
    }
    p{
        color: #f5f7f5;
        font-size: 1.3em;
    }
`



export default function Component1(){
    
    return (
        <DivComp1>
            <h1>Component1</h1>
            <p>Esse é o Componente 1</p>
        </DivComp1>
    )
}