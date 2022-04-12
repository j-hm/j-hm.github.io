import React from "react";
import "../css/About.css";
import hymonly from "../img/hymonly.jpg";

function About() {
  return (
    <div className="aboutLayout" id="ABOUT">
      <h2 style={{ paddingTop: 10 }}>ABOUT</h2>
      <div className="aboutBox">
        <div className="myimg">
          <img src={hymonly} alt="hymonly" />
        </div>
        <div className="profile">
          <h4>Profile</h4>
          <p>장혜미</p>
          <p>Jang Hyemi</p>
          <p>ジャン • ヘミ</p>
          <p style={{ marginTop: 20, marginRight: 100 }}>
            1995년생.
            <br />
            2021년 3월 국비과정을 통해 개발공부를 시작했습니다. Java를 기반으로
            진행한 프로젝트를 통해 웹표준 관련 기술을 익혔습니다. React로
            어플리케이션을 구현하는 것에 흥미를 가지고 독학으로 프로젝트를
            진행하고 있습니다. 현재 진행중인 1인 프로젝트 '뽀토모'는 사용자가 될
            친구들을 위한 맞춤 마니또 어플리케이션입니다. 언젠가는 더 다양하고
            많은 이용자를 위한 서비스를 구현하는 개발자가 되고싶습니다.
          </p>
          <li style={{ marginTop: 20 }}>
            Language : JavaScript ES6, CSS3, HTML5, JAVA
          </li>
          <li>Framework : React, Spring(Boot)</li>
          <li>ORM : Mybatis, JPA</li>
          <li>Database : Firebase, MySql</li>
          <li>Git, GitHub</li>
        </div>
      </div>
    </div>
  );
}

export default About;
