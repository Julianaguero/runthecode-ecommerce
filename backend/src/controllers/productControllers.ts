import { NextFunction, Request, Response } from "express";
import productsData from "../utils/productsData.json";
import { ProductsDataProps } from "../types";
import CustomError from "../error/CustomError";


export const getProducts = (_req: Request, res: Response) => {
    res.json(productsData);
};

export const getSearchProducts = (req: Request, res: Response) => {

    try {
        // Extrae el valor de la consulta de la URL
        const query = String(Object.values(req.params));
        
        // Filtra los productos según la búsqueda en name, brand y style
        const results = productsData.filter((product) => {
         

          product.name.includes(query) || 
          product.brand.includes(query) || 
          product.style.includes(query)
    });
    
        res.json(results);
      } catch (error) {
        console.error('Error al buscar productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }

};


export const getProductById = (req: Request, res: Response, next: NextFunction) => { 
    const queryId = Number(req.params.id)
    // IMPORTANTE : tener en cuenta que se devuelve un Array para que coincida con el fetch de datos del front para busqueda de ID
       
        res.json(new Array(productsData.find(({ id }: ProductsDataProps) => id === queryId)));
        
};

export const getProductByBrand = (req: Request, res: Response) => { 
    const queryBrand = String(req.params.brand).toLowerCase()
    res.json(productsData.filter(({ brand }: ProductsDataProps) => brand.toLocaleLowerCase() === queryBrand));
};

export const createProduct = (req: Request, res: Response) => { };

export const updateProduct = (req: Request, res: Response) => { };

export const deleteProduct = (req: Request, res: Response) => { };