import Song from './Song'
import { songList } from './songList'

{/* imported child component and array of data (list of songs),
    call child component and map through the array for each song */}

export default function ListArea() {
    return (
        <div className='pt-5'>
            { songList.map( song => <Song key={song.id} song={song}/>)}
        </div>
    )
}