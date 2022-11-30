import { useQuery } from '@tanstack/react-query';
import Category from './Category';

const BrandsCategories = () => {

    //Use query to load data
    const { data: brandCategories = [] } = useQuery({
        queryKey: ['brandCategories'],
        queryFn: async () => {
            const res = await fetch('https://resale-storehouse-server.vercel.app/categories')
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 mx-6'>
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