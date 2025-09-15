"use client"
import { useEffect, useState } from 'react';
import ProfileCard from './components/ProfileCard';
import { fetchProfiles } from './utils/api';
import Link from 'next/link';


const Home = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const loadProfiles = async () => {
      try {
        const data = await fetchProfiles();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    loadProfiles();
  }, []);

  return (
    <div className="min-h-screen ">
      <main className="container mx-auto px-15 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {profiles.map((profile) => (
            <Link 
              key={profile.id} 
              href={`/page2?id=${profile.id}`}
              passHref
            >
              <ProfileCard profile={profile} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;