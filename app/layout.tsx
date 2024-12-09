import { Open_Sans } from 'next/font/google'

export const metadata = {
    title: 'ABC - Movies'
}

const openSans = Open_Sans({
    weight: ['300', '400', '500', '700'],
    style: ['italic', 'normal'],
    subsets: ['latin']
})

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={openSans.className}>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}