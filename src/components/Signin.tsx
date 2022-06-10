import { Button, Col, Row } from "antd";

export default function Signin() {
  return (
    <Row align="middle">
      <Col span={24}>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <div>GR Books</div>
            <div>극락으로 갈 당신의 지식들</div>
            <div />
            <div>
              Email
              <span>*</span>
            </div>
            <div>
              <input placeholder="Email" autoComplete="email" name="email" />
            </div>
            <div>
              Password
              <span>*</span>
            </div>
            <div>
              <input
                type="password"
                autoComplete="current-password"
                name="email"
              />
            </div>
            <div>
              <Button size="large">Sign In</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
