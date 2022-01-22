import React, {useState} from 'react'

const Navbar = ({data}) => {
    const [nightMode, setNightMode] = useState(true);

    return (
        <nav className="my-nav navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {/* <img src="" alt="" width="30" height="24" className="d-inline-block align-text-top" /> */}
                    <i className="fas fa-cloud-sun logo"></i>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto me-auto">
                        {
                            data.map(comp => {
                                return (
                                    <li style={{padding: '0px 18px'}} key={comp.id} className={comp.id === 1 ? 'nav-item routes active' : 'nav-item routes'}>
                                        <a className="nav-link" href='/'>{comp.route}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="mode-view" onClick={() => setNightMode(!nightMode)}>
                    {nightMode ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
