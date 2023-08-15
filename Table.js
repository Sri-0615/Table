import React, { useState } from 'react';
import Modal from './Modal';

function Table() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [work, setWork] = useState('');
  const [salary, setSalary] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addData = () => {
    const newData = { name, work, salary };
    setData([...data, newData]);
    closeModal();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleWorkChange = (event) => {
    setWork(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  return (
    <div>
      <main style={{ marginTop: "70px", marginLeft: "200px" }}>
        <div className="d-flex justify-content-between">
          <div className="p-2">
            <h2>My Staff</h2>
          </div>
          <div className="p-2">
           
          </div>
          <div className="p-2">
            <button className="btn btn-primary" onClick={openModal}>
              Open Modal
            </button>
          </div>
        </div><br/>
{/*table for to add new data*/}
        <table className="table">
          <thead className="table-light">
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Work</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.work}</td>
                <td>{item.salary}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>1</td>
              <td>Aadhar</td>
              <td>driver</td>
              <td>7000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Aadhar</td>
              <td>driver</td>
              <td>7000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Aadhar</td>
              <td>driver</td>
              <td>7000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Aadhar</td>
              <td>driver</td>
              <td>7000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Aadhar</td>
              <td>driver</td>
              <td>7000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Aadhar</td>
              <td>driver</td>
              <td>7000</td>
            </tr>
          </tfoot>
        </table>

        <Modal
  isOpen={isModalOpen}
  onClose={closeModal}
  name={name}
  work={work}
  salary={salary}
  handleNameChange={handleNameChange}
  handleWorkChange={handleWorkChange}
  handleSalaryChange={handleSalaryChange}
  addData={addData}
>

                 </Modal>
      </main>
    </div>
  );
}

export default Table;
