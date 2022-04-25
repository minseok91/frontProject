function BoardEdit() {
    return (
        <div className="board-edit">
            <h3>게시판 작성</h3>
            <button className="save-button" onClick={() => window.location.href = '/'}>저장</button>
            <div className="title">
                <input type="text" placeholder="제목을 입력해주세요." />
            </div>
            <div className="contents">
                <textarea placeholder="내용을 입력해주세요." />
            </div>
        </div>
    );
}

export default BoardEdit;
