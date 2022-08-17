$('.delete-todo').click(deleteTodo)

async function deleteTodo() {
  const id = $(this).data('id')//this refers to the html data atrribute 
  await axios.delete(`/api/todos/${id}`)
  $(this).parent().remove()
}
