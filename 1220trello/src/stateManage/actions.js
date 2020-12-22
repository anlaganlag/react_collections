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

export const setActiveBoard = (id) => {
  return {
    type: CONSTANTS.SET_ACTIVE_BOARD,
    payload: id,
  };
};

export const addBoard = (title) => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_BOARD,
    payload: { title, id },
  };
};

//列表相關的action

export const addList = (title) => {
  return (dispatch, getState) => {
    const curState = getState();
    console.table(curState);
    const boardID = getState().activeBoard;
    const id = uuid();
    dispatch({
      type: CONSTANTS.ADD_LIST,
      payload: { id, title, boardID },
    });
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    dispatch({
      type: CONSTANTS.DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
        boardID,
      },
    });
  };
};

export const editTitle = (listID, newTitle) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: {
      listID,
      newTitle,
    },
  };
};

export const deleteList = (listID) => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    return dispatch({
      type: CONSTANTS.DELETE_LIST,
      payload: {
        listID,
        boardID,
      },
    });
  };
};

//卡片相關的action

export const addCard = (listID, text) => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { id, text, listID },
  };
};

export const editCard = (id, listID, newText) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { id, newText,listID },
  };
};

export const deleteCard = (id, listID) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { id, listID },
  };
};
