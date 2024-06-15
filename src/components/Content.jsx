import CategoryCard from './CategoryCard';
import Categories from '../data/Categories';
import GreatCategories from '../data/GreatCategories';
import GreatCategoryCard from './GreatCategoryCard';

function Content() {
    return (
        <section id="content" className="col-start-2 col-end-3 row-start-2 row-end-3 ps-4 bg-background-twitch-2">
            <h1 className="font-bold text-5xl mb-4">Browse</h1>
            <div id="GreaterCategories" className="flex flex-wrap gap-4">
            {GreatCategories.map((category) => {
                return (
                    <GreatCategoryCard 
                    key={`category-${category.name}`} 
                    category={category} />
                )
            })}
            </div>
            <div id="Categories"className="flex flex-wrap gap-4">
            {Categories.map((category) => {
                return (
                    <CategoryCard 
                    key={`category-${category.name}`} 
                    image={category.image} 
                    name={category.name} 
                    viewers={category.viewers}
                    isNew={category.isNew} />
                )
            })}
            </div>
        </section>
    )
}

export default Content