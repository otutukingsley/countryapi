import React, {useState} from 'react'


const Dropdown = ({ dropFilter }) => {
    const [menu, setMenu] = useState(false)
    const [text, setText] = useState('')

    const onClick = (e) =>{
        if(menu){
            setMenu(false)
        }else{
            setMenu(true)
        }
    }


    const innerText = (e) => {
        setText(e.target.innerText)
       dropFilter(text)
    }

    return (
        <div className="filter-position">
            <button className="btn btn-light btn-light-shadow" style={{ width: '100%' }} onClick={onClick}>
                Filter by region <i className="fas fa-chevron-down ml-3"></i>
            </button>
            {menu && <ul className="menu btn-light-shadow">
              <li id="region" style={{ cursor: 'pointer' }} onClick={innerText}>Africa</li>
              <li id="region" style={{ cursor: 'pointer' }} onClick={innerText}>America</li>
              <li id="region" style={{ cursor: 'pointer' }} onClick={innerText}>Asia</li>
              <li id="region" style={{ cursor: 'pointer' }} onClick={innerText}>Europe</li>
              <li id="region" style={{ cursor: 'pointer' }} onClick={innerText}>Oceania</li>
            </ul>}
        </div>
    )
}

export default Dropdown