import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, '../views/index.html'), 'utf8');

let dom
let body

describe('index.html', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    body = dom.window.document.body
  })

it('Button is displayed on the page', () => {
    expect(body.querySelector('button')).not.toBeNull()
    expect(getByText(body, 'Click Me')).toBeInTheDocument()
  })

it('New text is displayed when button is clicked', async () => {
    const button = getByText(body, 'Click Me')

    fireEvent.click(button)
    let text = body.querySelectorAll('#message p')
    expect(text.length).toBe(1)

  }) 
})