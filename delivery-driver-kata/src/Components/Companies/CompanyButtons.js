import React from 'react';
import './CompanyButtons.css';

const companyButtons = props => {
  const { selectedCompany, handleChange } = props;
  const companies = ['Amazon', 'UPS', 'FedEx'];

  return (
    <div className="companyWrapper">
      {companies.map((company, index) => {
        return (
          <label key={index}>
            <input
              data-testid="company-input"
              className="companies"
              type="radio"
              value={company}
              name="selectedCompany"
              onChange={handleChange}
              checked={selectedCompany === company}
            />
            {company}
          </label>
        );
      })}
    </div>
  );
};

export default companyButtons;
