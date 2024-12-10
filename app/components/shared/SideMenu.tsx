'use client'
import { MovieCategory } from '@/app/interfaces/movie';
import '../../styles/home.css'

interface SideMenuProps {
    handleCategoryClick: (value: MovieCategory) => void;
    selectedCategory: string
    modules: string[]
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
                        {module.replace('_', ' ').toLowerCase()}
                    </li>
                ))}
            </ul>
        </aside>
    )
}