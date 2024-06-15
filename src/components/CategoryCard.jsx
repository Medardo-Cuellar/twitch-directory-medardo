function CategoryCard({ image, name, viewers }) {
  return (
    <div className="category-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <span>{(viewers)/1000}K viewers</span>
    </div>
  );
}

export default CategoryCard 