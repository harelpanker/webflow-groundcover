// console.log('start');
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

const total_datadog_percent = document.querySelectorAll(
  '[data-name="total_datadog_percent"]'
);
const total_oss_percent = document.querySelectorAll(
  '[data-name="total_oss_percent"]'
);

// table stuff
const groundcover_subscription = document.querySelector(
  '[data-name="groundcover_subscription"]'
);
const datadog_subscription = document.querySelector(
  '[data-name="datadog_subscription"]'
);
const oss_subscription = document.querySelector(
  '[data-name="oss_subscription"]'
);
const groundcover_hosting = document.querySelector(
  '[data-name="groundcover_hosting"]'
);
const datadog_hosting = document.querySelector('[data-name="datadog_hosting"]');
const oss_hosting = document.querySelector('[data-name="oss_hosting"]');
const groundcover_implementation = document.querySelector(
  '[data-name="groundcover_implementation"]'
);
const datadog_implementation = document.querySelector(
  '[data-name="datadog_implementation"]'
);
const oss_implementation = document.querySelector(
  '[data-name="oss_mplementation"]'
);
const groundcover_maintenance = document.querySelector(
  '[data-name="groundcover_maintenance"]'
);
const datadog_maintenance = document.querySelector(
  '[data-name="datadog_maintenance"]'
);
const oss_maintenance = document.querySelector('[data-name="oss_maintenance"]');
const groundcover_support = document.querySelector(
  '[data-name="groundcover_support"]'
);
const datadog_support = document.querySelector('[data-name="datadog_support"]');
const oss_support = document.querySelector('[data-name="oss_support"]');

let graoundcover_price = 0;
let datadog_price = 0;
let oss_price = 0;

const fte_salary = 127000 / 12;
