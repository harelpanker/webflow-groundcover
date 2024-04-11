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

  // total
  const monthlyCost =
    (support + maintenance + implementation_and_setup + hosting) / 12;
  const yearlyCost = monthlyCost * 12;

  total_oss.forEach(
    (item) => (item.innerHTML = Math.round(yearlyCost).toLocaleString())
  );
  total_oss_short.forEach(
    (item) => (item.innerHTML = formatNumber(yearlyCost))
  );
};

// run the events
const handleOssInputChange = () => calculate_oss();

input_nodes.addEventListener('input', handleOssInputChange);
input_range.addEventListener('input', handleOssInputChange);
input_logs_per_sec.addEventListener('input', handleOssInputChange);
input_spans_per_sec.addEventListener('input', handleOssInputChange);
input_metrics.addEventListener('input', handleOssInputChange);
input_containers.addEventListener('input', handleOssInputChange);

document.addEventListener('DOMContentLoaded', () => calculate_oss());
