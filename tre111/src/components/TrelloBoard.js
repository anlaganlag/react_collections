import React, { PureComponent } from "react";
import TreloList from ".TrelloList";
import { connect } from "react-redux";
import TrelloCreate from "./TrelloCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { sort, setActiveBoard } from "../actions";
import { Link } from "react-router-dom";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class TrelloBoard extends PureComponent {
  componentDidMount(){
    const {boardID} = this.props.match.params;
    this.props.dispatch(setActiveBoard(boardID))

    onDragEnd = (result)=>{
      const {destination,source,draggableId,type} = result;

      if (!destination){
        return;
      }

      this.props.dispatch(
        sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId,
          type
        )
      )
    }

    render () {
      const {lists,cards,match,boards} = this.props;
      const {boardID} = match.params;
      const board = board[boardID]
      if (!board){
        return <p>没有找到面版</p>
      }
      const listOrder = board.lists;

      return (
        <DragDropContext onDragEnd = {this.onDragEnd}>

          <Link to = "/">返回</Link>
          <h2>{board.title}</h2>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provider)=>(
              <ListsContainer
                {...PersonalVideoRounded.}
            )}
          </Droppable>
        </DragDropContext>
      )
    }
  }
}