import "./App.css";

import { useEffect, useState } from "react";
import NavBarCom from "./components/NavBar";
import { Container } from "react-bootstrap";
import Boards from "./components/Boards";
import BoardForm from "./components/BoardForm";
import axios from "axios";
import Popup from "./components/CardsPopUp";

const URL = "https://kinder-code.herokuapp.com/boards";
const App = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showBoardForm, setShowBoardForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getBoards();
  }, []);

  const getBoards = async () => {
    try {
      const res = await axios.get(URL);
      setBoards(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  const addBoard = (newBoard) => {
    axios
      .post(URL, {
        title: newBoard.titleData,
        owner: newBoard.ownerData,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteBoard = async (id) => {
    console.log("delete");
    await axios.delete(`${URL}/${id}`);
  };

  const hideBoardForm = () => {
    return setShowBoardForm(false);
  };
  return (
    <div className="App">
      <Container>
        <div>
          <input type="button" value="Pop Up test" onClick={togglePopup} />

          {isOpen && (
            <Popup
              content={
                <>
                  <b>Mac's Board</b>
                  <p>"Fly like an eagle"</p>
                  <button>Test button</button>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
        <NavBarCom showForm={() => setShowBoardForm(true)} />
        {showBoardForm ? (
          <BoardForm addBoardCallback={addBoard} hideBoard={hideBoardForm} />
        ) : null}

        <Boards boards={boards} loading={loading} deleteBoard={deleteBoard} />
      </Container>
    </div>
  );
};

export default App;
