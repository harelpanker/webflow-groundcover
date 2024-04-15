const header_form = document.querySelector('[data-name="header_demo_form"]');
const header_first_name = document.querySelector('#header_first_name');
const header_last_name = document.querySelector('#header_last_name');
const header_job_title = document.querySelector('#header_job_title');
const header_company = document.querySelector('#header_company');
const header_phone = document.querySelector('#header_phone');
const header_email = document.querySelector('#header_email');
const header_error = document.querySelector('#header_error');
const header_submit = document.querySelector(
  '[data-name="header_submit_input"]'
);

const invalidDomain = [
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

document.addEventListener('DOMContentLoaded', () => {
  header_error.style.display = 'none';
  header_submit.disabled = true;
});

header_form.addEventListener('submit', (event) => {
  event.preventDefault();

  analytics.identify(header_email.value || '', {
    first_name: header_first_name.value || '',
    last_name: header_last_name.value || '',
    job_title: header_job_title.value || '',
    company: header_company.value || '',
    email: header_email.value || '',
    phone: header_phone.value || '',
  });

  analytics.track('header_demo_form', {
    first_name: header_first_name.value || '',
    last_name: header_last_name.value || '',
    job_title: header_job_title.value || '',
    company: header_company.value || '',
    email: header_email.value || '',
    phone: header_phone.value || '',
    page_path: window.location.href,
    reporter: 'webflow',
    event: 'form submit',
    source: '',
    userType: 'lead',
  });
});

header_email.addEventListener('blur', () => {
  const domainPart = header_email.value.split('@')[1];

  if (invalidDomain.includes(domainPart)) {
    header_error.style.display = 'block';
    header_email.value = '';
    header_email.placeholder = 'Please enter a business email';
    header_submit.disabled = true;
  } else {
    header_error.style.display = 'none';
    header_submit.disabled = false;
  }
});

// const startWrapperDesktop = document.querySelector(".start-wrap-desktop");
// const startWrapperMobile = document.querySelector(".start-wrap-mobile");
