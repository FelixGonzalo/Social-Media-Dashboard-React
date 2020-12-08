import React, {useRef} from 'react';
import './switch.css';

function Switch() {
    const ref = useRef(null)

    // function handleChange(event){
    //     console.log(event.target.checked)
    // } sin ref

    function handleChange(event){
        if (ref.current.checked) {
            document.body.classList.toggle('modoOscuro')
            //document.body.modo.innerHTML = 'Dark mode'
        } else {
            document.body.classList.remove('modoOscuro')
            //document.body.modo.innerHTML = 'Light mode'
        }
    }

    return (
        <div className="header__darkMode">
                    <p id = "darkMode-modo">Light Mode</p>
                    <input ref={ref} onChange={handleChange} type="checkbox" id="darkMode-checkbox" className = "darkMode-checkbox" />
                    <label className="switch" htmlFor="darkMode-checkbox"></label>
        </div>
    );
}

export default Switch;