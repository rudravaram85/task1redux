
import React from 'react';
import data from './Data';
import Job from './Job';


export default function JobList(props) {

  

  return (
    <div className="container py-4">
    <ol className="breadcrumb mb-4">
      <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
      <li className="breadcrumb-item active">Jobs</li>
    </ol>
    <div className="card shadow-sm my-5">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className="d-flex align-items-center">
              <h5 className="font-weight-normal mb-0 mr-2">Jobs</h5>
              <button type="button" className="btn btn-sm btn-info btn-rounded btn-floating">
                <i className="fa fa-plus" aria-hidden="true" />
              </button>
            </div>
            <div className="d-flex mt-3">
              <button type="button" className="btn btn-sm btn-outline-info d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Active</h6><h5 className="border-left py-1 px-2 ml-3 mb-0">10</h5>
              </button>
              <button type="button" className="btn btn-sm btn-outline-success d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Submitted</h6><h5 className="border-left py-1 px-2 ml-3 mb-0">20</h5>
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Interviews</h6><h5 className="border-left py-1 px-2 ml-3 mb-0">40</h5>
              </button>
            </div>
          </div>
          <div className="w-25">
            <form className="form-inline my-2 my-lg-0">                
              <div className="input-group search w-100">
                <input className="form-control" type="search" placeholder="Search" id />
                <span className="input-group-append">
                  <button className="btn btn-flat" type="button">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                      <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    </svg>
                  </button>
                </span>
              </div>
            </form>
            <div className="mt-3 d-flex">
              <div className="dropdown">
                <button className="btn btn-flat btn-sm border dropdown-toggle" type="button" id="dropdownMenuFilter" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-filter" aria-hidden="true" /> Filter
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuFilter">
                  <a className="dropdown-item" href="#">Filter</a>
                  <a className="dropdown-item" href="#">Filter</a>
                </div>
              </div>
              <div className="dropdown ml-2">
                <button className="btn btn-flat btn-sm border dropdown-toggle" type="button" id="dropdownMenuGroupBy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-bars" aria-hidden="true" /> Group By
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuGroupBy">
                  <a className="dropdown-item" href="#">Group By</a>
                  <a className="dropdown-item" href="#">Group By</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive mt-3 onclickJoblistTable">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Client</th>
                <th scope="col">Job ID</th>
                <th scope="col">Job Name</th>
                <th scope="col">Openings</th>
                <th scope="col">Posted Date</th>
                <th scope="col">Candidates</th>
                <th scope="col">Interviews</th>
                <th scope="col">Status</th>
                <th scope="col" className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            {data.map((item, i) => {
                        return  <Job  job={item}/>;
    
               })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  
  );
}
