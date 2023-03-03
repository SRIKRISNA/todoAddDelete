import './todo.css';

const Header = ({ search, setSearch }) => {

    return (
        <div className='header-container'>
            <div className="logo"><h1>To Do List</h1></div>
            <div className="searchbox">
                <form>
                    <div className="searchInner">
                        <input type="text" placeholder="Search Todos..." className="searchText" onChange={(e) => { setSearch(e.target.value) }} value={search} ></input>
                    </div>
                </form>
            </div>

        </div>)
}

export default Header