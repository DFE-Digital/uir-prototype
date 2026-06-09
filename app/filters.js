//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

const serviceLabels = {
  'fiats': 'Find Information about Schools and Trusts',
  'manage-school-improvement': 'Manage School Improvement',
  'prepare': 'Prepare',
  'complete': 'Complete',
  'recast': 'ReCast'
}

const requestAboutLabels = {
  'report-a-problem': 'Report a problem',
  'suggest-a-change': 'Suggest a change',
  'raise-a-risk': 'Raise a risk or compliance concern',
  'something-else': 'Something else'
}

const contactConsentLabels = {
  'yes': 'Yes',
  'no': 'No'
}

addFilter('getServiceLabel', (value) => {
  return serviceLabels[value] || value || ''
})

addFilter('getRequestAboutLabel', (value) => {
  return requestAboutLabels[value] || value || ''
})

addFilter('getContactConsentLabel', (value) => {
  return contactConsentLabels[value] || value || ''
})
