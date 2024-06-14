import CategoryCard from './CategoryCard';

export default function Content() {
    return (
        <section id="content" className="col-start-2 col-end-3 row-start-2 row-end-3">
            <h1 className="font-bold text-5xl">Browse</h1>
            <CategoryCard 
            image ={"https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"}
            name ={"Just Chatting"}
            viewers ={353000}/>
        </section>
    )
}