import React from 'react';

function handleChange(e) {
  e.preventDefault();
}

export default function ComputerPackagesScreen() {
  return (
    <div>
      <form>
        <h3>Please select the package, you would like to buy:</h3>
        <label className="formBooking">
          <h5 style={{ marginLeft: '100px' }}>intel NUC</h5>
          <input
            type="radio"
            name="computerPackages"
            value="NUC 10 Barebone i3-10110U DDR4 2.5&rdquo; M.2"
            // checked={}
            onChange={handleChange}
          />{' '}
          NUC 10 Barebone i3-10110U DDR4 2.5&rdquo; M.2:
          {/* <p style={{ color: 'red' }}>{formErrors.}</p> */}
        </label>
        <br />
        <label className="formBooking">
          <input
            type="radio"
            name="computerPackages"
            value="NUC 11th Gen Core i3"
            // checked={}
            onChange={handleChange}
          />{' '}
          NUC 11<sup>th</sup> Gen Core i3:
          {/* <p style={{ color: 'red' }}>{formErrors.}</p> */}
        </label>
        <br />
        <label className="formBooking">
          <input
            type="radio"
            name="computerPackages"
            value="NUC 10 Barebone i7-10710U DDR4 2.5&rdquo; M.2"
            // checked={}
            onChange={handleChange}
          />{' '}
          NUC 10 Barebone i7-10710U DDR4 2.5&rdquo; M.2:
          {/* <p style={{ color: 'red' }}>{formErrors.}</p> */}
        </label>
        <br />
        <label className="formBooking">
          <input
            type="radio"
            name="computerPackages"
            value="Intel NUC 11 Extreme Kit i9-11900KB DDR4 M.2 Thunderbolt 4"
            // checked={}
            onChange={handleChange}
          />{' '}
          Intel NUC 11 Extreme Kit i9-11900KB DDR4 M.2 Thunderbolt 4:
          {/* <p style={{ color: 'red' }}>{formErrors.}</p> */}
        </label>
        <br />
        <label className="formBooking">
          <h5 style={{ marginLeft: '100px' }}>Lenovo Small Form Factor PC</h5>
          <input
            type="radio"
            name="computerPackages"
            value="Lenovo ThinkCentre M70s SFF Desktop PCi5 10400, 8GB RAM 256GB SSD Win 10 Pro"
            // checked={}
            onChange={handleChange}
          />{' '}
          Lenovo ThinkCentre M70s SFF Desktop PCi5 10400, 8GB RAM 256GB SSD Win
          10 Pro
          {/* <p style={{ color: 'red' }}>{formErrors.}</p> */}
        </label>
        <label className="formBooking">
          <input
            type="radio"
            name="computerPackages"
            value="Lenovo ThinkCentre M70s SFF Desktop PCi5 10400, 16GB RAM 512GB SSD Win 10 Pro"
            // checked={}
            onChange={handleChange}
          />{' '}
          Lenovo ThinkCentre M70s SFF Desktop PCi5 10400, 16GB RAM 512GB SSD Win
          10 Pro
          {/* <p style={{ color: 'red' }}>{formErrors.}</p> */}
        </label>
        <br />
        <label className="formBooking">
          <h5 style={{ marginLeft: '100px' }}>HP ProDesk 400G6 Mini PC</h5>
          <input
            type="radio"
            name="computerPackages"
            value="i5-10500T 8GB RAM 256GB SSD Win 10 Pro"
            // checked={}
            onChange={handleChange}
          />{' '}
          Lenovo ThinkCentre M70s SFF Desktop PCi5 10400, 16GB RAM 512GB SSD Win
          10 Pro
          {/* <p style={{ color: 'red' }}>{formErrors.}</p> */}
        </label>
        <br />
        <label className="formBooking">
          <h5 style={{ marginLeft: '100px' }}>Laptop</h5>
          <input
            type="radio"
            name="computerPackages"
            value="lenovo v14 14&rdquo; Celeron N4020 8GB 256GB Windows 10 Home"
            // checked={}
            onChange={handleChange}
          />{' '}
          lenovo v14 14&rdquo; Celeron N4020 8GB 256GB Windows 10 Home
          {/* <p style={{ color: 'red' }}>{formErrors.}</p> */}
        </label>
        <br />
        <label className="formBooking">
          <h5 style={{ marginLeft: '100px' }}>Laptop</h5>
          <input
            type="radio"
            name="computerPackages"
            value="lenovo v14 14&rdquo; Celeron N4020 8GB 256GB Windows 10 Home"
            // checked={}
            onChange={handleChange}
          />{' '}
          lenovo v14 14&rdquo; Celeron N4020 8GB 256GB Windows 10 Home
          {/* <p style={{ color: 'red' }}>{formErrors.}</p> */}
        </label>
        <br />
        <label className="formBooking">
          <input
            type="radio"
            name="computerPackages"
            value="lenovo v14 14&rdquo; HD Screen R5 4500U 8GB 256GB Windows 10 Home"
            // checked={}
            onChange={handleChange}
          />{' '}
          lenovo v14 14&rdquo; HD Screen R5 4500U 8GB 256GB Windows 10 Home
          {/* <p style={{ color: 'red' }}>{formErrors.}</p> */}
        </label>
        <br />
        <label className="formBooking">
          <input
            type="radio"
            name="computerPackages"
            value="lenovo v14 14&rdquo; HD Screen R5 4500U 8GB 256GB Windows 10 PRO"
            // checked={}
            onChange={handleChange}
          />{' '}
          lenovo v14 14&rdquo; HD Screen R5 4500U 8GB 256GB Windows 10 PRO
          {/* <p style={{ color: 'red' }}>{formErrors.}</p> */}
        </label>
      </form>
    </div>
  );
}
