import React from 'react';
import { useHistory  } from 'react-router-dom';

export default function JobForm( props) {
  const history = useHistory()

      //const {client,id,name,openings,created_on,candidates,interviews,status } =props.job;
      const handleRedirect = () => {
        history.push('/candidate');
  
    };

  return (
    <div className="container py-4">
    <ol className="breadcrumb mb-4">
      <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
      <li className="breadcrumb-item"><a href="HRMS_JobList.html">Jobs</a></li>
      <li className="breadcrumb-item active">Job Dashboard</li>
    </ol>
    <h4 className="font-weight-normal mb-3">Job Dashboard</h4>
    <div className="row">
      <div className="col-md-9">
        {/* Horizontal Steppers */}
        <div>
          <ul className="stepper stepper-horizontal">
            <li className="completed">
              <div className="step">
                <span className="circle">1</span>
                <span className="label">New</span>
              </div>
            </li>
            <li className="active">
              <div className="step">
                <span className="circle">2</span>
                <span className="label">Active</span>
              </div>
            </li>
            <li>
              <div className="step">
                <span className="circle">3</span>
                <span className="label">Closed</span>
              </div>
            </li>
          </ul>
        </div>
        {/* /.Horizontal Steppers */}
      </div>
    </div>
    <div className="row">
      <div className="col-md-9">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="font-weight-normal mb-0">Job 1</h5>
              <div className="font-weight-normal mb-0 text-danger">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-clock-history fa-lg mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                  <path fillRule="evenodd" d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                  <path fillRule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                20 hrs Remaining
              </div>
              <div className="dropdown">
                <button className="btn btn-flat dropdown-toggle dropdown-caret-hide py-0 px-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">More Profiles</a>
                </div>
              </div>
            </div>
            <form>
              <div className="form-group row">
                <label htmlFor className="col-sm-4 col-lg-2 col-form-label">Label</label>
                <div className="col-sm-8 col-lg-4">
                  <input type="text" readOnly className="form-control-plaintext" id defaultValue="Description" />
                </div>
                <label htmlFor className="col-sm-4 col-lg-2 col-form-label">Label</label>
                <div className="col-sm-8 col-lg-4">
                  <input type="text" readOnly className="form-control-plaintext" id defaultValue="Description" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor className="col-sm-4 col-lg-2 col-form-label">Label</label>
                <div className="col-sm-8 col-lg-4">
                  <input type="text" readOnly className="form-control-plaintext" id defaultValue="Description" />
                </div>
                <label htmlFor className="col-sm-4 col-lg-2 col-form-label">Label</label>
                <div className="col-sm-8 col-lg-4">
                  <input type="text" readOnly className="form-control-plaintext" id defaultValue="Description" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card shadow-sm mt-3 mt-md-0">
          <div className="card-body">
            <h6 className="font-weight-normal mb-4">Work Flow</h6>
            <ul className="list-group list-group-flush small">
              <li className="list-group-item px-0">Work Flow 1</li>
              <li className="list-group-item px-0">Work Flow 2</li>
              <li className="list-group-item px-0">Work Flow 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-md-9">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="font-weight-normal mb-0">Pipeline/Candidates</h5>
              <div className="dropdown">
                <button className="btn btn-flat dropdown-toggle dropdown-caret-hide py-0 px-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">More Profiles</a>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3">
              <button type="button" className="btn btn-outline-info" style={{minWidth: '9rem'}} onclick="window.location.href='HRMS_JobCandidates.html'">
                <h6 className="mt-3">Pipeline</h6>
                <hr />
                <h5 className>10</h5>
              </button>
              <button onClick={handleRedirect}  type="button" className="btn btn-outline-success ml-3" style={{minWidth: '9rem'}} onclick="window.location.href='HRMS_JobCandidates.html'">
                <h6 className="mt-3">Candidates</h6> 
                <hr />
                <h5 className>25</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card shadow-sm mt-3 mt-md-0">
          <div className="card-body">
            <h6 className="font-weight-normal mb-4">Job Activities</h6>
            <ul className="list-group list-group-flush small">
              <li className="list-group-item px-0">Activity 1</li>
              <li className="list-group-item px-0">Activity 2</li>
              <li className="list-group-item px-0">Activity 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    );
}