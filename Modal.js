import React from 'react';

const Modal = ({
  isOpen,
  onClose,
  name,
  work,
  salary,
  handleNameChange,
  handleWorkChange,
  handleSalaryChange,
  addData,
}) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div className="modal" style={modalStyle} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Data</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} />
              </div>
              <div className="form-group">
                <label htmlFor="work">Work:</label>
                <input type="text" className="form-control" id="work" value={work} onChange={handleWorkChange} />
              </div>
              <div className="form-group">
                <label htmlFor="salary">Salary:</label>
                <input type="text" className="form-control" id="salary" value={salary} onChange={handleSalaryChange} />
              </div>
              <button type="button" className="btn btn-primary" onClick={addData}>
                Add Data
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
