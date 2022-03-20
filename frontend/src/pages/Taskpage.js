import Styles from './Taskpage.module.css'
import TaskList from './../components/TaskList';
import TaskActionButton from './../components/TaskActionButton';
import { useSelector } from 'react-redux';

const Taskpage = () => {

    const lists = useSelector(state => state.lists)

    return (
        <>
            <div className={Styles.tasksHeader}>
              <h1>Organize Tasks</h1> 
            </div>

            {/* 
                => mapping each list from the list reducer
                => getting dat a from redux store and mapping into TaskList component
            */}
            <div className={Styles.list_container} >
                {lists.map(list => <TaskList key={list.id} title = {list.title} cards = {list.cards}/>)}
            <TaskActionButton list={lists} />
            </div>
        </>
    )
}

export default Taskpage
