import playlistImage from './assets/playlist.svg'

{/* imported playlist logo to include next to each playlist, 
    function will take the title of each playlist in array of data and create a new dive to place it below the previous one*/}

export default function PlaylistChoices({playlist} : {playlist : {title:string}}) {
    return (
        <div style={{overflow: 'hidden'}}>
            <div>
                <div className="fs-4 d-flex flex-row">
                    <img className='align-self-center' src={playlistImage} style={{paddingLeft: 15, height: 17}}></img>
                    <div style={{textIndent:5}}>{playlist.title}</div>
                </div>
            </div>
        </div>
    )
}