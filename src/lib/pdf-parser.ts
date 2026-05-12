export async function parsePDF(file: File): Promise<string> {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf')

  // Load the local worker from the public directory instead of CDN
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

  const arrayBuffer = await file.arrayBuffer()
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
  let text = ''
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const textContent = await page.getTextContent()
    text += textContent.items.map((item: any) => item.str).join(' ') + '\n'
  }
  return text
}