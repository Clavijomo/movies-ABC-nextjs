import { Header } from "../components/shared/Header";
import { CategorizedMoviesProvider } from "../provider/CategorizedMoviesContext";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <CategorizedMoviesProvider>
                {children}
            </CategorizedMoviesProvider>
        </>
    )
}