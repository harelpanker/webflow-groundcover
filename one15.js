// console.log('start');
let userInteruct = false;
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

// table stuff - groundcover
const groundcover_subscription = document.querySelector(
  '[data-name="groundcover_subscription"]'
);
const groundcover_logs = document.querySelector(
  '[data-name="groundcover_logs"]'
);
const groundcover_infrastructure = document.querySelector(
  '[data-name="groundcover_infrastructure"]'
);
const groundcover_apm = document.querySelector('[data-name="groundcover_apm"]');
const groundcover_costs = document.querySelector(
  '[data-name="groundcover_costs"]'
);
const groundcover_hosting = document.querySelector(
  '[data-name="groundcover_hosting"]'
);
const groundcover_support = document.querySelector(
  '[data-name="groundcover_support"]'
);
// table stuff - datadog
const datadog_subscription = document.querySelector(
  '[data-name="datadog_subscription"]'
);
const datadog_logs = document.querySelector('[data-name="datadog_logs"]');
const datadog_infrastructure = document.querySelector(
  '[data-name="datadog_infrastructure"]'
);
const datadog_apm = document.querySelector('[data-name="datadog_apm"]');
const datadog_costs = document.querySelector('[data-name="datadog_costs"]');
const datadog_hosting = document.querySelector('[data-name="datadog_hosting"]');
const datadog_support = document.querySelector('[data-name="datadog_support"]');
// table stuff - oss
const oss_subscription = document.querySelector(
  '[data-name="oss_subscription"]'
);
const oss_logs = document.querySelector('[data-name="oss_logs"]');
const oss_infrastructure = document.querySelector(
  '[data-name="oss_infrastructure"]'
);
const oss_apm = document.querySelector('[data-name="oss_apm"]');
const oss_costs = document.querySelector('[data-name="oss_costs"]');
const oss_hosting = document.querySelector('[data-name="oss_hosting"]');
const oss_support = document.querySelector('[data-name="oss_support"]');

// hidden form
const modal_demo_btns = document.querySelectorAll(
  '[fs-modal-element="open-9"]'
);
const hidden_form = document.querySelector('[data-name="TCO_Demo_Req"]');
const first_name_hidden = document.querySelector('#first_name_hidden');
const last_name_hidden = document.querySelector('#last_name_hidden');
const job_title_hidden = document.querySelector('#job_title_hidden');
const company_hidden = document.querySelector('#company_hidden');
const phone_hidden = document.querySelector('#phone_hidden');
const email_hidden = document.querySelector('#email_hidden');
const error_hidden = document.querySelector('#error-hidden');
const nodes_hidden = document.querySelector('#nodes_hidden');
const logs_per_sec_hidden = document.querySelector('#logs_per_sec_hidden');
const spans_per_sec_hidden = document.querySelector('#spans_per_sec_hidden');
const metrics_hidden = document.querySelector('#metrics_hidden');
const containers_hidden = document.querySelector('#containers_hidden');
const submit_hidden = document.querySelector('[data-name="submit_hidden"]');

// gated form
const modal_wrap = document.querySelector('#modal_wrap');
const gated_form = document.querySelector('[data-name="TCO_Gated_Form"]');
const first_name = document.querySelector('#first_name');
const last_name = document.querySelector('#last_name');
const job_title = document.querySelector('#job_title');
const company = document.querySelector('#company');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const error = document.querySelector('#error');
const submit = document.querySelector('[data-name="submit_input"]');
const hasCookie = checkCookie('TCO_Gated_Form_Submit');

let graoundcover_price = 0;
let datadog_price = 0;
let oss_price = 0;

