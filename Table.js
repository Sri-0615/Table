import React from 'react'
function Table()
{
  
    return(
        <><main style={{marginTop: "70px", marginLeft:"200px"}}>
     

<div class="d-flex justify-content-between">
  <div class="p-2"><h2>My Staff</h2></div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2"><div class="modal-body">
  <h5>Popover in a modal</h5>
  <p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
  <hr/>
  <h5>Tooltips in a modal</h5>
  <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
</div></div></div>
  
        <table class="table">
  <thead className="table-light">
    <tr>
      <th>Sr No.</th>
      <th>Name</th>
      <th>Class</th>
      <th>Percentage</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Gouri</td>
      <td>5th</td>
      </tr>
      <tr>
      <td>1</td>
      <td>Gouri</td>
      <td>5th</td>
      </tr>
      <tr>
      <td>1</td>
      <td>Gouri</td>
      <td>5th</td>
      </tr>
      <tr>
      <td>1</td>
      <td>Gouri</td>
      <td>5th</td>
      </tr>
      <tr>
      <td>1</td>
      <td>Gouri</td>
      <td>5th</td>
      </tr>
      <tr>
      <td>1</td>
      <td>Gouri</td>
      <td>5th</td>
      </tr>
      <tr>
      <td>1</td>
      <td>Gouri</td>
      <td>5th</td>
      </tr>
      <tr>
      <td>1</td>
      <td>Gouri</td>
      <td>5th</td>
      </tr>
       <tr>
      <td>1</td>
      <td>Gouri</td>
      <td>5th</td>
      </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>2</td>
      <td>Sristi</td>
      <td>8th</td>
      </tr>
  </tfoot>
</table>
        </main></>
    )
}
export default Table;