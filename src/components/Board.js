import React from "react";
import { Button, Card } from "react-bootstrap";

const Board = ({ board, deleteBoard }) => {
  const remSize = {
    maxWidth: "20rem",
  };

  return (
    <>
      <Card
        className="card border-primary mb-3"
        style={{ remSize, marginTop: 15, backgroundColor: "lightyellow" }}
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
            // style={{ borderRadius: "20px" }}
            className="btn btn-light"
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
