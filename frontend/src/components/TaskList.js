import TaskCard from './TaskCard';
import Styles from './TaskList.module.css';
import TaskActionButton from './TaskActionButton';

function TaskList(props) {

    return (
        <div className={Styles.container}>
            <h4>{props.title}</h4>
            {props.cards.map(card => <TaskCard key={card.id} text={card.text} /
            >)}
            <TaskActionButton list={props} />
        </div>
    )
}


export default TaskList
