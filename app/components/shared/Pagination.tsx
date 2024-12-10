import { useCategorizedMovies } from '@/app/provider/CategorizedMoviesContext';
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../../styles/home.css'

export const Pagination = () => {
    const {
        prevPage,
        currentPage,
        totalPages,
        nextPage
    } = useCategorizedMovies();

    return (
        <div className='container-pagination'>
            <button onClick={prevPage} disabled={currentPage === 1}>
                <ArrowBackIosNewIcon />
            </button>
            <span style={{ margin: '0 10px' }}>
                Pagina {currentPage} de {totalPages}
            </span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
                <ArrowForwardIosIcon />
            </button>
        </div>
    )
}
