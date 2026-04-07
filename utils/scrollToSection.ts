export function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith('#')) return;

  e.preventDefault();
  const target = document.getElementById(href.replace('#', ''));
  if (!target) return;

  const navHeight = 80;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}
