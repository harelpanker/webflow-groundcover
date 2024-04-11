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
