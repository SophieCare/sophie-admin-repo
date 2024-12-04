import React, { useState } from "react";
import styled from "styled-components";
import { MdModeEditOutline } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditDriver from "../DriverActions/EditDriver";
import IntlMassage from "../../Utils/IntlMassage"
import { Pagination, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const Table = ({ tableData, tableHeader,totalData,loader }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);


  const showModal = () => {
    setDeleteModal(true);
  };

  const handleCancel = () => {
    setDeleteModal(false);
  };
  const showEditModal = () => {
    setEditModal(true);
  };

  const handleEditCancel = () => {
    setEditModal(false);
  };
  return (
    <TableWrapper>
      {deleteModal && (
        <DeleteModal
          showModal={showModal}
          handleCancel={handleCancel}
          deleteModal={deleteModal}
        />
      )}
      {editModal && (
        <EditDriver
          showEditModal={showEditModal}
          handleEditCancel={handleEditCancel}
          editModal={editModal}
        />
      )}
      <div className="tableDiv">
       <div className="tablInner">
      <table>
        <thead>
          <tr>
            {tableHeader.map((value) => {
              return (
                <>
                  <th className="th1-border">
                    <IntlMassage id={value.id} />
                  </th>
                </>
              );
            })}
          </tr>
        </thead>
        <div className="marginDiv"></div>
        {loader ? <div style={{padding:"80px 0px"}}>
          <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 48,
              }}
              spin
            />
          }
        />
          </div>
         :<tbody>
        {tableData && tableData?.length > 0 && tableData?.map((val,index) => {
          return (
            <>
            {console.log(tableData,"tableData")}
              <tr className="trBorder">
                <td className="th1-border">{index + 1}</td>
                <td>{val?.fullName}</td>
                <td>{val.email}</td>
                <td>{val.phoneNumber}</td>
                <td>{val.totalCallSchedules}</td>
                {/* <td>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </td>*/}
                <td className="th2-border">
                  <ul className="tableUl">
                    <li>
                      <BsEyeFill className="tableUlIcon" />
                    </li>
                    <li>
                      <MdModeEditOutline
                        className="tableUlIcon1"
                        onClick={() => showEditModal()}
                      />
                    </li>
                    <li>
                      <MdDelete
                        className="tableUlIcon2"
                        onClick={() => showModal()}
                      />
                    </li>
                  </ul>
                </td>
              </tr>
              <div className="marginDiv"></div>
            </>
          );
        })}
      </tbody>}
        
      </table>
      <Pagination defaultCurrent={1} total={totalData} />
    </div> 
        
      </div>
    </TableWrapper>
  );
};

export default Table;

const TableWrapper = styled.div`
  .tableDiv {
    margin-top: 20px;
    background: ${({ theme }) => theme?.sidebarInnnerDivBg};
    box-shadow: rgba(61, 107, 192, 0.28) 0px 2px 8px;
    border-radius: 10px;
    .tablInner {
      padding: 40px 10px;

      .trBorder {
        .tableUl {
          list-style-type: none;
          display: flex;
          align-items: center;
          justify-content: left;
          gap: 3px;
          padding: 0px;
          margin: 0px;

          .tableUlIcon {
            font-size: 18px;
          }
          .tableUlIcon1 {
            font-size: 18px;
            color: ${({ theme }) => theme?.iconFillColor};
          }
          .tableUlIcon2 {
            font-size: 20px;
          }

          li {
            cursor: pointer;
          }
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 47px;
          height: 22px;

          input {
            opacity: 0;
            width: 0;
            height: 0;
          }
          input:checked + .slider {
            background-color: ${({ theme }) => theme?.activeButtonBg};
          }

          input:focus + .slider {
            box-shadow: 0 0 1px #2196f3;
          }

          input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
          }
          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: 0.4s;
            transition: 0.4s;

            &:before {
              position: absolute;
              content: "";
              height: 19px;
              width: 19px;
              left: 2px;
              right: 2px;
              bottom: 2px;
              background-color: white;
              -webkit-transition: 0.4s;
              transition: 0.4s;
            }
          }
          .slider.round {
            border-radius: 34px;
          }

          .slider.round:before {
            border-radius: 50%;
          }
        }
      }

      table {
        border-collapse: collapse;
        width: 100%;
        .marginDiv {
          margin-bottom: 8px;
        }

        tr {
          border-radius: 10px;
          border-collapse: separate;
          border-radius: 8px;

          .th1-border {
            border-radius: 10px 0px 0px 10px;
          }
          .th2-border {
            border-radius: 0px 10px 10px 0px;
          }
          th {
            text-align: left;
            padding: 12px 15px;
            font-size: 14px;
            font-family: ${({ theme }) => theme?.fontFamily};
          }
          td {
            text-align: left;
            padding: 12px 15px;
            font-size: 14px;
            color: ${({ theme }) => theme?.tableRowColor};
            background: ${({ theme }) => theme?.tableRowBg};
            font-family: ${({ theme }) => theme?.fontFamily};
          }
        }
      }
    }
  }
`;
