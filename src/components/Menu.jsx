import recomendedChannels from "../data/Channels";

function Menu() {
  return (
    <aside
      id="Menu"
      className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#1f1f23] pt-2 overflow-y-auto"
    >
      <h2 className="font-bold pb-2">RECOMENDED CHANNELS</h2>
      {recomendedChannels.map((channel) => {
        const { avatar, username, game, viewers, isLive } = channel;
        return (
            <div className="flex hover:bg-[#26262c] hover:cursor-pointer">
            <div>
              <img className="rounded-full h-9 w-9 border-solid border-text-twitch border-2 mt-1 me-2" src={avatar} alt={username} />
              </div>
              <div className="flex flex-col grow">
                <h3 className="text-sm font-bold">{username}</h3>
                <span className="text-sm">{game}</span>
              </div>
              <div className="pe-4 mt-2">
              {isLive && <span>🔴</span>}
              {viewers/1000}K
              </div>
            </div>
        );
      })}

    </aside>
  );
}

export default Menu;
