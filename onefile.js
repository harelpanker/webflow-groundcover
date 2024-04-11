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
  '[data-name="oss__subscription"]'
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
function formatNumber(num, precision = 0) {
  const map = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted;
  }

  return num;
}
function updateValues() {
  input_nodes.value = input_range.value;
}

input_range.addEventListener('input', updateValues);

input_nodes.addEventListener('input', function () {
  input_range.value = input_nodes.value;
  updateValues();
});
// https://docs.google.com/spreadsheets/d/1trISbcrfOtZh3LG4eOG-SnWCTZ5iU2KVK0_V_pAaaT8/edit#gid=0
const calculate_groundcover = () => {
  const victoria_metrics =
    (((1 * 1) / 30) *
      (60 * 60 * 24 * 30 * 15) *
      (input_nodes.value * input_metrics.value)) /
    10 ** 12;
  const click_house =
    ((0.067 *
      (30 * 24 * 60 * 60 * input_nodes.value * input_logs_per_sec.value * 1.5 +
        30 *
          24 *
          60 *
          60 *
          input_nodes.value *
          input_spans_per_sec.value *
          1.5)) /
      1000000000) *
    0.5;
  const license = input_nodes.value * 30;
  const hosting_click_house_instance = 1 * 280.32;
  const hosting_click_house_disk = click_house * 1000 * 0.08;
  const hosting_victoria_metrics_instance = 1 * 140.16;
  const hosting_victoria_metrics_disk = victoria_metrics * 1000 * 0.08;
  const maintenance = (0.1 * 127000) / 12;

  groundcover_subscription.innerHTML = `$${license * 12}`;
  groundcover_hosting.innerHTML = `$${
    Math.floor(
      hosting_click_house_instance +
        hosting_click_house_disk +
        hosting_victoria_metrics_instance +
        hosting_victoria_metrics_disk
    ) * 12
  }`;
  groundcover_implementation.innerHTML = `${0}`;
  groundcover_maintenance.innerHTML = `$${Math.floor(maintenance) * 12}`;
  groundcover_support.innerHTML = `$${0}`;

  const totalNumber =
    (license +
      hosting_click_house_instance +
      hosting_click_house_disk +
      hosting_victoria_metrics_instance +
      hosting_victoria_metrics_disk +
      maintenance) *
    12;
  graoundcover_price = totalNumber;

  total.forEach(
    (item) => (item.innerHTML = Math.round(totalNumber).toLocaleString())
  );
  total_short.forEach((item) => (item.innerHTML = formatNumber(totalNumber)));
};
const calculate_oss = () => {
  const hosting_prometheus_instance = 560.64 * 1;
  const e84 =
    ((((7 * 1 * 1) / 30) * (60 * 60 * 24 * 30 * 15)) / 10 ** 12) *
    (input_nodes.value * input_metrics.value);
  const hosting_prometheus_disk = 0.08 * 1000 * e84;
  const hosting_elasticSearch_instance = 560.64 * 1;
  const d26 = (7 * 1) / 15;
  const c15 =
    30 * 24 * 60 * 60 * input_nodes.value * input_logs_per_sec.value * 1.5;
  const c16 =
    30 * 24 * 60 * 60 * input_nodes.value * input_spans_per_sec.value * 1.5;
  const e85 = ((d26 * (c15 + c16)) / 10 ** 9) * (15 / 30);
  const hosting_elasticSearch_disk = 0.08 * 1000 * e85;

  const hosting =
    (hosting_elasticSearch_disk +
      hosting_elasticSearch_instance +
      hosting_prometheus_disk +
      hosting_prometheus_instance) *
    12;

  const implementation_and_setup =
    (fte_salary * 1 + fte_salary * 0.25 + fte_salary * 1) * 12;
  const maintenance = (fte_salary * 1 + fte_salary * 0.5) * 12;
  const support = fte_salary * 1 * 12;

  //
  oss_subscription.innerHTML = `$0`;
  oss_hosting.innerHTML = `$${Math.floor(hosting)}`;
  oss_implementation.innerHTML = `$${implementation_and_setup}`;
  oss_maintenance.innerHTML = `$${Math.floor(maintenance)}`;
  oss_support.innerHTML = `$${support}`;
  //

  // total
  const monthlyCost =
    (support + maintenance + implementation_and_setup + hosting) / 12;
  const yearlyCost = monthlyCost * 12;
  oss_price = yearlyCost;

  const ossPercentage = Math.abs(graoundcover_price / oss_price - 1);
  total_oss_percent.forEach(
    (item) => (item.innerHTML = (ossPercentage * 100).toFixed(0))
  );

  total_oss.forEach(
    (item) => (item.innerHTML = Math.round(yearlyCost).toLocaleString())
  );
  total_oss_short.forEach(
    (item) => (item.innerHTML = formatNumber(yearlyCost))
  );
};
const calculate_datadog = () => {
  const input_nodes_value = input_nodes.value;

  const logs_2 =
    ((1.7 *
      (30 * 24 * 60 * 60) *
      input_logs_per_sec.value *
      input_nodes_value *
      1.5) /
      1.5 /
      10 ** 6) *
    0.5;
  const logs = logs_2;

  const infrastructure_1 = 23 * input_nodes_value;
  const infrastructure_2 = 0 * 10 * input_nodes_value;
  // prettier-ignore
  const infrastructure_3 = (0.002 * 24 * 30) * ((input_containers.value * input_nodes_value) - (10 * input_nodes_value));
  const infrastructure_4 = 0 * 200 * input_nodes_value;
  // prettier-ignore
  const infrastructure_5 = (3.5 / 100) * ((input_metrics.value * input_nodes_value) - (200 * input_nodes_value));
  const infrastructure =
    infrastructure_1 +
    infrastructure_2 +
    infrastructure_3 +
    infrastructure_4 +
    infrastructure_5;

  const apm_1 = 40 * input_nodes_value;
  const apm_2 = 0 * 150 * input_nodes_value;
  const apm_3 = 0.1 * 0;
  const apm_4 = 0 * input_nodes_value;
  // prettier-ignore
  const apm_5 = 1.7 * ((30 * 24 * 60 * 60)* input_spans_per_sec.value * input_nodes_value * 1.5 / 1.5 / (10 ** 6) - input_nodes_value); // 1270
  const apm = apm_1 + apm_2 + apm_3 + apm_4 + apm_5;
  const implementation_and_setup = fte_salary * 0.25 + fte_salary * 1;
  const maintenance = fte_salary * 0.25;
  const support = 0;

  //
  datadog_subscription.innerHTML = `$${
    Math.floor(apm + logs + infrastructure) * 12
  }`;
  datadog_hosting.innerHTML = `$${0}`;
  datadog_implementation.innerHTML = `$${0}`;
  datadog_maintenance.innerHTML = `$${Math.floor(maintenance) * 12}`;
  datadog_support.innerHTML = `$${0}`;
  //

  // prettier-ignore
  const monthlyCost = (support + maintenance + implementation_and_setup + apm + logs + infrastructure);
  const yearlyCost = monthlyCost * 12;
  datadog_price = yearlyCost;
  // (groundcover price / Datadog price) -1
  const dataDogPercentage = Math.abs(graoundcover_price / datadog_price - 1);

  total_datadog_percent.forEach(
    (item) => (item.innerHTML = (dataDogPercentage * 100).toFixed(0))
  );
  console.log(Math.round(dataDogPercentage));
  total_datadog.forEach(
    (item) => (item.innerHTML = Math.round(yearlyCost).toLocaleString())
  );
  total_datadog_short.forEach(
    (item) => (item.innerHTML = formatNumber(yearlyCost))
  );
};
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
