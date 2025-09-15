import Image from 'next/image';
export default function Header() {
    return(
        <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image 
              src='/ba50846fb2a75081a804afca4d083d2f289fc2b0.png'
              alt='logo1'
              width={250}
              height={50}
              className='ms-10'
            />
          </div>
          <div className="flex items-center space-x-10">
            <Image 
              src='/8062a3daa879585ec1b5ac514880dffba230b762.png'
              alt='logo2'
              width={100}
              height={50}
            />
            <Image 
              src='/ab3224e296a8a32338a877b6010d1b1c5f54149a.png'
              alt='logo3'
              width={100}
              height={50}
              className='me-10'
            />
          </div>
        </div>
      </header>
    );
}