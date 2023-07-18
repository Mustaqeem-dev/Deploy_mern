import React from "react";
import ApplyJob from "./applyJob";
const JobCard = ({ selectedJob }) => {
  return (
    <div className="card p-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="col-lg">
          <h3 className="selectedJobTitle">{selectedJob.title}</h3>
        </div>
        <div>
          <ApplyJob job={selectedJob.title} />
        </div>
      </div>

      <p className="selectedJobLocation">
        <strong>Visit Website:</strong>
        <a
          href="##"
          onClick={() =>
            window.open(
              selectedJob.VisitWebsite,
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          {selectedJob.VisitWebsite}
        </a>
      </p>
      <p className="selectedJobLocation">
        <strong>Timing:</strong> {selectedJob.Timing}
      </p>

      <div className="mb-3">
        <h5 className="selectedJobDescription">
          <strong>Job Description:</strong>
        </h5>
        <p>{selectedJob.job_Description}</p>
      </div>

      <div className="mb-3">
        <h5 className="selectedJobDescription">
          <strong>Responsibilities:</strong>
        </h5>
        <ul>
          {selectedJob.responsibilities &&
            selectedJob.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
        </ul>
      </div>

      <div>
        <h5 className="selectedJobDescription">
          <strong>Qualifications:</strong>
        </h5>
        <ul>
          {selectedJob.qualifications &&
            selectedJob.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default JobCard;
