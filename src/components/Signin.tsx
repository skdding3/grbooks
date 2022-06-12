import { Button, Col, Row } from "antd";
import styles from "./Signin.module.css";

export default function Signin() {
  return (
    <Row align="middle" className={styles.sigin_row}>
      <Col span={24}>
        <Row className={styles.sigin_contents}>
          <Col span={12}></Col>
          <Col span={12}>
            <div className={styles.sigin_title}>GR Books</div>
            <div className={styles.sigin_subtitle}>
              극락으로 갈 당신의 지식들
            </div>
            <div className={styles.sigin_underline} />
            <div className={styles.email_title}>
              Email
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <input
                placeholder="Email"
                autoComplete="email"
                name="email"
                className={styles.input}
              />
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <input
                type="password"
                autoComplete="current-password"
                name="email"
                className={styles.input}
              />
            </div>
            <div className={styles.button_area}>
              <Button size="large" className={styles.button}>
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}