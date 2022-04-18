import BoardListRow from "./boardList/BoardListRow";
import { BsFillPencilFill } from 'react-icons/bs';
import BoardWriteButton from "./boardList/BoardWriteButton";
import BoardListPaging from "./boardList/BoardListPaging";

function BoardList() {
    return (
        <div className="board-list">
            <h3>게시판 목록</h3>
            <BoardWriteButton />
            {
                [1,2,3,4,5,6,7,8].map(() => <BoardListRow />)
            }
            <BoardListPaging />
        </div>
    );
}

export default BoardList;
