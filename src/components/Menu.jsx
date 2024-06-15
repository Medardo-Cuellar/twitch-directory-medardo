import recomendedChannels from "../data/Channels";
import RecomendedChannelsItem from "./RecommendedChannelAside";

function Menu() {
  return (
    <aside
      id="Menu"
      className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#1f1f23] pe-4 pt-2 overflow-y-auto"
    >
      <h2 className="font-bold pb-2">RECOMENDED CHANNELS</h2>
      {recomendedChannels.map((channel) => {
        const { avatar, username, game, viewers, isLive } = channel;
        return (
            <div className="flex hover:bg-slate-400">
            <div>
              <img className="rounded h-9 w-9" src={avatar} alt={username} />
              </div>
              <div className="flex flex-col grow">
                <h3 className="font-bold">{username}</h3>
                <span>{game}</span>
              </div>
              {isLive && <span>🔴</span>}
              {viewers/1000}K
            </div>
        );
      })}

    </aside>
  );
}

export default Menu;