const fte_salary = 127000 / 12;
function formatNumber(num, precision = 0) {
  let updatedPrecision = precision; // Set the default precision
  if (Math.abs(num) >= 1e6 && Math.abs(num) < 1e7) {
    updatedPrecision = 2; // Update precision to 2 if number is in millions
  }

  const map = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted =
      (num / found.threshold).toFixed(updatedPrecision) + found.suffix;
    return formatted;
  }

  return num;
}
function updateValues() {
  input_nodes.value = input_range.value;
}
function rangeController() {
  if (input_range.value > 1000 || input_nodes.value > 1000) {
    input_range.value = 1000;
    input_nodes.value = 1000;
  }
  if (input_range.value < 100 || input_nodes.value < 100) {
    input_range.value = 100;
    input_nodes.value = 100;
  }
}
function rangeControllerLogs() {
  if (input_logs_per_sec.value > 500) {
    input_logs_per_sec.value = 500;
  }
  if (input_logs_per_sec.value < 50) {
    input_logs_per_sec.value = 50;
  }
}
function rangeControllerSpans() {
  if (input_spans_per_sec.value > 100) {
    input_spans_per_sec.value = 100;
  }
  if (input_spans_per_sec.value < 20) {
    input_spans_per_sec.value = 20;
  }
}
function rangeControllerContainers() {
  if (input_containers.value > 500) {
    input_containers.value = 500;
  }
  if (input_containers.value < 50) {
    input_containers.value = 50;
  }
}
function rangeControllerMetrics() {
  if (input_metrics.value > 5000) {
    input_metrics.value = 5000;
  }
  if (input_metrics.value < 1000) {
    input_metrics.value = 1000;
  }
}

input_metrics.addEventListener('blur', () => rangeControllerMetrics());
input_containers.addEventListener('blur', () => rangeControllerContainers());
input_spans_per_sec.addEventListener('blur', () => rangeControllerSpans());
input_logs_per_sec.addEventListener('blur', () => rangeControllerLogs());
input_range.addEventListener('blur', () => rangeController());
input_nodes.addEventListener('blur', () => rangeController());

const handleShowGatedForm = () => {
  if (!userInteruct) {
    modal_wrap.classList.add('show');
    modal_wrap.click();
  }
  userInteruct = true;
};

const handleGradientChange = () => {
  const value = input_range.value;
  const max = parseInt(input_range.max);
  const percentage = (value / max) * 100;

  input_range.style.background = `linear-gradient(to right, #828DF8 0%, #828DF8 ${percentage}%, #EAECF0 ${percentage}%, #EAECF0 100%)`;
};

input_range.addEventListener('input', () => {
  handleShowGatedForm();
  updateValues();
  rangeController();
});

// https://codepen.io/amoknira/pen/vYZzgJZ
input_range.addEventListener('input', handleGradientChange);

input_nodes.addEventListener('input', () => {
  input_range.value = input_nodes.value;
  handleShowGatedForm();
  updateValues();
  handleGradientChange();
});

