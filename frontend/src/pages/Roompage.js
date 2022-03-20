import Styles from './Roompage.module.css'
import { useSelector } from 'react-redux';
import Roomcard from '../components/Roomscard';

const Roompage = () => {

    const rooms = useSelector(state=>state.rooms);

    return (
        <> 
            <div className={Styles.roomsHeader}>
                <h1>Create Room</h1>
            </div>
            <div className={Styles.rooms_container}>
                {rooms.map(room=><p>{room.title}</p>)}
                <Roomcard />
            </div> 
        </>
    )
}

export default Roompage
