export const elements = {
  boardContainer: document.querySelector('.boards'),
  boardForm: document.querySelector('.board-input-form'),
  boardName: document.querySelector('.board-input-name')
}

export const getElements = () => {
  const afterElements = {
    ticketBox: document.querySelector('.tickets'),
    ticketForm: document.querySelector('.ticket-form'),
    ticketName: document.querySelector('.ticket-input'),
    ticketAddBtn: document.querySelector('.submit-btn'),
    board: document.querySelector('.board'),
    ticket: document.querySelector('.ticket')
  }
  return afterElements;
}
export const clearBoardName = () => {
  elements.boardName.value = "";
}

export const selectElement = (selector)=>{
  return document.querySelector(selector);
}