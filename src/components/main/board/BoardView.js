function BoardView() {
    return (
        <div className="board-view">
            <h3>게시판 조회</h3>
            <button className="home-button" onClick={() => window.location.href = '/'}>목록</button>
            <div className="title">제목입니다.</div>
            <div className="contents">내용입니다.</div>
        </div>
    );
}

export default BoardView;
