import recomendedChannels from "../data/Channels";
import RecomendedChannelsItem from "./RecommendedChannelAside";

function Menu() {
  return (
    <aside
      id="Menu"
      className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#1f1f23]"
    >
      <h2 className="font-bold">RECOMENDED CHANNELS</h2>
      {recomendedChannels.map((channel) => {
        const { avatar, username, game, viewers, isLive } = channel;
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
      })}

    </aside>
  );
}

export default Menu;
