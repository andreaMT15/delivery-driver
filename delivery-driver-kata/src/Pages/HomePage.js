import React from 'react';
import Companies from '../Components/Companies/CompanyButtons';
import Times from '../Components/Times/TimeSelection';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCompany: '',
      startTime: '',
      endTime: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  calculateTotal() {
    const { selectedCompany, startTime, endTime } = this.state;
    const amazonRate = 21;
    const upsRate = 17;
    const fedExRate = 27;
    let totalPay = 0;
    let hoursWorked = parseInt(endTime) - parseInt(startTime);
    if (selectedCompany === '' || startTime === '' || endTime === '') {
      hoursWorked = 0;
    } else if (selectedCompany === 'Amazon') {
      totalPay = hoursWorked * amazonRate;
    } else if (selectedCompany === 'UPS') {
      totalPay = hoursWorked * upsRate;
    } else if (selectedCompany === 'FedEx') {
      totalPay = hoursWorked * fedExRate;
    }
    return totalPay;
  }

  render() {
    const { selectedCompany, startTime, endTime } = this.state;

    return (
      <div>
        <h3>Choose a Company</h3>
        <form>
          <span>
            <Companies selectedCompany={selectedCompany} handleChange={this.handleChange} />
          </span>
          <Times startTime={startTime} endTime={endTime} handleChange={this.handleChange} />
        </form>
        <div id="totalPay">
          <h3> Your total Pay is: ${this.calculateTotal()}</h3>
        </div>
      </div>
    );
  }
}

export default HomePage;
