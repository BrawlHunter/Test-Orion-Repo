import React from "react";

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

export default function SignUp(props) {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col">
            <label for="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
            />
          </div>
          <div className="col">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label for="phoneNumber">Phone Number</label>
            <input
              required
              type="text"
              className="form-control"
              id="phoneNumber"
              pattern="[1-9][0-9]{9}"
              maxLength="15"
            />
          </div>
          <div className="col">
            <label for="dob">Date of Birth</label>
            <input type="date" className="form-control" id="dob" required />
          </div>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            required
            type="email"
            className="form-control"
            id="email"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label for="address">Address</label>
          <textarea
            required
            id="address"
            class="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
        <button className="btn btn-secondary mt-2">Submit</button>
      </form>
    </div>
  );
}
