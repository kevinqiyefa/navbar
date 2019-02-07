document.getElementById('menu-icon').addEventListener('click', displayItems);

function displayItems() {
  let cssDisplay = document.getElementById('nav-items').style.display;
  document.getElementById('nav-items').style.display =
    cssDisplay === 'flex' ? 'none' : 'flex';
}
