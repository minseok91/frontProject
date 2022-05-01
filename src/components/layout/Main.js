import { Route, Routes } from "react-router-dom";
import BoardList from "../main/board/BoardList";
import BoardView from "../main/board/BoardView";
import BoardEdit from "../main/board/BoardEdit";
import ErrorPage from "../common/pages/ErrorPage";
import NotFoundPage from "../common/pages/NotFoundPage";

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<BoardList />} />
                <Route path='/board' element={<BoardList />} />
                <Route path='/board/:id' element={<BoardView />} />
                <Route path='/board/edit/:id' element={<BoardEdit />} />
                <Route path='/error' element={<ErrorPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}

export default Main;
