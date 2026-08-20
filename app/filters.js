//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

const serviceLabels = {
  'reep': 'Record Engagement with Education Providers (REEP)',
  'complete': 'Complete Conversions and Transfers (Complete)',
  'eat': 'External Applications - Academy Transfers (EAT)',
  'vcc': "Vulnerable Children's Casework (VCC)",
  'fast': 'Find Information about Schools and Trusts (FAST)',
  'mfsp': 'Manage Free School Projects (MFSP)',
  'manage-school-improvement': 'Manage School Improvement (MSI)',
  'prepare': 'Prepare Conversions and Transfers (Prepare)',
  'recast': 'Record Concerns and Supports for Trusts (RECAST)',
  'something-new': 'Something new',
  'all-services': 'All services'
}

const requestAboutLabels = {
  'report-a-problem': 'Report a problem',
  'suggest-a-change': 'Suggest a change',
  'raise-a-risk': 'Raise a risk or compliance concern',
  'something-else': 'Something else'
}

const yesNoLabels = {
  'yes': 'Yes',
  'no': 'No'
}

function getLabels (value, labels) {
  if (Array.isArray(value)) {
    return value.map((item) => labels[item] || item).filter(Boolean)
  }
  if (!value) {
    return []
  }
  return [labels[value] || value]
}

addFilter('getServiceLabel', (value) => {
  return getLabels(value, serviceLabels).join(', ')
})

addFilter('getServiceLabelHtml', (value) => {
  return getLabels(value, serviceLabels)
    .map((label) => label.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'))
    .join('<br>')
})

addFilter('getRequestAboutLabel', (value) => {
  return requestAboutLabels[value] || value || ''
})

addFilter('getContactConsentLabel', (value) => {
  return yesNoLabels[value] || value || ''
})

addFilter('getAiLabel', (value) => {
  return yesNoLabels[value] || value || ''
})
