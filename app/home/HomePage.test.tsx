import { render, screen } from '@testing-library/react';
import HomePage from './page';
import { CategorizedMoviesProvider, useCategorizedMovies } from '../provider/CategorizedMoviesContext';
import { FavoritesProvider } from '../provider/FavoritesContext';

jest.mock('../provider/CategorizedMoviesContext', () => ({
    useCategorizedMovies: jest.fn(),
}));

describe('HomePage Component', () => {
    it('Renders the HomePage Component', () => {
        render(
            <FavoritesProvider>
                <CategorizedMoviesProvider>
                    <HomePage />
                </CategorizedMoviesProvider>
            </FavoritesProvider>
        );

        const heading = screen.getByText(/popular/i);
        expect(heading).toBeDefined();
    })
})