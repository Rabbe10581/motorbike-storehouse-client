import { useQuery } from '@tanstack/react-query';
import Category from './Category';

const BrandsCategories = () => {
    // const [brandCategories, setBrandCategories] = useState([])

    //Use query to load data
    const { data: brandCategories = [] } = useQuery({
        queryKey: ['brandCategories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json();
            return data;
        }
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/categories')
    //         .then(res => res.json())
    //         .then(data => setBrandCategories(data))
    // }, [])

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