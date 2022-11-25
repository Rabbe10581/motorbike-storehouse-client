import React, { useEffect, useState } from 'react';
import Category from './Category';

const BrandsCategories = () => {
    const [brandCategories, setBrandCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setBrandCategories(data))
    }, [])

    return (
        <div>
            <h2 className='text-3xl'>This is brandsCategories</h2>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    brandCategories.map(category => <Category
                        key={category.category_id}
                        brandCategory={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default BrandsCategories;