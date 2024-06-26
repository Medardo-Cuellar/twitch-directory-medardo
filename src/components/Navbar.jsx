import TwitchLogo from '../assets/twitch-logo.svg';

export default function Navbar() {
    return (
        <nav id="navbar" className="col-start-1 col-end-3 grid grid-cols-3 bg-[#18181b] drop-shadow">
            <div className='m-2'>
            <img src={TwitchLogo} alt="Twitch Logo" className="h-8 w-8" />
            </div>
            <div className="flex items-center justify-center">
                <input type="text" placeholder="Search" className="w-96 h-8 rounded-lg bg-background-twitch-2 border-text-twitch border p-1" />
            </div>
            <div className="hidden md:flex items-center justify-end me-2">
                <button className=" bg-purple-twitch text-white px-4 py-1 rounded-lg">Login</button>
            </div>
        </nav>
    )
}