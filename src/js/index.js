import Board from './model/Board';
import Ticket from './model/Ticket';
import {
  elements,
  clearBoardName,
  getElements,
  selectElement
} from '../js/views/base';
import * as BoardView from './views/boardView';
import * as TicketView from './views/ticketView';


/**
 * - Global State
 */


const STATES = {
  boards: [],
  tickets: []
}

elements.boardForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = elements.boardName.value;
  const newBoard = new Board(name);
  const boardNumber = STATES.boards.length + 1;
  STATES.boards.push({board: newBoard, boardNumber});
  clearBoardName();
  BoardView.renderBoard(STATES.boards[STATES.boards.length -1]);

});



window.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log()
   const currBoard = e.target.className.split(" ");
  if (e.target.className.split(" ").includes("ticket-form")) {
   
    const afterElements = getElements();
    const ticketNumber = STATES.tickets.length +1;
    const ticketname = selectElement(`.${currBoard[1]} input`).value;
    console.log(`TicketNumber: ${ticketname}`)
    let newTicket = new Ticket(ticketname);
    STATES.tickets.push({ticket:newTicket, ticketNumber})
    console.log(newTicket)
    console.log(STATES)
    TicketView.renderTicket(STATES.tickets[STATES.tickets.length -1], currBoard[2]);
    console.log(STATES)
    
    selectElement(`.${currBoard[1]} input`).value = "";
  }
})