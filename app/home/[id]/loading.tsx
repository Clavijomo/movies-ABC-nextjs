import '../../styles/spinner.css'

export default function LoadingPage() {
    return (
        <div className="container-spinner">
            <h1>Cargando...</h1>
            <span className="loader"></span>
        </div>
    )
}