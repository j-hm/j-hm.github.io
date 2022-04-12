import React from "react";
import "../css/Project.css";
import meett from "../img/meett.png";
import plather from "../img/plather.png";
import fortomo from "../img/fortomo.png";

function Project() {
  return (
    <div className="projectLayout" id="PROJECT">
      <h2 style={{ paddingTop: 10 }}>PROJECT</h2>
      <div className="projects">
        <div className="projectBox">
          <img src={fortomo} alt="fortomo" />
          <p>React + Firebase + Styeld-Components</p>
          <p>뽀토모</p>
          <p>마니또 및 친구와의 일정</p>
          <a
            href="https://fortomo-7d311.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Prototype</button>
          </a>
        </div>
        <div className="projectBox">
          <img src={plather} alt="plather" />
          <p>JavaScript + HTML/CSS + JSTL</p>
          <p>Plather</p>
          <p>플레이리스트 공유, 추천 어플리케이션</p>
          <a
            href="https://fortomo-7d311.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub</button>
          </a>
        </div>
        <div className="projectBox">
          <img src={meett} alt="meett" />
          <p>RESTful API + JPA</p>
          <p>MeetT</p>
          <p>모임 일정 관리 어플리케이션</p>
          <a
            href="https://fortomo-7d311.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Notion</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
