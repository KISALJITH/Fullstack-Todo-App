import styles from './styles.module.css';
import ToDo from "./ToDo";

const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>My ToDo</h1>
                <div className="App">
                    <div className="container">
                        <h1>ToDo </h1>
                        <div className="top">
                        <input 
                        type="text" 
                        placeholder="Add your works..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        />
                        <div 
                            className="add" 
                            onClick={ isUpdating ? 
                            () =>updateToDo(toDoId, text, setToDo, setText, setIsUpdating) 
                            : () => addToDo(text, setText, setToDo)}>
                            {isUpdating ? "Update" : "Add"}
                        </div>
                        </div>
                        <div className="list">
                        {toDo.map((item) => <ToDo 
                        key={item._id} 
                        text={item.text}
                        updateMode = {() => updateMode(item._id, item.text)}
                        deleteToDo = {() => deleteToDo(item._id, setToDo)} />)}

                        </div>
                    </div>
                    </div>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </div>
    )
};

export default Main;