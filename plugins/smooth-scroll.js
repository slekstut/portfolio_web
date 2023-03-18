export default function ({ app }) {
  if (process.client) {
    const smoothScroll = (event) => {
      event.preventDefault();
      const target = document.querySelector(event.currentTarget.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  }
}
