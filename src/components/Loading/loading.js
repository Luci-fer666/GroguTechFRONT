import "./loading.css"

function Loading() {
    return (
    <div className="load">
        <div className="loading">
            <div className="loader"></div><br/>
            <div className="textload">Por favor aguarde, esto podria tardar unos minutos...</div>
        </div>
    </div>
    )
}

export default Loading;