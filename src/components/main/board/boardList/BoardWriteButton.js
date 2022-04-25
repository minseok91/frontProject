import { BsFillPencilFill } from "react-icons/bs";

function BoardWriteButton() {
    return (
        <button className="write-button" onClick={() => window.location.href = '/board/edit/1'}>
            <BsFillPencilFill />
        </button>
    );
}

export default BoardWriteButton;
