import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  * {
    box-sizing: border-box;
  }
  section {
    background: #6998ab;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    height: 100vh;
    margin: -20px 0 50px;
  }
  h1 {
    font-weight: bold;
    font-size: 64px;
    margin: 0;
    padding: 0;
    color: #1a374d;
    font-family: "Licorice", cursive;
  }
  h4 {
    color: #1a374d;
    font-family: "Montserrat", sans-serif;
  }
  button {
    border-radius: 20px;
    border: 1px solid #1a374d;
    background-color: #1a374d;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    margin-bottom: 10px;
  }

  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background-color: transparent;
    border-color: #ffffff;
  }

  form {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }
  input,
  select,
  textarea {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }
  textarea {
    resize: none;
  }
  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 400px;
    max-height: 1000px;
  }
  .form-container {
    position: center;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }
  a {
    color: #1a374d;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }
  .error {
    color: red;
  }
`;
