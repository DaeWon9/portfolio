import React from "react";
import ProfilePicture from "../common/ProfilePicture";
import "./Slides.css";

const Career = () => {
  return (
    <div
      className="slide_container"
      style={{ backgroundColor: "rgb(0, 0, 85)" }}
    >
      <div className="slide_header">CAREER</div>
      <div className="slide_body">
        <div className="career_left">
          <ProfilePicture />
        </div>
        <div className="career_right">
          <p className="career_content">
            π Department of Software in Sejong Univ.
          </p>
          <p className="career_content">π¨π»βπ» Sejong Univ. En# 22th</p>
          <p className="career_content">
            π 2022 κ°λ°©ν ν΄λΌμ°λ νλ«νΌ κΈ°λ° μλΉμ€ κ°λ° κ³΅λͺ¨μ  νΉλ³μ μμ
          </p>
          <p className="career_content">
            π 2023 Microsoft Imagine Cup Asia λν
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
