import React from "react";

const AdditionalContent = () => {
  return (
    <div className="container additional-content py-5">
      <div className="row">
        <div className="col-lg-6">
          <h2>Our Mission</h2>
          <p>
            At Hermes Express Inc., our mission is to provide exceptional
            transportation services while prioritizing the well-being and
            satisfaction of our drivers. We strive to create a supportive and
            transparent work environment that fosters growth and success for all
            team members.
          </p>
        </div>
        <div className="col-lg-6">
          <h2>Why Choose Us</h2>
          <ul className="list-unstyled">
            <li>
              <i className="fa fa-truck icon" />
              Competitive pay and benefits
            </li>
            <li>
              <i className="fa fa-map-marker-alt icon" />
              Flexible schedules
            </li>
            <li>
              <i className="fa fa-clock icon" />
              Opportunities for career advancement
            </li>
            <li>
              <i className="fa fa-money-bill icon" />
              State-of-the-art equipment
            </li>
            <li>
              <i className="fa fa-phone icon" />
              24/7 Support
            </li>
            <li>
              <i className="fa fa-envelope icon" />
              Friendly team
            </li>
            <li>
              <i className="fa fa-users icon" />
              Commitment to safety
            </li>
            <li>
              <i className="fa fa-star icon" />
              Excellent reputation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdditionalContent;
