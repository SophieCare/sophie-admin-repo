import styled from "styled-components";
import "../../Style/global.css";
import { Modal } from "antd";
import { Field } from "formik";
import IntlMassage from "../../Utils/IntlMassage";

const EditDriver = ({ handleEditCancel, showEditModal, editModal }) => {
  return (
    <>
      <Modal
        centered
        maskStyle={{
          backgroundColor: " rgb(0 0 0 / 70%)",
        }}
        open={editModal}
        onOk={handleEditCancel}
        onCancel={handleEditCancel}
        footer=""
        closable=""
      >
        <AddPropertyWrapper>
          <div className="header">
            <h2>
              <IntlMassage id="edituser.heading" />
            </h2>
          </div>
          <div className="formDiv">
            <form className="form">
              <div className="addInputs">
                <div className="addInputDiv">
                  <label>
                    <IntlMassage id="table.drivername" />
                  </label>
                  <input type="text" />
                </div>
                <div className="addInputDiv">
                  <label>
                    <IntlMassage id="table.address" />
                  </label>
                  <input type="text" />
                </div>
                <div className="addInputDiv">
                  <label>
                    <IntlMassage id="table.locationlink" />
                  </label>
                  <input type="text" />
                </div>
                <div className="addInputDiv">
                  <label>
                    {" "}
                    <IntlMassage id="table.units" />
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="submit-btn">
                <button type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </AddPropertyWrapper>
      </Modal>
    </>
  );
};
export default EditDriver;

const AddPropertyWrapper = styled.div`
  .buttonload {
    background: rgb(105, 201, 102);
    border: none;
    color: #fff;
    font-size: 15px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  .fa {
    margin-left: -12px;
    margin-right: 8px;
  }
  .header {
    h2 {
      text-align: center;
    }
  }
  .formDiv {
    .form {
      .addInputs {
        .addInputDiv {
          label {
            display: block;
            font-size: 14px;
            font-weight: 500;
          }
          input {
            font-size: 13px;
            color: #000;
            padding: 10px;
            width: 95.5%;
            border: 1px solid #e1e1e1;
            border-radius: 6px;
            margin-bottom: 12px;
            margin-top: 3px;

            :focus {
              outline: none;
            }
          }
        }
      }
    }
  }

  .submit-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    button {
      background: ${({ theme }) => theme?.secondaryColor};
      border: none;
      color: ${({ theme }) => theme?.primaryColor};
      font-size: 15px;
      padding: 10px 20px;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
