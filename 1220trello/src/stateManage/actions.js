import uuid from "uuidv4";

export const CONSTANTS = {
  ADD_CARD: "ADD_CARD",
  ADD_LIST: "ADD_LIST",
  DRAG_HAPPENED: "DRAG_HAPPENED",
  EDIT_CARD: "EDIT_CARD",
  DELETE_CARD: "DELETE_CARD",
  EDIT_LIST_TITLE: "EDIT_LIST_TITLE",
  DELETE_LIST: "DELETE_LIST",
  SET_ACTIVE_BOARD: "SET_ACTIVE_BOARD",
  ADD_BOARD: "ADD_BOARD",
};

//看板相關的action

export const setActiveBoard = (id) => ({
  type: CONSTANTS.SET_ACTIVE_BOARD,
  payload: id,
});

export const addBoard = (title) => ({
  type: CONSTANTS.ADD_BOARD,
  payload: { title, id: uuid() },
});

//列表相關的action

export const addList = (title) => (dispatch, getState) => 
  dispatch({
    type: CONSTANTS.ADD_LIST,
    payload: { id: uuid(), title, boardID: getState().activeBoard },
  });

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => (dispatch, getState) => 
  dispatch({
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId,
      type,
      boardID: getState().activeBoard,
    }
  })

export const editTitle = (listID, newTitle) => ({
  type: CONSTANTS.EDIT_LIST_TITLE,
  payload: {
    listID,
    newTitle,
  }
})

export const deleteList = (listID) => (dispatch, getState) =>
  dispatch({
    type: CONSTANTS.DELETE_LIST,
    payload: {
      listID,
      boardID: getState().activeBoard,
    },
  })

//卡片相關的action

export const addCard = (listID, text) => ({
  type: CONSTANTS.ADD_CARD,
  payload: { id: uuid(), text, listID },
});

export const editCard = (id, listID, newText) => ({
  type: CONSTANTS.EDIT_CARD,
  payload: { id, newText, listID },
});

export const deleteCard = (id, listID) => ({
  type: CONSTANTS.DELETE_CARD,
  payload: { id, listID },
});
