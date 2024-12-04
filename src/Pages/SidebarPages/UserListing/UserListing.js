import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "../../../Components/Table/Table";
import { CgSearch } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";
import AddUser from "../../../Components/UserActions/AddUser";
import IntlMassage from "../../../Utils/IntlMassage";
import { userlisting } from "../../../Collection/ApiCollection";

const UserListing = () => {
  const [addUserModal, setAddUserModal] = useState(false);
  const [userListing, setUserListing] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [loader, setLoader] = useState(false);
  const showAddUserModal = () => {
    setAddUserModal(true);
  };

  const handleAddUserCancel = () => {
    setAddUserModal(false);
  };

  const handleGetUserListing = async () => {
    setLoader(true)
    let res = await userlisting(1, 10)
    if (res.status === 200) {
      setLoader(false)
      setTotalData(res?.data?.data?.length)
      setUserListing(res?.data?.data)
    } else {
      setLoader(false)
    }
  }

  const tableHeader = [
    {
      id: "table.srno",
      tableHeading: "Sr. No.",
    },
    {
      id: "Full Name",
      tableHeading: "	Driver Name",
    },
    {
      id: "Email",
      tableHeading: "Email",
    },
    {
      id: "Phone Number",
      tableHeading: "	Location Link",
    },
    {
      id: "Calls Schedules",
      tableHeading: "Units",
    },
    {
      id: "table.action",
      tableHeading: "Action",
    },
  ];

  useEffect(() => {
    handleGetUserListing()
  }, [])

  return (
    <DriverWrapper>
      <h1 className="driverHeading">
        <IntlMassage id="user.management" />
      </h1>

      <div className="driverBtnDiv">
        <div className="searchExport">
          <div className="searchDiv">
            <CgSearch className="searchIcon" />
            <input className="userSearch" type="search" placeholder="Search" />
          </div>
          {/*  <button>
            <IntlMassage id="button.export" />
          </button> */}
        </div>
        <div className="filterDiv">
          <p>
            <IntlMassage id="admin.statusbyfilters" />
          </p>
          <select>
            <option>
              <IntlMassage id="option.all" />
            </option>
            <option>
              <IntlMassage id="option.active" />
            </option>
            <option>
              <IntlMassage id="option.inactive" />
            </option>
          </select>
        </div>
        {/*  <div className="addBuildingDiv">
          <button onClick={() => showAddUserModal()}>
            <AiOutlinePlus className="plusIcon" />
            <IntlMassage id="button.addnewuser" />
          </button>
        </div> */}
        {addUserModal && (
          <AddUser
            showAddUserModal={showAddUserModal}
            handleAddUserCancel={handleAddUserCancel}
            addUserModal={addUserModal}
          />
        )}
      </div>
      <Table tableData={userListing} tableHeader={tableHeader} totalData={totalData} loader={loader}/>
      <div className="policyDiv">
        <p>
          <IntlMassage id="admin.terms" />
        </p>
        <p className="policyDot">
          <IntlMassage id="admin.hyphen" />
        </p>
        <p>
          <IntlMassage id="admin.policy" />
        </p>
        <p className="policyDot">
          <IntlMassage id="admin.hyphen" />
        </p>
        <p>
          <IntlMassage id="admin.contactus" />
        </p>
      </div>
    </DriverWrapper>
  );
};

export default UserListing;

const DriverWrapper = styled.div`
  .driverHeading {
    display: flex;
    font-weight: 600;
    font-size: 24px;
    margin: 20px 0px 20px 0px;
    font-family: ${({ theme }) => theme?.fontFamily};
  }
  .driverBtnDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .searchExport {
      display: flex;
      gap: 10px;
      .searchDiv {
        border: 1px solid #000;
        width: max-content;
        display: flex;
        align-items: center;
        background: #fff;
        padding: 11px 20px 11px 10px;
        gap: 10px;
        box-shadow: rgba(61, 107, 192, 0.28) 0px 2px 8px;
        border-radius: 10px;
        border: none;

        .searchIcon {
          font-size: 20px;
          color: rgba(20, 93, 160, 0.604);
          margin-top: 2px;
        }
        input {
          border: none;
          font-size: 15px;
          &:focus {
            outline: none;
          }
        }
        .userSearch {
          font-family: ${({ theme }) => theme?.fontFamily};
        }
      }
      button {
        box-shadow: rgba(61, 107, 192, 0.28) 0px 2px 8px;
        font-weight: 600;
        border-radius: 10px;
        border: none;
        padding: 11px 30px;
        cursor: pointer;
        color: ${({ theme }) => theme?.primaryColor};
        background: ${({ theme }) => theme?.secondaryColor};
        font-family: ${({ theme }) => theme?.fontFamily};
      }
    }
    .filterDiv {
      display: flex;
      align-items: center;
      gap: 10px;
      p {
        color: ${({ theme }) => theme?.sidebarInnerHEadingColor};
        font-weight: 700;
        font-size: 14px;
        font-family: ${({ theme }) => theme?.fontFamily};
      }
      select {
        width: 94px;
        border: none;
        border-radius: 10px;
        position: relative;
        background: ${({ theme }) => theme?.secondaryColor};
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: ${({ theme }) => theme?.primaryColor};
        box-shadow: rgba(61, 107, 192, 0.28) 0px 2px 8px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        padding: 11px 10px;
        transition: all 0.3s ease-in 0s;
        font-family: ${({ theme }) => theme?.fontFamily};
      }
    }
    .addBuildingDiv {
      button {
        box-shadow: rgba(61, 107, 192, 0.28) 0px 2px 8px;
        font-weight: 600;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 13px 30px;
        color: ${({ theme }) => theme?.primaryColor};
        background: ${({ theme }) => theme?.secondaryColor};
        font-family: ${({ theme }) => theme?.fontFamily};
      }
      .plusIcon {
        font-size: 16px;
        margin-bottom: 2px;
      }
    }
  }

  .policyDiv {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
    .policyDot {
      font-size: 20px;
      font-weight: 500;
    }
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      cursor: pointer;
      font-family: ${({ theme }) => theme?.fontFamily};
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      margin: 0px;
    }
  }
`;
