import "./App.css";

import { useEffect, useState } from "react";
import NavBarCom from "./components/NavBar";
import { Container } from "react-bootstrap";
import Boards from "./components/Boards";
import BoardForm from "./components/BoardForm";
import axios from "axios";

const URL = "https://kinder-code.herokuapp.com/boards";
const App = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showBoardForm, setShowBoardForm] = useState(false);

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
        const copy = [...boards];
        copy.push(response.data);
        setBoards(copy);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteBoard = async (id) => {
    console.log("delete");
    await axios.delete(`${URL}/${id}`);
    const copy = boards.filter((board) => board.id !== id);
    setBoards(copy);
  };

  const hideBoardForm = () => {
    return setShowBoardForm(false);
  };

  return (
    <div className="App">
      <Container>
        <h1>INTERVIEW WEEK INSPIRATION</h1>
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
