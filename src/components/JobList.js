import React from 'react';
import data from './Data';
import Job from './Job';
export default function JobList(props) {

  

  return (
    <div className="container">
    <div className="card shadow-sm my-5">
      <div className="card-body">
        <h5 className="font-weight-normal mb-4">Job List</h5>
        <ul className="nav nav-tabs" id="jobListTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="active-tab" data-toggle="tab" href="#active" role="tab" aria-controls="active" aria-selected="true">Active</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="submitted-tab" data-toggle="tab" href="#submitted" role="tab" aria-controls="submitted" aria-selected="false">Submitted</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="interviews-tab" data-toggle="tab" href="#interviews" role="tab" aria-controls="interviews" aria-selected="false">Interviews</a>
          </li>
        </ul>
        <div className="tab-content" id="jobListTabContent">
          <div className="tab-pane fade show active" id="active" role="tabpanel" aria-labelledby="active-tab">
            <div className="table-responsive mt-3">
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
          <div className="tab-pane fade" id="submitted" role="tabpanel" aria-labelledby="submitted-tab">
            Submitted
          </div>
          <div className="tab-pane fade" id="interviews" role="tabpanel" aria-labelledby="interviews-tab">
            Interviews
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
