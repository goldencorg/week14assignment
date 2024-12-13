import SelectedPlaylist from './SelectedPlaylist'
import ListArea from './ListArea'
import { playlistList } from './playlistList'

{/* imported the two child components and array of data (playlists again),
    using prop for which playlist I select which would be the one with id number 1,
    then create a list area for songs below */}

export default function Playlist(){
    return (
        <div className='d-flex flex-column p-5 container-fluid col-xl-8' style={{height: '100vh', overflowY: 'auto'}}>
            <div><SelectedPlaylist playlist={playlistList[1]}/></div>
            <div><ListArea /></div>
        </div>
    )
}
