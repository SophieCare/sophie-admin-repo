import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";

const Landing = () => {
  const dir = useSelector((state) => state?.selectLang?.dir);

  console.log(dir, "dir");
  return (
    <div dir={dir}>
      <LandingWrapper>
        <div className="landingSidebar">
          <Sidebar />
        </div>
        <div className="headerOutletDiv">
          <div className="headerOutletInner">
            <Header />
            <div className="outletDiv">
              <Outlet />
            </div>
          </div>
        </div>
      </LandingWrapper>
    </div>
  );
};

export default Landing;

const LandingWrapper = styled.div`
  display: flex;
  .landingSidebar {
    height: 100vh;
    min-height: 550px;
    width: 19%;
  }
  .headerOutletDiv {
    width: 81%;
    background: ${({ theme }) => theme?.landingOutletBg};

    .headerOutletInner {
      padding-top: 36px;
      padding-right: 40px;
      padding-left: 40px;
    }
  }
`;
