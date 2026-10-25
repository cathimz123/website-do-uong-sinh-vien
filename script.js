const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Đóng menu' : 'Mở menu');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Mở menu');
  });
});

document.querySelectorAll('.order-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById('product').value = button.dataset.product;
    document.getElementById('lien-he').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('fullName').focus({ preventScroll: true });
  });
});

document.getElementById('orderForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = document.getElementById('fullName').value.trim();
  const product = document.getElementById('product').value;
  const note = document.getElementById('formNote');

  if (!form.reportValidity()) return;
  note.textContent = `Cảm ơn ${name}! Yêu cầu về "${product}" đã được ghi nhận trên bản demo. Đây chưa phải đơn hàng gửi đến cửa hàng.`;
  note.classList.add('form-note-success');
  form.reset();
});
