import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href=" ">Title</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=" ">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=" ">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=" ">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=" ">Cotact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-primary" type="submit">Button</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
