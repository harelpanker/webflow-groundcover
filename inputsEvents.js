const handleDatadogInputChange = () => calculate_datadog();
const handleInputChange = () => calculate_groundcover();
const handleOssInputChange = () => calculate_oss();

input_nodes.addEventListener('input', () => {
  handleInputChange();
  handleDatadogInputChange();
  handleOssInputChange();
});
input_range.addEventListener('input', () => {
  handleInputChange();
  handleDatadogInputChange();
  handleOssInputChange();
});
input_logs_per_sec.addEventListener('input', () => {
  handleInputChange();
  handleDatadogInputChange();
  handleOssInputChange();
});
input_spans_per_sec.addEventListener('input', () => {
  handleInputChange();
  handleDatadogInputChange();
  handleOssInputChange();
});
input_metrics.addEventListener('input', () => {
  handleInputChange();
  handleDatadogInputChange();
  handleOssInputChange();
});
input_containers.addEventListener('input', () => {
  handleInputChange();
  handleDatadogInputChange();
  handleOssInputChange();
});

document.addEventListener('DOMContentLoaded', () => {
  calculate_groundcover();
  handleDatadogInputChange();
  calculate_oss();
});
