import React from 'react';

export default function CandidateInfo( props) {

     // const {client,id,name,openings,created_on,candidates,interviews,status } =props.job;
    

  return (
    <div className="container py-4">
    <h4 className="font-weight-normal mb-3">Candidates Info</h4>
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="font-weight-normal mb-4">Candidates</h5>
        <div className="row">
          <div className="col-md-4"> 
            <div className="card shadow-sm mb-3">
              <div className="card-header">Active</div>
              <div className="card-body">     
                {/*Panel*/}
                <div className="card shadow-sm card-body mb-3 p-2 pointer" data-toggle="modal" data-target="#candidateInfoModal">
                  <div className="media align-items-center">
                    <img className="d-flex rounded-circle mx-auto img-sm" src="https://mdbootstrap.com/img/Others/documentation/img (3)-mini.jpg" alt="Generic placeholder image" />
                    <div className="media-body mx-3">
                      <div>Candidate 1</div>
                    </div>
                  </div>
                </div>
                {/*/.Panel*/}    
                {/*Panel*/}
                <div className="card shadow-sm card-body mb-3 p-2 pointer" data-toggle="modal" data-target="#candidateInfoModal">
                  <div className="media align-items-center">
                    <img className="d-flex rounded-circle mx-auto img-sm" src="https://mdbootstrap.com/img/Others/documentation/img (3)-mini.jpg" alt="Generic placeholder image" />
                    <div className="media-body mx-3">
                      <div>Candidate 2</div>
                    </div>
                  </div>
                </div>
                {/*/.Panel*/}
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <button type="button" className="btn btn-sm btn-flat" onclick="window.location.href='HRMS_JobForm.html'">Back</button>
        </div>
      </div>
    </div>
  </div>
  
  );

}