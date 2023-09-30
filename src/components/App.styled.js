import styled from 'styled-components';

export const StyledAppContainer = styled.div`
header {
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: rgb(34, 75, 153);
    align-items: center;
  }
  button {
    color: white;
    background-color: blue;
    border: 1px solid blue;
    border-radius: 10px;
    font-size: 24px;
    padding: 8px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button:active {
    background-color: #2d19e2;
  }
  form {
    height: 38px;
    display: flex;
    font-size: 24px;
  
  }
  input {
    width: 400px;
    border-radius: 10px;
    border: none;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  li {
    display: flex;
  }
  .spinner {
    // background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    margin: 0 auto;

   
  }
  .loadbtn {
    margin: 0 auto;
  }
  .overlayDiv {
    position: relative;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Темний колір з прозорістю */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0; /* Початкова прозорість: оверлей прихований */
    transition: opacity 0.8s ease;
  }
  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    max-width: 100%; /* Максимальна ширина модального вікна */
    max-height: 100%; /* Максимальна висота модального вікна */
    overflow: auto;
    opacity: 0; 
    transition: opacity 0.8s ease;
  }
  .modal.visible {
    opacity: 1; 
  }
 
  .overlay.visible {
    opacity: 1; 
  }
`;