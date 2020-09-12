import {
  elements,
  getElements,
  selectElement

} from './base';

export const renderTicket = (ticketInfo, bNum) => {
  const afterElements = getElements();
  const markUp = `
    <div 
      draggable="true" 
      class="ticket" 
      id="ticket-${ticketInfo.ticketNumber}"
    >
      ${ticketInfo.ticket.name}
    </div>
  `

  selectElement(`.board-${bNum} .tickets`).insertAdjacentHTML("beforeend", markUp);
  const boardHeight = selectElement(`.board-${bNum}`).clientHeight;
  const ticketHeight = document.querySelector(`.board-${bNum} #ticket-${ticketInfo.ticketNumber}`).clientHeight;
  selectElement(`.board-${bNum}`).style.height = `${boardHeight+ticketHeight+10}px`;

}

//  const boardHeight = selectElement(`#board-${ticketInfo.ticketNumber}`).clientHeight;
//   const ticketHeight = document.querySelector(`#ticket-${ticketInfo.ticketNumber}`).clientHeight;
//   selectElement(`.board-${ticketInfo.ticketNumber}`).style.height = `${boardHeight+ticketHeight+10}px`;