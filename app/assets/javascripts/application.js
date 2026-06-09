//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  const fileInput = document.getElementById('supporting-documentation-input')
  const summaryInput = document.getElementById('supporting-documentation-summary')

  if (fileInput && summaryInput) {
    fileInput.addEventListener('change', () => {
      const fileNames = Array.from(fileInput.files).map((file) => file.name)
      summaryInput.value = fileNames.length ? fileNames.join(', ') : ''
    })
  }
})
