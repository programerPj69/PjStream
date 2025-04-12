import React from 'react';
import { Tv2 } from 'lucide-react';

function Live() {
  const liveStreams = [
    {
      id: 1,
      title: "Live Gaming Stream",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
      viewers: 1234,
      streamer: "GameMaster"
    },
    {
      id: 2,
      title: "Music Concert Live",
      thumbnail: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
      viewers: 856,
      streamer: "MusicLover"
    }
  ];

  return (
    <div>
      <div className="flex items-center space-x-2 mb-8">
        <Tv2 className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Live Now</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveStreams.map((stream) => (
          <div key={stream.id} className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative">
              <img 
                src={stream.thumbnail} 
                alt={stream.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute top-2 left-2 bg-red-600 px-2 py-1 rounded text-sm flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                LIVE
              </div>
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded text-sm">
                {stream.viewers} watching
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{stream.title}</h3>
              <p className="text-gray-400 mt-1">{stream.streamer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Live;