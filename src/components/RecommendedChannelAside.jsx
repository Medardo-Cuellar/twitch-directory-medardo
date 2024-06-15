function RecomendedChannelsItem({ avatar, username, viewers, isLive }) {
  return (
    <div className="flex">
      <div>
        <img className="rounded h-4 w-4" src={avatar} alt={username} />
        </div>
        <div className="flex flex-row grow">
          <h3 className="font-bold">{username}</h3>
          <span>{game}</span>
        </div>
        {isLive && <span>🔴</span>}
        {viewers/1000}K
      </div>
  );
}

export default RecomendedChannelsItem;
