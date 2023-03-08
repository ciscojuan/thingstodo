const taskCompleted = (e) =>{
    if (e.target.classList.contains('check-icon')) {
        e.target.classList.toggle('fa-check-square');
        e.target.classList.toggle('fa-check-square');
        e.target.classList.toggle('completed');
      }
}

export default taskCompleted;