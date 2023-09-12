import profile from '../../assets/images/profile.png'
const Header = () => {
   return (
      <div className='pt-8 flex justify-between items-center pb-8 border-b-2'>
         <h1 className='font-bold text-3xl'>Knowledge Cafe!</h1>
         <img src={profile} />
      </div>
   );
};

export default Header;