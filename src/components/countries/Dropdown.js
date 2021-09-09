import React, {useState} from 'react'


const Dropdown = () => {
    const [menu, setMenu] = useState(false)

    const onClick = (e) =>{
        if(menu){
            setMenu(false)
        }else{
            setMenu(true)
        }
    }

    return (
        <div className="filter-position">
            <button className="btn btn-light btn-light-shadow" style={{ width: '100%' }} onClick={onClick}>
                Filter by region <i class="fas fa-chevron-down ml-3"></i>
            </button>
            {menu && <ul className="menu btn-light-shadow">
              <li id="region">All</li>
              <li id="region">Africa</li>
              <li id="region">America</li>
              <li id="region">Asia</li>
              <li id="region">Europe</li>
              <li id="region">Oceania</li>
            </ul>}
        </div>
    )
}

export default Dropdown