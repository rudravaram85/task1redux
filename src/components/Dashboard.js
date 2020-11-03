import React from 'react';

export default function Dashboard() {
  return (
    <div>
  {/* Navigation */}
  <nav className="navbar navbar-expand navbar-dark bg-primary shadow-sm">
    <div className="container">
      <a className="navbar-brand m-0 h1" href="#">CATS Logo</a>
      <div className>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-inbox" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" />
              </svg>
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarMessagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </a>
            <div className="dropdown-menu animate slideIn" aria-labelledby="navbarMessagesDropdown">
              <a className="dropdown-item" href="#">Email</a>
              <a className="dropdown-item" href="#">Text Messages</a>
              <a className="dropdown-item" href="#">Messages</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="d-none d-sm-inline">Home</span>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
              </svg>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarProfileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="d-none d-sm-inline">Profile</span>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle font-lg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
              </svg>
            </a>
            <div className="dropdown-menu animate slideIn" aria-labelledby="navbarProfileDropdown">
              <a className="dropdown-item" href="#">Personal Info</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarRecruitingDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Recruiting <span className="sr-only">(current)</span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarRecruitingDropdown">
              <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Tasks</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Interview</a></li>
                  <li><a className="dropdown-item" href="#">Call</a></li>
                  <li><a className="dropdown-item" href="#">Review</a></li>
                </ul>
              </li>
              <li><a className="dropdown-item" href="HRMS_JobList.html">Jobs</a></li>
              <li><a className="dropdown-item" href="#">Candidates</a></li>
              <li><a className="dropdown-item" href="#">Profiles &amp; Resumes</a></li>
              <li><a className="dropdown-item" href="#">Analytics</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarOnboardingDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Onboarding
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarOnboardingDropdown">
              <li><a className="dropdown-item" href="#">Tasks</a></li>
              <li><a className="dropdown-item" href="#">Candidates</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Onboarding</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">HR</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacts</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarHelpDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Help
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarHelpDropdown">
              <li><a className="dropdown-item" href="#">Security Settings</a></li>
              <li><a className="dropdown-item" href="#">Dashboard</a></li>
              <li><a className="dropdown-item" href="#">Personalization</a></li>
            </ul>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <div className="input-group">
            <input type="text" className="form-control rounded" id />
            <button className="btn btn-link" type="submit">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </nav>
  {/* Page Content */}
  {/* Optional JavaScript; choose one of the two! */}
  {/* Option 1: jQuery and Bootstrap Bundle (includes Popper) */}
  {/* Option 2: jQuery, Popper.js, and Bootstrap JS
    
    
    
    */}
</div>

  );
}
