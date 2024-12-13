import AlternativeChoices from './AlternativeChoices'
import PlaylistChoices from './PlaylistChoices'
import { playlistList } from './playlistList'

{/* imported and returned two child components of Sidebar,
    using an array of data (mapping through playlists) which will render PlaylistChoices whenever I make changes to the data file */}

export default function Sidebar() {
    return (
        <div className='border-end p-4 d-flex flex-column col-xl-2' style={{height: '100vh', overflowY: 'auto'}}>
            <div><AlternativeChoices /></div>
            <h6 className="text-muted">Playlists</h6>
            <div>{ playlistList.map( playlist => <PlaylistChoices key={playlist.id} playlist={playlist}/>)}</div>
        </div> 
      )
}