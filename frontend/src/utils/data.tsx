import React from 'react';
import {Home, Shop, About} from '../pages/index';
import tienda1Img from "../assets/tienda_1.webp"
import tienda2Img from "../assets/tienda_2.webp"
import nikeImg from "../assets/brand_nike.webp"
import newBalanceImg from "../assets/brand_newbalance.webp"
import adidasImg from "../assets/brand_adidas.webp"
import pumaImg from "../assets/brand_puma.jpg"
import pumaLogo from "../assets/logo_puma.jpg"
import adidasLogo from "../assets/logo_adidas.jpg"
import nikeLogo from "../assets/logo_nike.jpg"
import newBalanceLogo from "../assets/logo_new_balance.jpg"



export const links = [
  {
    name: "Home",
    path: "/",
    element: React.createElement(Home),
  },
  {
    name: "Shop",
    path: "/shop",
    element: React.createElement(Shop),
  },
  {
    name: "About",
    path: "/about",
    element: React.createElement(About),
  },

] as const;


export const storesLocationData = [{
  name: "runthecode | Tienda Palermo",
  address: "Av. Completar 764 - B° XXXXXX",
  phoneNumber: "xxxxx-xxxxx",
  time: "Monday to Sunday - 9:00 a 18:00",
  imgUrl: tienda1Img,
},
{
  name: "runthecode | Tienda Palermo",
  address: "Av. Completar 764 - B° XXXXXX",
  phoneNumber: "xxxxx-xxxxx",
  time: "Monday to Sunday - 9:00 a 18:00",
  imgUrl: tienda2Img,
}] as const;


export const brandList = [
  {
    name: "Nike",
    path: "shop/collections/nike",
    backImg: nikeImg,
    brandImg: nikeLogo,
  },
  {
    name: "Adidas",
    path: "shop/collections/adidas",
    backImg: adidasImg,
    brandImg: adidasLogo,

  },
  {
    name: "New Balance",
    path: "shop/collections/new-balance",
    backImg: newBalanceImg,
    brandImg: newBalanceLogo,
  },
  {
    name: "Puma",
    path: "shop/collections/puma",
    backImg: pumaImg,
    brandImg: pumaLogo,
  },
] as const;

export const userInputs = [
  {
    id: "form__user-name",
    label: "Name:",
    name: "name",
    type: "text",
    placeholder: "Insert your name...",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special characters.",
    pattern: "^[A-Za-z0-9]{3,16}$", 
    required: true,
  },
  {
    id: "form__user-mail",
    label: "Email:",
    name: "mail",
    type: "email",
    placeholder: "Insert your email...",
    errorMessage: "Please enter a valid email address.",
    pattern: "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$", 
    required: true,
  },
  {
    id: "form__user-password",
    label: "Password:",
    name: "password",
    type: "password",
    placeholder: "Just insert more than 3 digits...",
    errorMessage:
      "Password should be at least 8 characters long, but its just a demo.",
    pattern:
      "^[A-Za-z0-9]{3,16}$", 
    required: true,
  },
  {
    id: "form__user-confirmPassword",
    label: "Repeat your password:",
    name: "confirmPassword",
    type: "password",
    placeholder: "Now just type the same password...",
    required: true,
  },
] as const;

export const userSignInInputs = [
  {
    id: "form__user-mail",
    label: "Email:",
    name: "mail",
    type: "email",
    placeholder: "try: recruiter@hi.com",
    errorMessage: "Please enter a valid email address.",
    pattern: "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$", 
    required: true,
  },
  {
    id: "form__user-password",
    label: "Password:",
    name: "password",
    type: "password",
    placeholder: "Just type 123... Just trust me 😉",
    errorMessage:
      "Password should be at least 8 characters long, but its just a demo.",
    pattern:
      "^[A-Za-z0-9]{3,16}$", 
    required: true,
  },
] as const;