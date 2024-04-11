const hidden_form = document.querySelector('[data-name="TCO_Demo_Req"]');
const first_name_hidden = documet.querySelector('#first_name_hidden');
const last_name_hidden = documet.querySelector('#last_name_hidden');
const job_title_hidden = documet.querySelector('#job_title_hidden');
const company_hidden = documet.querySelector('#company_hidden');
const phone_hidden = documet.querySelector('#phone_hidden');
const email_hidden = documet.querySelector('#email_hidden');

const nodes_hidden = documet.querySelector('#nodes_hidden');
const logs_per_sec_hidden = documet.querySelector('#logs_per_sec_hidden');
const spans_per_sec_hidden = documet.querySelector('#spans_per_sec_hidden');
const metrics_hidden = documet.querySelector('#metrics_hidden');
const containers_hidden = documet.querySelector('#containers_hidden');

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
    nodes: nodes_hidden.value || '',
    logs_per_sec: logs_per_sec_hidden.value || '',
    spans_per_sec: spans_per_sec_hidden.value || '',
    metrics: metrics_hidden.value || '',
    containers: containers_hidden.value || '',
  });

  analytics.track('TCO_Demo_Req', {
    first_name: first_name_hidden.value || '',
    last_name: last_name_hidden.value || '',
    job_title: job_title_hidden.value || '',
    company: company_hidden.value || '',
    email: email_hidden.value || '',
    phone: phone_hidden.value || '',
    nodes: nodes_hidden.value || '',
    logs_per_sec: logs_per_sec_hidden.value || '',
    spans_per_sec: spans_per_sec_hidden.value || '',
    metrics: metrics_hidden.value || '',
    containers: containers_hidden.value || '',
    page_path: window.location.href,
    reporter: 'webflow',
    event: 'form submit',
    source: 'url need to add',
    userType: 'lead',
  });
});
