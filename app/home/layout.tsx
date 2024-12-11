import { Header } from "../components/shared/Header";
import { CategorizedMoviesProvider } from "../provider/CategorizedMoviesContext";
import { FavoritesProvider } from "../provider/FavoritesContext";
import '../styles/home.css'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <FavoritesProvider>
                <CategorizedMoviesProvider>
                    {children}
                </CategorizedMoviesProvider>
            </FavoritesProvider>
        </>
    )
}