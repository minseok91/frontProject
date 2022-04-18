import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

function BoardListPaging() {
    return (
        <div className="board-list-paging">
            <button><MdOutlineArrowBackIosNew /></button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
            <button><MdOutlineArrowForwardIos /></button>
        </div>
    );
}

export default BoardListPaging;
