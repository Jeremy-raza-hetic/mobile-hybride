export const bindCard = (name, description) => {
  document.getElementById('card-title').innerHTML = name
  document.getElementById('card-description').innerHTML = description
  document.body.className = 'logged cardPreview'
}

document.getElementById('card').addEventListener('click', () => {
  if (document.body.className === 'logged cardPreview') {
    document.body.className = 'logged cardFull'
  } else {
    document.body.className = 'logged cardPreview'
  }
})
