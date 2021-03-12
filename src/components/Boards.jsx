import styled from 'styled-components';
import './index.css';

const Boards = (props) => {
    const {list} = props;
    return(
        <table>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
            {
                list.map((item, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.score}</td>
                    </tr>
                ))
            }
        </table>
    )
}
export default Boards;