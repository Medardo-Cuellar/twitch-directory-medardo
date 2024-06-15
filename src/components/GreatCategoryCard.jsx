function GreatCategoryCard ({ category }) {
  return (
    <div className="flex flex-row flex-wrap me-4 rounded-lg bg-purple-twitch mb-4 hover:cursor-pointer">
      <h2 className="me-8 mt-6">{category.name}</h2>
        <img className="-mt-4" src={category.icon} alt={category.name} />
    </div>
  )
}

export default GreatCategoryCard;