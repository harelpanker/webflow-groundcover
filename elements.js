console.log('start');
const total = document.querySelectorAll('[data-name="total"]');
const total_short = document.querySelectorAll('[data-name="total_short"]');
const total_oss = document.querySelectorAll('[data-name="total_oss"]');
const total_oss_short = document.querySelectorAll(
  '[data-name="total_oss_short"]'
);
const total_datadog = document.querySelectorAll('[data-name="total_datadog"]');
const total_datadog_short = document.querySelectorAll(
  '[data-name="total_datadog_short"]'
);

const input_nodes = document.querySelector('#input_nodes');
const input_range = document.querySelector('#input_range');
const input_logs_per_sec = document.querySelector('#logs_per_sec');
const input_spans_per_sec = document.querySelector('#spans_per_sec');
const input_metrics = document.querySelector('#metrics');
const input_containers = document.querySelector('#containers');

const fte_salary = 127000 / 12;
