import { render, screen } from '@testing-library/react';
import { CategorizedMoviesProvider } from '../provider/CategorizedMoviesContext';
import { FavoritesProvider } from '../provider/FavoritesContext';
import HomePage from './page';

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