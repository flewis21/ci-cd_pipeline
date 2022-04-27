function afterPageLoad() {
  document.getElementById('title').textContent = 'After Page Load Hello';
}

document.addEventListener('DOMContentLoaded', afterPageLoad);
