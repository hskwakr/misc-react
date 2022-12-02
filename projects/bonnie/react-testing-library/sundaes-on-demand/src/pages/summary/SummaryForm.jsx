import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function SummaryForm({ onClick }) {
  const [tcChecked, setTcChecked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <FormGroup controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => {
            setTcChecked(e.target.checked);
          }}
          label={checkboxLabel}
        />
      </FormGroup>

      <Button
        variant="primary"
        type="submit"
        disabled={!tcChecked}
        onClick={handleClick}
      >
        confirm order
      </Button>
    </Form>
  );
}
