import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: 'hsl(0, 0%, 98%)',
    bodyFontColor: 'hsl(200, 15%, 8%)',
    cards: '#fff'
}

export const darkTheme = {
    body: 'hsl(207, 26%, 17%)',
    bodyFontColor: 'hsl(0, 0%, 100%)',
    cards: 'hsl(209, 23%, 22%)'
}

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background-color: ${({ theme }) =>theme.body};
    color: ${({ theme })=> theme.bodyFontColor};
  
  }
  
  a {
    text-decoration: none;
  }
  
  a:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
  
  ::placeholder {
    color: ${({ theme }) => theme.bodyFontColor};
  }
  
  ul {
    list-style: none;
  }
  
  img {
    width: 100%;
  }
  
  /* Utilities */
  .container {
    width: 100%;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
  }

  .spinner-style{
    width: 200px;
    margin: 2rem auto;
    display: block;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.bodyFontColor};
  }
  
  .spinner-gif{
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.bodyFontColor};
  }
  
  .ml-3{
    margin-left: 15px;
  }
  .mb-4{
    margin-bottom: 70px;
  }
  .mt-4{
    margin-top: 40px;
  }
  
  /* Grid */
  .grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }
  
  .btn {
    display: inline-block;
    background: ${({ theme }) => theme.cards};
    color: ${({ theme }) => theme.bodyFontColor};
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
  }
  
  .btn-light-shadow{
    box-shadow: 5px 6px 11px -3px rgba(59, 21, 21, 0.2);
  }
  
  .btn-light,.bg-light{
    background: ${({ theme }) => theme.cards};
    color: ${({ theme }) => theme.bodyFontColor};
  }
  
  .btn:hover {
    opacity: 0.8;
  }
  
  /* Forms */
  input {
    margin: 1.2rem 0;
    background-color: ${({ theme }) => theme.cards};
  }
  
  button {
    font: inherit;
  }
  
  /* Navbar */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 2rem;
    z-index: 1;
    width: 100%;
    opacity: 0.9;
    margin-bottom: auto;
    box-shadow: 5px 6px 11px -3px rgba(0, 0, 0, 0.2);
  }
  
  .filter-position{
    position: relative;
  }
  .menu{
    width: 100%;
    margin-top: 20px;
    z-index: 1000;
    padding: 15px 15px 15px 25px;
    line-height: 1.7;
    position: absolute;
    background: ${({ theme }) => theme.cards};
  }
  
  .country{
    color: ${({ theme }) => theme.bodyFontColor};
  }
  
  .country-card{
    border-radius: 4px;
    width: 250px;
    overflow: hidden;
    margin: 20px auto;
    box-shadow: 5px 6px 11px -3px rgba(0, 0, 0, 0.2);
    background-color:${({ theme }) => theme.cards};
  }
  
  .country-name {
    margin: 0px 0px 15px 0px;
  }
  
  .country-details > p {
    margin-bottom: 10px;
  }
  
  .country-details {
    padding: 20px;
    height: auto;
    min-height: 50%;
  }
  
  .form-control{
    box-shadow: 5px 6px 11px -3px rgba(0, 0, 0, 0.2);
    display: block;
    width: 100%;
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    border: none;
    outline: none;
  }
  
  .details{
    margin: 40px auto;
  }
  .details-section{
    height: 450px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
  }
  .country-details-container{
    padding: 0 2rem;
  }
  
  .country-details-container h2{
    margin: 25px 0;
  }
  
  .country-details-details{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    line-height: 2;
  }
  
  .border-countries{
    margin-top: 50px;
  }
  
  .btn-margin{
    margin: 10px;
  }
  
  .search-styles{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
  }
  
  /* Mobile Styles */
  @media (max-width: 1300px){
    .country-details-details{
      flex-direction: column;
    }
  }
  
  @media (max-width: 1200px){
  .grid-4{
    grid-template-columns: repeat(3, 1fr);
  }
  }
  
  @media (max-width: 900px){
    .grid-4{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 700px) {
    .grid-4 {
      grid-template-columns: 1fr;
    }
  
    /* Navbar */
    .navbar {
      display: block;
      text-align: center;
    }
    .details-section{
      grid-template-columns: 1fr;
      height: auto;
    }
    .country-details-container{
      padding:unset;
    }
    .btn-margin{
      margin: 10px 5px;
    }
    .search-styles{
      display: unset;
    }
  }  

`