function setCookie(cookieName, cookieValue, expirationDays) {
  const d = new Date();
  d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
}
function checkCookie(cookieName) {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + '=')) {
      return true;
    }
  }
  return false;
}

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

  // table
  groundcover_subscription.innerHTML = `$${(license * 12).toLocaleString()}`;
  groundcover_logs.innerHTML = 'Included';
  groundcover_infrastructure.innerHTML = 'Included';
  groundcover_apm.innerHTML = 'Included';
  groundcover_costs.innerHTML = `$${(
    Math.floor(
      hosting_click_house_instance +
        hosting_click_house_disk +
        hosting_victoria_metrics_instance +
        hosting_victoria_metrics_disk +
        maintenance
    ) * 12
  ).toLocaleString()}`;
  groundcover_support.innerHTML = `$${(
    Math.floor(maintenance) * 12
  ).toLocaleString()}`;
  groundcover_hosting.innerHTML = `$${(
    Math.floor(
      hosting_click_house_instance +
        hosting_click_house_disk +
        hosting_victoria_metrics_instance +
        hosting_victoria_metrics_disk
    ) * 12
  ).toLocaleString()}`;

  // total
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

  // table
  oss_subscription.innerHTML = `$0`;
  oss_logs.innerHTML = `$0`;
  oss_infrastructure.innerHTML = `$0`;
  oss_apm.innerHTML = `$0`;
  oss_costs.innerHTML = `$${Math.floor(
    support + maintenance + implementation_and_setup + hosting
  ).toLocaleString()}`;
  oss_hosting.innerHTML = `$${Math.floor(hosting).toLocaleString()}`;
  oss_support.innerHTML = `$${Math.floor(
    support + maintenance + implementation_and_setup
  ).toLocaleString()}`;

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

  const logs_1 =
    (0.1 *
      (30 * 24 * 60 * 60) *
      input_logs_per_sec.value *
      input_nodes_value *
      1.5) /
    10 ** 6;
  const logs_2 =
    ((1.7 *
      (30 * 24 * 60 * 60) *
      input_logs_per_sec.value *
      input_nodes_value *
      1.5) /
      1.5 /
      10 ** 6) *
    0.5;
  const logs = logs_1 + logs_2;

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

  // table
  datadog_subscription.innerHTML = `$${(
    Math.floor(apm + logs + infrastructure) * 12
  ).toLocaleString()}`;
  datadog_logs.innerHTML = `$${(Math.floor(logs) * 12).toLocaleString()}`;
  datadog_infrastructure.innerHTML = `$${(
    Math.floor(infrastructure) * 12
  ).toLocaleString()}`;
  datadog_apm.innerHTML = `$${(Math.floor(apm) * 12).toLocaleString()}`;

  datadog_costs.innerHTML = `$${(
    Math.floor(support + maintenance + implementation_and_setup) * 12
  ).toLocaleString()}`;
  datadog_hosting.innerHTML = 'Included';
  datadog_support.innerHTML = `$${(
    Math.floor(support + maintenance + implementation_and_setup) * 12
  ).toLocaleString()}`;

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

const handleDatadogInputChange = () => calculate_datadog();
const handleInputChange = () => calculate_groundcover();
const handleOssInputChange = () => calculate_oss();

const handleMultipleInputChange = () => {
  handleInputChange();
  handleDatadogInputChange();
  handleOssInputChange();
};

input_range.addEventListener('blur', () => {
  rangeController();
  handleMultipleInputChange();
});
input_nodes.addEventListener('blur', () => {
  rangeController();
  handleMultipleInputChange();
});
input_metrics.addEventListener('blur', () => {
  rangeControllerMetrics();
  handleMultipleInputChange();
});
input_containers.addEventListener('blur', () => {
  rangeControllerContainers();
  handleMultipleInputChange();
});
input_spans_per_sec.addEventListener('blur', () => {
  rangeControllerSpans();
  handleMultipleInputChange();
});
input_logs_per_sec.addEventListener('blur', () => {
  rangeControllerLogs();
  handleMultipleInputChange();
});

input_nodes.addEventListener('input', () => {
  handleMultipleInputChange();
});
input_range.addEventListener('input', () => {
  handleMultipleInputChange();
});
input_logs_per_sec.addEventListener('input', () => {
  handleShowGatedForm();
  handleMultipleInputChange();
});
input_spans_per_sec.addEventListener('input', () => {
  handleShowGatedForm();
  handleMultipleInputChange();
});
input_metrics.addEventListener('input', () => {
  handleShowGatedForm();
  handleMultipleInputChange();
});
input_containers.addEventListener('input', () => {
  handleShowGatedForm();
  handleMultipleInputChange();
});

document.addEventListener('DOMContentLoaded', () => {
  calculate_groundcover();
  handleDatadogInputChange();
  calculate_oss();
  if (hasCookie) {
    userInteruct = true;
    modal_wrap.style.display = 'none';
  }
});

