import React from "react";

const jobListings = [
  {
    title: "Frontend Developer",
    description:
      "Responsible for implementing visual elements that users see and interact with in a web application.",
    requirements:
      "3+ years of experience with React.js, HTML, CSS, and JavaScript.",
    applyLink: "https://company.com/apply/frontend-developer",
  },
  {
    title: "Backend Developer",
    description:
      "Responsible for server-side web application logic and integration of the work front-end developers do.",
    requirements: "3+ years of experience with Node.js, Express, and MongoDB.",
    applyLink: "https://company.com/apply/backend-developer",
  },
];

const employeeBenefits = [
  "Health insurance",
  "Flexible working hours",
  "Remote work options",
  "Professional development opportunities",
];

const companyCulture = [
  "Collaborative work environment",
  "Focus on innovation and creativity",
  "Open communication and feedback",
  "Diversity and inclusion",
];

const JobListing = ({ job }) => (
  <div className="border p-4 rounded-lg shadow-lg mb-6">
    <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
    <p className="text-gray-700 mb-2">{job.description}</p>
    <h4 className="text-lg font-medium mb-1">Requirements:</h4>
    <p className="text-gray-600 mb-4">{job.requirements}</p>
    <a
      href={job.applyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Apply Here
    </a>
  </div>
);

const EmployeeBenefits = () => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Employee Benefits and Perks</h2>
    <ul className="list-disc pl-5 text-gray-700">
      {employeeBenefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>
  </div>
);

const CompanyCulture = () => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Company Culture</h2>
    <ul className="list-disc pl-5 text-gray-700">
      {companyCulture.map((culturePoint, index) => (
        <li key={index}>{culturePoint}</li>
      ))}
    </ul>
  </div>
);

const HiringVacancy = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-4xl font-bold mb-8">Current Job Openings</h1>
    {jobListings.map((job, index) => (
      <JobListing key={index} job={job} />
    ))}

    <EmployeeBenefits />
    <CompanyCulture />
  </div>
);

export default HiringVacancy;
