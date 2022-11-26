import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);
  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
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

      <Button variant="primary" type="submit" disabled={!tcChecked}>
        confirm order
      </Button>
    </Form>
  );
}
