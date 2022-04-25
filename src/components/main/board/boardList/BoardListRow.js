function BoardListRow() {
    return (
        <div className="board-list-row" onClick={() => window.location.href = '/board/1'}>
            제목입니다.
        </div>
    );
}

export default BoardListRow;
