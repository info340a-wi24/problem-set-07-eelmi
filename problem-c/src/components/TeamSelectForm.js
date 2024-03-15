import React, { useState } from 'react'; //import React Component

export default function TeamSelectForm(props) {

  //Your work goes here


  const [selectedTeam, setSelectedTeam] = useState('');
  const [includeRunnerUps, setIncludeRunnerUps] = useState(false);
  const handleSelectChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIncludeRunnerUps(event.target.checked);
  };

  const handleSubmit = () => {
    props.applyFilterCallback(selectedTeam, includeRunnerUps);
  };

  const optionElems = props.teamOptions.map((teamName) => {
    return <option key={teamName} value={teamName}>{teamName}</option>
  })

  return (
    <div className="row align-items-center mb-3">
      <div className="col-auto">
        <select id="teamSelect" className="form-select" value={selectedTeam} onChange={handleSelectChange}>
          <option value="">Show all teams</option>
          {optionElems}
        </select>
      </div>
      <div className="col-auto">
        <div className="form-check">
          <input id="runnerupCheckbox" type="checkbox" className="form-check-input" checked={includeRunnerUps} onChange={handleCheckboxChange} />
          <label htmlFor="runnerupCheckbox" className="form-check-label">Include runner-up</label>
        </div>
      </div>
      <div className="col-auto">
        <button id="submitButton" type="button" className="btn btn-warning" onClick={handleSubmit}>Apply Filter</button>
      </div>
    </div>
  );
}