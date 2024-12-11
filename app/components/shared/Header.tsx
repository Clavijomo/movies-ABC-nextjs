import Image from 'next/image'
import '../../styles/header.css'
import LogoHeader from '../../resources/Logo.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/link';

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
                        <Link href={'/home'}>
                            <li>Popular</li>
                        </Link>
                        <Link href={'/home/favorites'}>
                            <li>Favorites</li>
                        </Link>
                    </ul>
                </div>
                <div className='user-login'>
                    <AccountCircleOutlinedIcon fontSize='large' />
                </div>
            </div>
        </header>
    )
}