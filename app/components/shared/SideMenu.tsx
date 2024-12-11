'use client'
import { MovieCategory } from '@/app/interfaces/movie';
import '../../styles/home.css';
import Link from 'next/link';

interface SideMenuProps {
    handleCategoryClick: (value: MovieCategory) => void;
    selectedCategory: string
    modules: MovieCategory[]
}

export const SideMenu = ({ handleCategoryClick, selectedCategory, modules }: SideMenuProps) => {
    return (
        <aside className='sidemenu'>
            <h3>Genres</h3>
            <ul>
                {modules && modules.map((module) => (
                    <li
                        onClick={() => handleCategoryClick(module)}
                        className={selectedCategory === module ? 'active' : ""}
                        key={module}
                    >
                        {module.replace('_', ' ')}
                    </li>
                ))}
                <Link href={'/home/favorites'}>
                    <li>Favorites</li>
                </Link>
            </ul>
        </aside>
    )
}