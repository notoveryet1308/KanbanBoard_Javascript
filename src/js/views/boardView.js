import {elements} from './base';
export const renderBoard = (boardInfo)=>{
  const markup = `
    <div class="board board-${boardInfo.boardNumber}">
       <div class="boad-name_box">
         <h1 class="board-name">${boardInfo.board.name}</h1>
       </div>
       <div class="tickets" id="tickets-${boardInfo.boardNumber}"></div>
       <div class="add-ticket-box">
          <form 
             class="ticket-form ticket-form-${boardInfo.boardNumber} ${boardInfo.boardNumber}">
            <input placeholder="add ticket" class="ticket-input ticket-input-${boardInfo.boardNumber}"/>
            <button class="submit-btn" type="submit">Add</button>
          </form>
       </div>
    </div>
  `
  elements.boardContainer.insertAdjacentHTML("beforeend", markup);
}