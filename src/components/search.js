import backIcon from "../images/back.svg"

function Search({ meal, active, children, setActive }) {
    return (
      <div className={active ? "search search-area__active" : "search"} onClick={(e) => e.stopPropagation()}>
          <img src={backIcon} alt="back" className="back-icon" onClick={()=>setActive(false)}/>
        <p>{meal}</p>
        {children}
      </div>
    );
  }
  
  export default Search;