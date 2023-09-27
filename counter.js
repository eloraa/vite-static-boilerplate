export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Count Is ${counter}`
  }
  element.parentNode.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
