{/* function takes parameters of the song properties and displays them in list area under its own div,
    since its with map method it will keep going through every song item and render any changes */}

export default function Song({song}: {song : {title : string, album : string, artist : string, length : string}}) {
    return (
        <div className="border-bottom d-flex justify-content-between">
            <div style={{maxWidth:'50%'}}>
                <div className="fs-4">{song.title}</div>
                <div className="fs-6">{song.album} - {song.artist}</div>
            </div>
            <div className="align-self-center">
                <span style={{paddingRight:10}}>{song.length}</span><button className="btn btn-dark" type="button">Remove</button>
            </div>
        </div>
    )
}