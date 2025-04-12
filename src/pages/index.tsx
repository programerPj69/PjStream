import React from 'react';
import Link from 'next/link';
import { Film, Gamepad, FolderRoot as Football } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  url: string;
}

interface VideoCardProps {
  video: Video;
}

interface CategorySectionProps {
  title: string;
  videos: Video[];
  icon: React.ComponentType<{ className?: string }>;
}

const videoCategories = {
  comedy: [
    {
      id: "comedy-1",
      title: "Stand-up Comedy Special",
      thumbnail: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca",
      duration: "15:30",
      views: "2.1M",
      url: "https://www.youtube.com/watch?v=jQUNk5meJHs"
    },
    {
      id: "comedy-2",
      title: "Funny Pet Compilation",
      thumbnail: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce",
      duration: "8:45",
      views: "1.5M",
      url: "https://www.youtube.com/watch?v=ZpoxvdUz2Ac"
    }
  ],
  gaming: [
    {
      id: "gaming-1",
      title: "Minecraft Survival Guide",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
      duration: "25:15",
      views: "1.8M",
      url: "https://www.youtube.com/watch?v=1DhWXAiNgfQ"
    }
  ],
  sports: [
    {
      id: "sports-1",
      title: "NBA Highlights 2024",
      thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
      duration: "10:45",
      views: "3.2M",
      url: "https://www.youtube.com/watch?v=ZHGwqV0X_jU"
    }
  ]
};

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Link href={`/watch/${video.id}`} className="group">
      <div className="relative rounded-lg overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full aspect-video object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-sm">
          {video.duration}
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold group-hover:text-purple-500 transition">
          {video.title}
        </h3>
        <div className="flex items-center text-gray-400 text-sm mt-1">
          <span>{video.views} views</span>
        </div>
      </div>
    </Link>
  );
};

const CategorySection: React.FC<CategorySectionProps> = ({ title, videos, icon: Icon }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center space-x-2 mb-6">
        <Icon className="w-6 h-6 text-purple-500" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <CategorySection 
        title="Comedy" 
        videos={videoCategories.comedy}
        icon={Film}
      />
      <CategorySection 
        title="Gaming" 
        videos={videoCategories.gaming}
        icon={Gamepad}
      />
      <CategorySection 
        title="Sports" 
        videos={videoCategories.sports}
        icon={Football}
      />
    </div>
  );
}
