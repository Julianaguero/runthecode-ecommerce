import { useEffect, useState } from 'react'
import { type FilterProps, type ProductsProps, type FilteredProductProps } from '../types';
import getFilterProducts from '../services/getFilterProducts';



function useFilterProducts(products: ProductsProps[]): FilteredProductProps  {

    const [filteredProducts, setFilteredProducts] = useState<ProductsProps[]>(products);

    const [filters, setFilters ] = useState<FilterProps>({brand: []});


    useEffect(() => {
        const fetchFilterProducts =async () => {
            try {
                const newProducts = await getFilterProducts(filters);
                if(!newProducts)  throw new Error(`Error fetching filtered products`); 
                setFilteredProducts(newProducts);

            } catch (error) {
                throw new Error(`Conection error`);
            }    
        }

        fetchFilterProducts();

    }, [filters]);

  return {filteredProducts, setFilters};
}

export default useFilterProducts;
