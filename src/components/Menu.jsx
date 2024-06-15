import recomendedChannels from "../data/Channels";

function Menu() {
  return (
    <aside
      id="Menu"
      className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#1f1f23] pt-2 overflow-y-auto"
    >
      <h2 className="hidden md:block font-bold pb-2">RECOMENDED CHANNELS</h2>
      {recomendedChannels.map((channel) => {
        const { avatar, username, game, viewers, isLive } = channel;
        return (
            <div className="flex hover:bg-[#26262c] hover:cursor-pointer">
            <div>
              <img className="rounded-full h-9 w-9 border-solid border-text-twitch border-2 mt-1 me-2" src={avatar} alt={username} />
              </div>
              <div className=" hidden md:flex md:flex-col md:grow">
                <h3 className="text-sm font-bold">{username}</h3>
                <span className="text-sm">{game}</span>
              </div>
              <div className="pe-4 mt-2">
              {isLive && <div className="size-2 -ms-2 md:size-4 md:ms-0 rounded-full bg-red-500"></div>}
              <span className="hidden md:block">{viewers/1000}K</span>
              </div>
            </div>
        );
      })}

    </aside>
  );
}

export default Menu;
