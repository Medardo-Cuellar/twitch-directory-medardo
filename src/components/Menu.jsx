import recomendedChannels from '../data/Channels'

function Menu() {
    return (
        <aside id="Menu" className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#1f1f23]">
            <h2 className="font-bold">RECOMENDED CHANNELS</h2>
            {recomendedChannels.map((channel) => {
                return (
                    <div key={channel.username} className="flex items-center space-x-2">
                        <img src={channel.avatar} alt="Channel Avatar" className="h-10 w-10 rounded-full" />
                        <div>
                            <p className="font-bold">{channel.username}</p>
                            <p>{channel.followers/1000000} M followers</p>
                            <p>{channel.game}</p>
                            {channel.live && <p>Live</p>}
                        </div>
                    </div>
                )
            })}
        </aside>
    )
}

export default Menu