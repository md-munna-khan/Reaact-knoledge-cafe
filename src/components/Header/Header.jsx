import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between container w-11/12 mx-auto border-b-2'>
       <div>
       <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
       </div>
<div>
<img src={profile} alt="" />
</div>
        </div>
    );
};

export default Header;