import React from "react";
import { Container } from "react-bootstrap";

const Popup = (props) => {
  return (
    <Container>
      <div class="card border-primary mb-3" style={{}}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Primary card title</h4>
          <p class="card-text">
            <span onClick={props.handleClose}>x</span>
            {props.content}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Popup;
