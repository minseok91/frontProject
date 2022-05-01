import BobbyApi from "../../common/api/BobbyApi";
import WebUtil from "../../../utils/WebUtil";

const BoardApi = {
    getBoards: (page, size = 20) => {
        return BobbyApi.get('/board', { page, size })
            .catch(() => WebUtil.redirectToErrorPage());
    },

    getBoard: (id) => {
        return BobbyApi.get(`/board/${id}`)
            .catch(() => WebUtil.redirectToErrorPage());
    },

    saveBoard: ({ id, title, contents }) => {
        if (id) {
            return BobbyApi.patch('/board', { id, title, contents })
                .catch(() => WebUtil.redirectToErrorPage());
        }

        return BobbyApi.post('/board', { title, contents })
            .catch(() => WebUtil.redirectToErrorPage());
    },

    removeBoard: (id) => {
        return BobbyApi.delete(`/board/${id}`)
            .catch(() => WebUtil.redirectToErrorPage());
    },
}

export default BoardApi;
