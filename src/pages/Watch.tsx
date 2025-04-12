import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const videoCategories = {
  comedy: [
    {
      id: "comedy-1",
      title: "Stand-up Comedy Special",
      description: "Experience the best stand-up comedy moments of 2024.",
      url: "https://www.youtube.com/watch?v=jQUNk5meJHs",
      views: "2.1M",
      likes: 156000,
      comments: 8420
    },
    // ... other comedy videos
  ],
  gaming: [
    {
      id: "gaming-1",
      title: "Minecraft Survival Guide",
      description: "Learn the essential tips and tricks for surviving in Minecraft.",
      url: "https://www.youtube.com/watch?v=1DhWXAiNgfQ",
      views: "1.8M",
      likes: 125000,
      comments: 6300
    },
    // ... other gaming videos
  ],
  sports: [
    {
      id: "sports-1",
      title: "NBA Highlights 2024",
      description: "The most exciting moments from the NBA season.",
      url: "https://www.youtube.com/watch?v=ZHGwqV0X_jU",
      views: "3.2M",
      likes: 245000,
      comments: 12400
    },
    // ... other sports videos
  ]
};

function Watch() {
  const { id } = useParams();

  // Find the video across all categories
  const video = Object.values(videoCategories)
    .flat()
    .find(v => v.id === id) || {
      title: "Video not found",
      description: "This video might have been removed or is unavailable.",
      url: "",
      views: "0",
      likes: 0,
      comments: 0
    };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        <ReactPlayer
          url={video.url}
          width="100%"
          height="100%"
          controls
          playing
        />
      </div>
      
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{video.title}</h1>
        <div className="flex items-center justify-between mt-4">
          <div className="text-gray-400">{video.views} views</div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 hover:text-purple-500 transition">
              <ThumbsUp className="w-5 h-5" />
              <span>{video.likes}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-purple-500 transition">
              <MessageCircle className="w-5 h-5" />
              <span>{video.comments}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-purple-500 transition">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
        <p className="mt-4 text-gray-300">{video.description}</p>
      </div>
    </div>
  );
}

export default Watch;