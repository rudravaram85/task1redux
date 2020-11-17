import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory  } from 'react-router-dom';

export default function Job(props) {

  const history = useHistory()


      const item = props.job;
      const dispatch = useDispatch();


    const handleEdit = (job,dispatch) => {
        console.log(job);
      // tightly coupled, but you have more control over it
      dispatch({ type: "JOB_EDIT", payload: job });
    };

    
    const handleRedirect = () => {
      history.push('/jobinfo');

  };


    return (

              <tr onClick={handleRedirect}>
                <th>{item.client}</th>
                 <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.openings}</td>
            <td>{item.openings}</td>
            <td>{item.created_on}</td>
            <td>{item.candidates}</td>
            <td>{item.interviews}</td>
            <td>{item.status}</td>
                          <td className="text-center">
                      <div className="dropdown">
                        <button className="btn btn-flat dropdown-toggle dropdown-caret-hide py-0 px-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" onClick={()=>handleEdit(item,dispatch)}>Edit</a>
                          <a className="dropdown-item" href="#">Hold</a>
                          <a className="dropdown-item" href="#">Close</a>
                        </div>
                      </div>
                    </td>
                  </tr> 
  );
}
