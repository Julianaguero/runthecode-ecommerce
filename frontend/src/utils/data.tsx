import React from 'react';
import {Home, Shop, About} from '../pages/index';
import tienda1Img from "../assets/tienda_1.jpg"
import tienda2Img from "../assets/tienda_2.jpg"
import nikeImg from "../assets/brand_nike.jpg"
import newBalanceImg from "../assets/brand_newbalance.jpg"
import adidasImg from "../assets/brand_adidas.jpg"
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
    path: "shop/brand/nike",
    backImg: nikeImg,
    brandImg: nikeLogo,
  },
  {
    name: "Adidas",
    path: "shop/brand/adidas",
    backImg: adidasImg,
    brandImg: adidasLogo,

  },
  {
    name: "Puma",
    path: "shop/brand/puma",
    backImg: pumaImg,
    brandImg: pumaLogo,
  },
  {
    name: "New Balance",
    path: "shop/brand/newbalance",
    backImg: newBalanceImg,
    brandImg: newBalanceLogo,
  },
] as const;