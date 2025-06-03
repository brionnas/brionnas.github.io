// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');
const menuIcon = mobileMenuToggle?.querySelector('i');

if (mobileMenuToggle && mainNav) {
  mobileMenuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    if (menuIcon) {
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.toggle('fa-times');
    }
  });

  document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      mainNav.classList.remove('active');
      if (menuIcon) {
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
      }
    }
  });
}

// Submit page — live preview updates
const titleInput = document.getElementById('title');
const descInput = document.getElementById('description');
const prepInput = document.getElementById('prep-time');
const servingsInput = document.getElementById('servings');

if (titleInput && descInput && prepInput && servingsInput) {
  const previewTitle = document.getElementById('previewTitle');
  const previewDesc = document.getElementById('previewDesc');
  const previewPrep = document.getElementById('previewPrep');
  const previewServings = document.getElementById('previewServings');

  titleInput.addEventListener('input', () => {
    previewTitle.textContent = titleInput.value || 'Your Amazing Recipe';
  });

  descInput.addEventListener('input', () => {
    previewDesc.textContent = descInput.value || 'Your recipe description will appear here.';
  });

  function updateMeta() {
    previewPrep.innerHTML = `<i class="fas fa-clock"></i> ${prepInput.value || '--'} min`;
    previewServings.innerHTML = `<i class="fas fa-users"></i> Serves ${servingsInput.value || '--'}`;
  }

  prepInput.addEventListener('input', updateMeta);
  servingsInput.addEventListener('input', updateMeta);
}

// Submit page — add more ingredient inputs
function addIngredient() {
  const ingredientsList = document.getElementById('ingredientsList');
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Enter another ingredient';
  input.style.marginTop = '0.5rem';
  ingredientsList.appendChild(input);
}

// Simulate admin actions (optional frontend-only logic)
document.querySelectorAll('.card-actions a')?.forEach(action => {
  action.addEventListener('click', (e) => {
    e.preventDefault();
    const card = e.target.closest('.card');
    if (card) {
      card.style.opacity = 0.5;
      card.querySelector('.card-meta span:last-child').textContent = "Marked ✔";
    }
  });
});
