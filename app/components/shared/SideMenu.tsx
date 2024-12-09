'use client'

import '../../styles/home.css'

interface SideMenuProps {
    handleCategoryClick: (value: string) => void;
    selectedCategory: string
    modules: string[]
}

export const SideMenu = ({ handleCategoryClick, selectedCategory, modules }: SideMenuProps) => {
    return (
        <aside className='sidemenu'>
            <h3>Genres</h3>
            <ul>
                <li className={selectedCategory === 'All' ? 'active' : ''}
                    onClick={() => handleCategoryClick('All')}>
                    Todas
                </li>
                {modules && modules.map((module) => (
                    <li
                        onClick={() => handleCategoryClick(module)}
                        className={selectedCategory === module ? 'active' : ""}
                        key={module}
                    >
                        {module}
                    </li>
                ))}
            </ul>
        </aside>
    )
}