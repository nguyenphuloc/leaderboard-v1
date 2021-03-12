import React, {useState} from 'react';
import styled from 'styled-components';
import Boards from './Boards';
import './index.css';

const Container = styled.div`
    width: 1000px;
    height:auto;
    margin-top:100px;
    margin-left: 500px;
    display: flex;
    flex-direction: column;
`

function LeaderBoard() {
    const [list, setList] = useState([]);
    const [state, setState] = useState({
        name: "",
        score: ""
    });
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setState(pre => ({ ...pre, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.name && state.score && state.score >= 0) {
            let listArray = [...list, state];
            listArray.sort((less, bigger) => {
                return Number(bigger.score) - Number(less.score);
            });

            setList(listArray);
            setState({ name: "", score: "" });
            setError(false);

        }
        else {
            setError(true);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <h1>LeaderBoard</h1>
                <p>Player</p>
                <input name="name" value={state.name} onChange={handleInputChange} />
                <p>Score</p>
                <input name="score" value={state.score} onChange={handleInputChange} />
                <div>
                    <button>Submit</button>
                    {error && <p className="board__err">Input Is Empty!</p>}
                    {error === false && <p className="board__err">Save Submit!</p>}
                </div>
            </form>
            <Boards list={list} />
        </Container>
    );
}
export default LeaderBoard;