import Image from 'next/image'
import '../../styles/header.css'
import LogoHeader from '../../resources/Logo.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const Header = () => {
    return (
        <header className="header">
            <div className="container-header">
                <div className="section-options">
                    <Image
                        src={LogoHeader}
                        alt='logo'
                        className='logo'
                        width={100}
                        height={100}
                    />
                    <ul>
                        <li>Popular</li>
                        <li>Favorites</li>
                    </ul>
                </div>
                <div className='user-login'>
                    <AccountCircleOutlinedIcon fontSize='large' />
                </div>
            </div>
        </header>
    )
}