// hidden form event
hidden_form.addEventListener('submit', (event) => {
  event.preventDefault();

  nodes_hidden.value = input_nodes.value;
  logs_per_sec_hidden.value = input_logs_per_sec.value;
  spans_per_sec_hidden.value = input_spans_per_sec.value;
  metrics_hidden.value = input_metrics.value;
  containers_hidden.value = input_containers.value;

  analytics.identify(email_hidden.value || '', {
    first_name: first_name_hidden.value || '',
    last_name: last_name_hidden.value || '',
    job_title: job_title_hidden.value || '',
    company: company_hidden.value || '',
    email: email_hidden.value || '',
    phone: phone_hidden.value || '',
    tco_nodes: nodes_hidden.value || '',
    tco_logs_per_sec: logs_per_sec_hidden.value || '',
    tco_spans_per_sec: spans_per_sec_hidden.value || '',
    tco_metrics_per_sec: metrics_hidden.value || '',
    tco_containers_per_host: containers_hidden.value || '',
  });

  analytics.track('TCO_Demo_Req', {
    first_name: first_name_hidden.value || '',
    last_name: last_name_hidden.value || '',
    job_title: job_title_hidden.value || '',
    company: company_hidden.value || '',
    email: email_hidden.value || '',
    phone: phone_hidden.value || '',
    tco_nodes: nodes_hidden.value || '',
    tco_logs_per_sec: logs_per_sec_hidden.value || '',
    tco_spans_per_sec: spans_per_sec_hidden.value || '',
    tco_metrics_per_sec: metrics_hidden.value || '',
    tco_containers_per_host: containers_hidden.value || '',
    page_path: window.location.href,
    reporter: 'webflow',
    event: 'TCO_Demo_Req',
    source: '/TCO_Demo_Req',
    userType: 'lead',
  });

  modal_demo_btns.forEach((btn) => (btn.style.display = 'none'));
});

document.addEventListener('DOMContentLoaded', () => {
  if (!window.location.href.includes('utm_source=test')) {
    // modal_wrap.classList.add('show');
    error.style.display = 'none';
    error_hidden.style.display = 'none';
    submit.disabled = true;
    submit_hidden.disabled = true;
  }
});

gated_form.addEventListener('submit', (event) => {
  event.preventDefault();
  modal_wrap.classList.remove('show');

  first_name_hidden.value = first_name.value;
  last_name_hidden.value = last_name.value;
  job_title_hidden.value = job_title.value;
  company_hidden.value = company.value;
  phone_hidden.value = phone.value;
  email_hidden.value = email.value;

  analytics.identify(email.value || '', {
    first_name: first_name.value || '',
    last_name: last_name.value || '',
    job_title: job_title.value || '',
    company: company.value || '',
    email: email.value || '',
    phone: phone.value || '',
  });

  analytics.track('TCO_Gated_Form', {
    first_name: first_name.value || '',
    last_name: last_name.value || '',
    job_title: job_title.value || '',
    company: company.value || '',
    email: email.value || '',
    phone: phone.value || '',
    page_path: window.location.href,
    reporter: 'webflow',
    event: 'form submit',
    source: 'url need to add',
    userType: 'lead',
  });

  setCookie('TCO_Gated_Form_Submit', 'true', 30);
});

// email validation
const invalidDomains = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'competitor.com',
  'orange.fr',
  'outlook.com',
  'yandex.ru',
  'yandex.com',
  'wanadoo.fr',
  'yahoo.fr',
  'protonmail.com',
];

email.addEventListener('blur', () => {
  const domainPart = email.value.split('@')[1];

  if (invalidDomains.includes(domainPart)) {
    error.style.display = 'block';
    email.value = '';
    email.placeholder = 'Please enter a business email';
    submit.disabled = true;
  } else {
    error.style.display = 'none';
    submit.disabled = false;
  }
});
email_hidden.addEventListener('blur', () => {
  const domainPart = email_hidden.value.split('@')[1];

  if (invalidDomains.includes(domainPart)) {
    error_hidden.style.display = 'block';
    email_hidden.value = '';
    email_hidden.placeholder = 'Please enter a business email';
    submit_hidden.disabled = true;
  } else {
    error_hidden.style.display = 'none';
    submit_hidden.disabled = false;
  }
});
