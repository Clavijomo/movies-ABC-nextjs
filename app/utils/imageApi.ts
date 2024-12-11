export const getImageAPI = (image: string): string => {
    if (!image) {
        return 'https://via.placeholder.com/500x750?text=No+Image'
    }

    return `${process.env.NEXT_PUBLIC_API_IMG}${image}`
}