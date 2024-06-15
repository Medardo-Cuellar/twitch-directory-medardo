function RecomendedChannelsItem({ avatar, username, viewers, isLive }) {
  return (
    <div className="flex hover:bg-[#26262c] hover:cursor-pointer">
            <div>
              <img className="rounded h-9 w-9" src={avatar} alt={username} />
              </div>
              <div className="flex flex-col grow">
                <h3 className="font-bold">{username}</h3>
                <span>{game}</span>
              </div>
              <div className="pe-4">
              {isLive && <span>🔴</span>}
              {viewers/1000}K
              </div>
            </div>
  );
}

export default RecomendedChannelsItem;
