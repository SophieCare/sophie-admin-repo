import React, { useState } from "react";
import {
  LoginForm,
  LogoWrap,
  Logo,
  Logintext,
  OtpWrap,
  BtnWrap,
} from "./Style";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Vector } from "../Utils/Images";
// import OTPInput from "react-otp-input";
import OtpInput from "react-otp-input";
import { Background, FormWrap } from "../Layout/Style";
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "10px",
          boxShadow: "box-shadow: 0px 2px 16px rgba(61, 107, 192, 0.25);",
          background: "#145DA0",
          color: "#fff",
          padding: "13px 25px",
        },
      },
    },
  },
});
export default function Verify() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  return (
    <Background>
      <FormWrap>
        <LoginForm>
          <LogoWrap>
            <Logo src={Vector} alt="contolio" />
          </LogoWrap>
          <Logintext>
            Two-Step Verifiction
            <br />
            <span>Kindly check your registered email for OTP</span>
          </Logintext>
          <OtpWrap>
            {/* <OTPInput
            inputStyle="otp"
            value={otp}
            // numInputs={4}
            // containerStyle={"otp-wrap"}
            // shouldAutoFocus={true}
            // isInputNum={true}
            // hasErrored={error}
            // errorStyle={"otp-error"}
          /> */}
            <OtpInput
              inputStyle="otp"
              containerStyle={"otp-wrap"}
              value={otp}
              onChange={setOtp}
              isInputNum={true}
              shouldAutoFocus={true}
              numInputs={4}
              errorStyle={"otp-error"}
              hasErrored={error}
              renderInput={(props) => <input {...props} />}
            />
          </OtpWrap>
          <BtnWrap>
            <Button
              type="submit"
              disabled={otp.length !== 4 ? true : false}
              sx={
                otp.length !== 4
                  ? {
                      fontSize: "18px",
                      background: "rgb(44 42 42 / 26%);",
                      borderRadius: "10px",
                      color: "#000",
                      fontFamily: "Poppins",
                    }
                  : {
                      fontSize: "18px",
                      background:
                        "linear-gradient(225deg, #ee722a 0%, #d51757 100%)",
                      borderRadius: "10px",
                      color: "#fff",
                      fontFamily: "Poppins",
                    }
                // fontSize: "18px",
                // background:
                //   "linear-gradient(225deg, #ee722a 0%, #d51757 100%)",
                // borderRadius: "8px",
                // color: "#fff",
              }
            >
              VERIFY
            </Button>
          </BtnWrap>
        </LoginForm>
      </FormWrap>
    </Background>
  );
}
