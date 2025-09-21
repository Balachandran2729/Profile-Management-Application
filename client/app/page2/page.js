import { Suspense } from 'react';
import Page2Client from './Page2Client';
import Link from 'next/link';

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
    </div>
  );
}

function ProfileNotFound() {
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

export default function Page2() {

  return (

    <Suspense fallback={<LoadingSpinner />}>
      <Page2Client fallback={<ProfileNotFound />} />
    </Suspense>
  );
}
