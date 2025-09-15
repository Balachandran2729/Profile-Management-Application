
const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-500 cursor-pointer transform hover:-translate-y-1" style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="h-24 bg-orange-400"></div>
      <div className="flex justify-center -mt-15">
        <div className="w-30 h-30 rounded-full border-4 border-white overflow-hidden">
          <img 
            src={profile.avatar} 
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Profile Info */}
      <div className="p-4 text-center">
        <h3 className="font-bold text-xl text-gray-800">{profile.name}</h3>
        <p className="text-sm text-gray-600">{profile.gender} | {profile.age} | {profile.pronouns}</p>
      </div>
    </div>
  );
};

export default ProfileCard;