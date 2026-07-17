import React from 'react'

export const Form = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      body {\n        font-family: sans-serif;\n        padding: 20px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        min-height: 100vh;\n        margin: 0;\n        background-color: #f9f9f9;\n      }\n      .form-container {\n        width: 100%;\n        max-width: 450px;\n        background: white;\n        padding: 30px;\n        border-radius: 12px;\n        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n      }\n\n      .header-section {\n        display: flex;\n        align-items: flex-start;\n        gap: 15px;\n        margin-bottom: 20px;\n      }\n      .car-image {\n        width: 120px;\n        height: 100px;\n        object-fit: cover;\n        border-radius: 8px;\n      }\n      .car-details h2 {\n        font-size: 15px;\n        color: #333;\n        margin: 0 0 8px 0;\n      }\n      .stock-id {\n        font-size: 13px;\n        color: #666;\n        margin-bottom: 8px;\n      }\n      .price {\n        font-size: 18px;\n        color: #ff8c00;\n        font-weight: bold;\n      }\n\n      .label {\n        display: block;\n        font-weight: bold;\n        margin-bottom: 8px;\n        color: #333;\n        font-size: 14px;\n      }\n      .input-box {\n        padding: 12px;\n        border: 1px solid #ccc;\n        border-radius: 8px;\n        box-sizing: border-box;\n      }\n\n      /* फोन सेक्शन स्टाईल */\n      .phone-wrapper {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        margin-bottom: 20px;\n      }\n      .country-code {\n        width: 80px;\n      }\n      .phone-number {\n        flex: 1;\n      }\n\n      .checkbox-group {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n      .checkbox-group label {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        cursor: pointer;\n      }\n\n      .submit-btn {\n        width: 100%;\n        padding: 16px;\n        background-color: #0066ff;\n        color: white;\n        border: none;\n        border-radius: 8px;\n        font-weight: bold;\n        cursor: pointer;\n        font-size: 16px;\n      }\n    "
    }}
  />
  <div className="form-container">
    <div className="header-section">
      <img
        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=200&q=80"
        alt="Car"
        className="car-image"
      />
      <div className="car-details">
        <h2>2010/4 MERCEDES C CLASS C200 CGI BLUE EFFICIENCY</h2>
        <div className="stock-id">Stock Id: AL8478</div>
        <div className="price">Vehicle Price USD 3,390</div>
      </div>
    </div>
    <h2>Get a Free Quote</h2>
    <hr style={{ border: 0, borderTop: "1px solid #eee", marginBottom: 20 }} />
    <label className="label">Name *</label>
    <input
      type="text"
      className="input-box"
      style={{ width: "100%", marginBottom: 20 }}
      placeholder="Enter your name"
    />
    <label className="label">Tel/Mobile *</label>
    <div className="phone-wrapper">
      <select className="input-box country-code">
        <option>+91</option>
        <option>+1</option>
        <option>+44</option>
        <option>+81</option>
        <option>61</option>
        <option>82</option>
        <option>65</option>
      </select>
      <input
        type="text"
        className="input-box phone-number"
        placeholder="Number"
      />
      <div className="checkbox-group">
        <label>
          <input type="checkbox" />
          <i
            className="fab fa-whatsapp"
            style={{ color: "#25d366", fontSize: 20 }}
          />
        </label>
        <label>
          <input type="checkbox" />
          <i
            className="fab fa-viber"
            style={{ color: "#7360f2", fontSize: 20 }}
          />
        </label>
        <label>
          <input type="checkbox" />
          <i
            className="fab fa-line"
            style={{ color: "#00b900", fontSize: 20 }}
          />
        </label>
      </div>
    </div>
    <button className="submit-btn">Submit</button>
  </div>
</>

  )
}
