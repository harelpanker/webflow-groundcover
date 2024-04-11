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
  total_datadog.forEach(
    (item) => (item.innerHTML = Math.round(yearlyCost).toLocaleString())
  );
  total_datadog_short.forEach(
    (item) => (item.innerHTML = formatNumber(yearlyCost))
  );
};
