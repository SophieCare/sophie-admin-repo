import React, { useState } from "react";
import styled from "styled-components";
import { BsBell } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { Dpimg } from "../../Utils/Images";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { authlogout } from "../../Store/Authentication";
import { changelanguage } from "../../Store/Language";
import IntlMassage from "../../Utils/IntlMassage";

const Header = () => {
  const [type, setTtype] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authlogout());
  };
  const SwitchLanguage = (type) => {
    if (type === "Ar") {
      dispatch(changelanguage({ language: "ar", dir: "rtl" }));
    }
    if (type === "En") {
      dispatch(changelanguage({ language: "en", dir: "ltr" }));
    }
  };

  return (
    <HeaderWrapper>
      <div className="headerInner">
        {/*<div className="inputDiv">
          <select onChange={(e) => SwitchLanguage(e.target.value)}>
            <option value="En">
              <IntlMassage id="header.languageeng" />
            </option>
            <option value="Ar">
              <IntlMassage id="header.languagearb" />
            </option>
          </select>
          <BsBell className="bellIcon" />
        </div> */}
        <div className="profileDiv">
          <img src={Dpimg} alt="" />
          <FiChevronDown className="FiIcon" onClick={() => setTtype(!type)} />
          {type && (
            <div className="hiddenHeaderDiv">
              <h4 className="hiddenHead1">
                <FaUser className="hiddenLogo" />
                <IntlMassage id="header.profile" />
              </h4>
              <hr className="hrTag" />
              <h4 className="hiddenHead2" onClick={() => handleLogout()}>
                <RiLogoutCircleRLine className="hiddenLogo2" />
                <IntlMassage id="header.logout" />
              </h4>
            </div>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  .headerInner {
    display: flex;
    gap: 35px;
    justify-content: end;
    .inputDiv {
      display: flex;
      align-items: center;
      gap: 40px;
      .bellIcon {
        color: rgb(20, 93, 160);
        font-size: 28px;
      }
      select {
        width: 94px;
        height: 48px;
        border: none;
        border-radius: 10px;
        position: relative;
        background: rgb(255, 255, 255);
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: rgba(0, 0, 0, 0.6);
        box-shadow: rgba(61, 107, 192, 0.28) 0px 2px 8px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        padding: 0px 20px;
        transition: all 0.3s ease-in 0s;
        font-family: ${({ theme }) => theme?.fontFamily};
      }
    }
    .profileDiv {
      display: flex;
      align-items: center;
      gap: 20px;
      .FiIcon {
        font-size: 25px;
        font-weight: 500;
        cursor: pointer;
      }
      img {
        ${"" /* cursor: pointer; */}
        height: 42px;
        width: 42px;
        border-radius: 50%;
        border: none;
      }
      .hiddenHeaderDiv {
        background: #fff;
        position: absolute;
        top: 90px;
        width: 200px;
        right: 40px;
        padding: 10px 5px;
        border-radius: 7px;
        box-shadow: rgba(61, 107, 192, 0.5) 0px 2px 8px;
        transition: all 0.5s ease-out 0s;

        .hiddenHead1 {
          margin: 0px;
          font-size: 14px;
          padding: 10px;
          display: flex;
          align-items: center;
          cursor: pointer;
          gap: 15px;
          font-family: ${({ theme }) => theme?.fontFamily};

          .hiddenLogo {
            font-size: 17px;
          }
        }
        .hiddenHead2 {
          margin: 0px;
          font-size: 14px;
          padding: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 15px;
          font-family: ${({ theme }) => theme?.fontFamily};

          .hiddenLogo2 {
            font-size: 17px;
            color: #ff0000d6;
          }
        }
        .hrTag {
          width: 90%;
          margin: auto;
        }
      }
    }
  }
`;
