import React, { useEffect } from 'react';

import Dashboard from '../components/Dashboard';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/jobActions';
import JobList  from '../components/JobList';
import JobForm  from '../components/JobForm';

export default function HomeScreen() {

  
  
  const jobDetails = useSelector((state) => state.jobDetails);

  const { job ,isHideTable,isHideForm} = jobDetails;

  
  return (
     <div>
              {isHideTable ? "": <JobList />}
             { isHideForm ? "": <JobForm job={job}/>}
    </div>
  );
}
