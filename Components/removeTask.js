const removeTask = (e) => {
    if (e.target.classList.contains('trashIcon')) {
        e.target.closest('.card').remove();
      }
}
export default removeTask;