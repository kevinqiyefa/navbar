document.getElementById('menu-icon').addEventListener('click', displayItems);

function displayItems() {
  let cssDisplay = document.getElementsByClassName('nav-items')[0].style
    .display;
  document.getElementsByClassName('nav-items')[0].style.display =
    cssDisplay === 'flex' ? '' : 'flex';
}
