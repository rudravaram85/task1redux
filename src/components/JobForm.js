import React from 'react';

export default function JobForm( props) {

      const {client,id,name,openings,created_on,candidates,interviews,status } =props.job;
    

  return (
<div className="container">
  <div className="card shadow-sm my-5">
    <div className="card-body">
      <h5 className="font-weight-normal mb-4">Edit Job</h5>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor>Client</label>
            <input type="text" value={client} className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Job ID</label>
            <input type="text" value={id} className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Job Name</label>
            <input type="text" value={name} className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Openings</label>
            <input type="text" value={openings} className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Posted Date</label>
            <input type="text" value={created_on} className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Candidates</label>
            <input type="text" value={candidates} className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Interviews</label>
            <input type="text" value={interviews} className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Status</label>
            <input type="text" value={status} className="form-control" id />
          </div>
        </div>
        <div className="text-right">
          <button type="button" className="btn btn-sm btn-flat" onclick="window.location.href='HRMS_JobList.html'">Cancel</button>
          <button type="button" className="btn btn-sm btn-primary" onclick="window.location.href='HRMS_JobList.html'">Save</button>
        </div></form>
    </div>
  </div>
</div>
  );
}
