import React from 'react';

class companyButtons extends React.Component {
  render() {
    const { selectedCompany } = this.props;
    const { handleChange } = this.props;
    const companies = ['Amazon', 'UPS', 'FedEx'];

    return (
      <div className="companies">
        {companies.map((company, index) => {
          return (
            <label key={index}>
              <input
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
  }
}

export default companyButtons;
