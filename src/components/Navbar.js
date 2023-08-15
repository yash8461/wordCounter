import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <h2 className="navbar-brand">{props.title} </h2>
      
                    <div className={` form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
          
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
   
}

Navbar.defaultProps = {
    title: 'Set title here',
   
  };