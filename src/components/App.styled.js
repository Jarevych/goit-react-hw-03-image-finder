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
    display: flex;
    margin-left: 200px;

   
  }
  .loadbtn {
    margin: 0 auto;
  }
`;