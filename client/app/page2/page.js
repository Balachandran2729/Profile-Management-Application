"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; 
import Link from 'next/link';
import { fetchProfileById } from '../utils/api'; 
import ProfileDetail1 from '../components/ProfileDetail1';
import ProfileDetailCard from '../components/ProfileDetailCards';
import ProfileDetail2 from '../components/ProfileDetail2';

export default function Page2() {
  const searchParams = useSearchParams(); 
  const id = searchParams.get('id');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) { 
      const loadProfile = async () => {
        setLoading(true);
        setProfile(null); 
        try {
          const data = await fetchProfileById(id);
          setProfile(data);
        } catch (error) {
          console.error('Error fetching profile:', error);
        } finally {
          setLoading(false);
        }
      };

      loadProfile();
    } else if (id === null) {

       setLoading(false); 
    }
  }, [id]);
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Profile Not Found or Error</h2>
          <p className="text-gray-600 mt-2">Could not load the profile details.</p>
          <Link href="/" className="mt-4 inline-block text-orange-500 hover:text-orange-600 font-medium">
            Go Back to Profiles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ProfileDetail1 profile={profile} />
      <ProfileDetailCard />
      <ProfileDetail2 profile={profile} />
      
    </div>
  );
}
