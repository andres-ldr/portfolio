function toggleModal(key) {
  const modalBackdrop = document.getElementById(`modal-backdrop-${key}`);
  const modalDialog = document.getElementById(`modal-dialog-${key}`);
  if (modalBackdrop.classList.contains('hidden')) {
    modalBackdrop.classList.remove('hidden');
    setTimeout(() => {
      modalDialog.classList.remove('opacity-0', 'scale-125');
      modalDialog.classList.add('opacity-100', 'scale-100');
    }, 10); // Small delay to trigger the transition
  } else {
    modalDialog.classList.remove('opacity-100', 'scale-100');
    modalDialog.classList.add('opacity-0', 'scale-125');
    setTimeout(() => {
      modalBackdrop.classList.add('hidden');
    }, 200); // Duration of the transition
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(`.toggle-modal-${key}`).forEach((element) => {
    element.addEventListener('click', () => {
      toggleModal(key);
    });
  });

  const modalBackdrop = document.getElementById(`modal-backdrop-${key}`);
  modalBackdrop?.addEventListener('mousedown', (event) => {
    if (event.target === modalBackdrop) {
      toggleModal(key);
    }
  });
});
