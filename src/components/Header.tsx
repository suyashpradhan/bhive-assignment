import Logo from '../images/logo.png';
import Phone from '../icons/phone.svg'

export const Header = () => {
    return (
        <header className="bg-white shadow max-sm:px-8 py-4 md:px-12 xl:px-20 flex justify-between items-center">
            <img src={Logo} alt="Host meeting illustration" className="w-full h-auto max-w-32"/>
            <div className='border-[1px] border-[solid] border-[#F2B304] p-[10px] rounded-[4px]'>
                <img src={Phone} alt="Host meeting illustration" className="w-full h-auto max-w-32"/>
            </div>
        </header>
    )
}