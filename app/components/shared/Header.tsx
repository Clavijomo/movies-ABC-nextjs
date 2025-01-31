'use client'

import { useSearchContext } from '@/app/provider/SearchContext';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../../styles/header.css';

export const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { handleSearch } = useSearchContext();
    const [debouncedSearchItem, setDebounceSearchItem] = useState<string>(searchTerm);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceSearchItem(searchTerm);
        }, 1000);

        return () => {
            clearTimeout(handler);
        }
    }, [searchTerm]);

    useEffect(() => {
        handleSearch(debouncedSearchItem);
    }, [debouncedSearchItem, handleSearch]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            handleSearch(searchTerm);
        }
    }

    return (
        <header className="header">
            <div className="container-header">
                <div className="section-options">
                    <h1 className='logo'>MOVIES ABC</h1>
                    <ul>
                        <Link href={'/home'}>
                            <li>Popular</li>
                        </Link>
                        <Link href={'/home/favorites'}>
                            <li>Favorites</li>
                        </Link>
                    </ul>
                    <form onSubmit={handleSearchSubmit}>
                        <div className='search-input'>
                            <input
                                type='text'
                                placeholder='Buscar...'
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <SearchIcon />
                        </div>
                    </form>
                </div>
                <div className='user-login'>
                    <AccountCircleOutlinedIcon fontSize='large' />
                </div>
            </div>
        </header>
    );
}