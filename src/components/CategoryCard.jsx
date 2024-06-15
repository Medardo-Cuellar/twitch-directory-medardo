function CategoryCard({ image, name, viewers, isNew }) {
  return (
    <div className="category-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <span>{(viewers)/1000}K viewers</span>
        {isNew && <span className="rounded-full bg-purple-twitch ps-2 pe-2 ms-2">New</span>}
    </div>
  );
}

export default CategoryCard 