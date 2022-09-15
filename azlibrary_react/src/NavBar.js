import React from 'react'
import logo from './Azgs.png';

export default function NavBar() {
    return (
        <>
            <header className="bg-red arizona-header" id="header_arizona">
                <div className="container">
                    <div className="row">
                        <a className="arizona-logo" href="http://www.arizona.edu" title="The University of Arizona homepage">
                            <img className="arizona-line-logo" alt="The University of Arizona Wordmark Line Logo White" src="https://cdn.digital.arizona.edu/logos/v1.0.0/ua_wordmark_line_logo_white_rgb.min.svg" />
                        </a>
                    </div>
                </div>
            </header>

            <nav class="navbar navbar-expand-lg navbar-light mb-4">
                <a className="navbar-brand" href="https://azgs.arizona.edu/" target="_blank" rel="noopener noreferrer"><img src={logo} alt="AZGS logo" height="60px" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="material-icons-sharp"> Menu </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="https://devdata.azgs.arizona.edu/api/v1/metadata?help=html" target="_blank" rel="noopener noreferrer">API</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://xdd.wisc.edu/adept/" target="_blank" rel="noopener noreferrer">Adept</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://digital.arizona.edu/arizona-bootstrap/docs/2.0/getting-started/introduction/" target="_blank" rel="noopener noreferrer">AZBootstrap</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}