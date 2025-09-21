"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { fetchProfileById } from '../utils/api'; 
import ProfileDetail1 from '../components/ProfileDetail1';
import ProfileDetailCard from '../components/ProfileDetailCards';
import ProfileDetail2 from '../components/ProfileDetail2';
import ProfileDetail3 from '../components/ProfileDetail3';

export default function Page2Client({ fallback }) { 
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const loadProfile = async () => {
        setLoading(true);
        setError(null); 
        setProfile(null);
        try {
          console.log("Fetching profile for ID:", id); 
          const data = await fetchProfileById(id);
          console.log("Profile data fetched:", data);
          setProfile(data);
        } catch (err) {
          console.error('Error fetching profile:', err);
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      loadProfile();
    } else {
      console.log("No ID found in query params");
      setLoading(false);
      setError(new Error("No profile ID provided"));
    }
  }, [id]); 
  if (loading) {
    return null;
  }
  if (error || !profile) {
    console.log("Showing fallback UI. Error:", error, "Profile:", profile);
    return fallback || (
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
      <ProfileDetail2 />
      <ProfileDetail3 profile={profile} />
    </div>
  );
}
