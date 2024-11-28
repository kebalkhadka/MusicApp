import React from 'react';

const Login = () => {
    const handleClick = () => {
        const clientId = "c7750d16f40449a6bac8411a64e32e04";
        const redirectUrl = "http://localhost:5173/";
        const apiUrl = 'https://accounts.spotify.com/authorize';
        const scope = [
            'user-read-email',
            'user-read-private',
            'user-read-playback-state',
            'user-modify-playback-state',
            'user-read-currently-playing',
            'user-read-playback-position',
            'user-top-read',
            'user-read-recently-played'
        ];

        // Properly formatted URL
        const url = `${apiUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=${encodeURIComponent(scope.join(' '))}&response_type=token&show_dialog=true`;

        window.location.href = url;
    };

    return (
        <div className="flex flex-col bg-[#1db954] h-screen w-screen items-center justify-center gap-20">
            <img 
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black.png" 
                alt="logo" 
                className="h-[20vh]" 
            />
            <button 
                className="px-20 py-5 bg-black text-lg text-[#49f585] rounded-full border-none cursor-pointer" 
                onClick={handleClick}
            >
                Connect to app
            </button>
        </div>
    );
};

export default Login;
