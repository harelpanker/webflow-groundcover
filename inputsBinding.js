function updateValues() {
  input_nodes.value = input_range.value;
}

input_range.addEventListener('input', updateValues);

input_nodes.addEventListener('input', function () {
  input_range.value = input_nodes.value;
  updateValues();
});
