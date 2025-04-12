import React, { useEffect, useState } from 'react';
import { Settings, Video, Users } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

interface Profile {
  username: string;
  avatar_url: string;
  bio: string;
}

function Profile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProfile() {
      try {
        if (!user) return;

        const { data, error } = await supabase
          .from('profiles')
          .select('username, avatar_url, bio')
          .eq('id', user.id)
          .single();

        if (error) throw error;
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error.message);
      } finally {
        setLoading(false);
      }
    }

    getProfile();
  }, [user]);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <img 
            src={profile?.avatar_url || `https://ui-avatars.com/api/?name=${user?.email}`}
            alt={profile?.username || user?.email}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{profile?.username || user?.email}</h1>
            {profile?.bio && (
              <p className="text-gray-400 mt-1">{profile.bio}</p>
            )}
            <div className="flex items-center space-x-4 mt-2 text-gray-400">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                0 subscribers
              </div>
              <div className="flex items-center">
                <Video className="w-4 h-4 mr-1" />
                0 videos
              </div>
            </div>
          </div>
          <button className="ml-auto bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Edit Profile
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Your Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Video grid will be implemented later */}
        </div>
      </div>
    </div>
  );
}

export default Profile;