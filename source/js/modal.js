const modalContainer = document.querySelector(".modal");
const modalCloseButton = document.querySelector('.modal__submit');

const openModal = () => {
  modalContainer.classList.add("is-open");
  document.addEventListener("keydown", onDocumentKeydown);
  modalContainer.addEventListener("click", onModalClick);
}

const closeModal = () => {
  modalContainer.classList.remove("is-open");
  document.removeEventListener("keydown", onDocumentKeydown);
  modalContainer.removeEventListener("click", onModalClick);
}

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalContainer.classList.remove('is-open');
});

document.addEventListener('click', (evt) => {
  if (evt.target.closest('.modal-button')) {
    openModal();
  }
});

const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape') {
    closeModal();
  }
};

const onModalClick = (evt) => {
  if(!evt.target.closest('.modal__container')) {
    closeModal();
  }
};
