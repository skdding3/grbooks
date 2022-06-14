import { click } from "@testing-library/user-event/dist/click";
import { Button, Col, Row } from "antd";
import { useRef } from "react";
import styles from "./Signin.module.css";
import { LoginReqType } from "../types";

interface SigninProps {
  login: (reqData: LoginReqType) => void;
}

const Signin: React.FC<SigninProps> = ({ login }) => {
  // react 18은 <Input>이 안먹혀서 스택오버플로우로 해결
  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);

  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}>
            <img
              src="/grbooks1.png"
              alt="Signin"
              className={styles.signin_bg}
            />
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>GR Books</div>
            <div className={styles.signin_subtitle}>
              극락으로 갈 당신의 지식들
            </div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>
              Email
              <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <input
                placeholder="Email"
                autoComplete="email"
                name="email"
                ref={refEmail}
                className={styles.input}
              />
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <input
                type="password"
                autoComplete="current-password"
                ref={refPassword}
                className={styles.input}
              />
            </div>
            <div className={styles.button_area}>
              <Button size="large" className={styles.button} onClick={click}>
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );

  function click() {
    const email = refEmail.current!.value;
    const password = refPassword.current!.value;

    login({ email, password });
  }
};

export default Signin;
