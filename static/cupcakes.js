$(".delete-cupcake").on("click", deleteCupcake);

async function deleteCupcake() {
  const id = $(this).data("id");
  await axios.delete(`/api/cupcakes/${id}`);
  $(this).parent().remove();
}
