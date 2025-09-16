import Image from 'next/image';
export default function Header() {
  return (
    <header className="bg-white p-3 sm:p-4 shadow-sm"> 
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4"> 
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto space-x-4"> 
          <Image
            src='/ba50846fb2a75081a804afca4d083d2f289fc2b0.png'
            alt='logo1'
            width={150} 
            height={30} 
            className='ms-0 sm:ms-10' 
          />
        </div>
        <div className="flex items-center justify-center space-x-6 sm:space-x-10 w-full sm:w-auto"> 
          <Image
            src='/8062a3daa879585ec1b5ac514880dffba230b762.png'
            alt='logo2'
            width={70} 
            height={35} 
          />
          <Image
            src='/ab3224e296a8a32338a877b6010d1b1c5f54149a.png'
            alt='logo3'
            width={70} 
            height={35} 
            className='me-0 sm:me-10' 
          />
        </div>
      </div>
    </header>
  );
}
