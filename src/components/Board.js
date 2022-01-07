import React from "react";
import { Button, Card } from "react-bootstrap";

const Board = ({ board, deleteBoard }) => {
  const remSize = {
    maxWidth: "20rem",
  };

  return (
    <>
      {/* <div class="card border-primary mb-3" style={{ maxWidth: 300 }}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Primary card title</h4>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div> */}

      <Card
        className="card border-primary mb-3"
        style={{ remSize, marginTop: 15 }}
      >
        <Card.Body>
          <Card.Title>{`${board.title}`}</Card.Title>
          <Card.Text>
            <div>
              <strong>by: </strong>
              {board.owner}
            </div>
          </Card.Text>

          <Button
            onClick={() => {
              deleteBoard(board.id);
            }}
            style={{ borderRadius: "20px" }}
            className="btn btn-secondary"
            variant="secondary"
          >
            delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Board;
