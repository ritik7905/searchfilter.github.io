function searchCards() {
  const input = document.querySelector('#user_input').value.toUpperCase()
  // console.log(input);
  const container = document.querySelector('#array')
  // console.log(container);
  const cards = container.getElementsByClassName('card')
  // console.log(cards);

  for (let i = 0; i < cards.length; i++) {
    const heading = cards[i].querySelector('.img h3.title')
    // console.log(heading);
    if (heading.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = ''
      
      document.querySelector('#emptyMsg').innerHTML = '';
    } else {
      cards[i].style.display = 'none';
      document.querySelector('#emptyMsg').innerHTML = 'Nothing to find :)';
    }
  }
}
