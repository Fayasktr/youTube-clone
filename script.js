// Basic interactivity: toggle sidebar + simple search feedback
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');
  const body = document.body;
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  // Toggle sidebar (desktop keeps it visible; on small screens we hide/show)
  menuBtn.addEventListener('click', () => {
    if (window.innerWidth <= 680) {
      // mobile: toggle class to show/hide
      sidebar.style.display = (sidebar.style.display === 'block') ? 'none' : 'block';
    } else {
      // desktop: collapse/expand by changing width
      if (sidebar.style.width === '72px') {
        sidebar.style.width = '240px';
        sidebar.querySelectorAll('.side-item span').forEach(s => s.style.display = 'inline');
      } else {
        sidebar.style.width = '72px';
        sidebar.querySelectorAll('.side-item span').forEach(s => s.style.display = 'none');
      }
    }
  });

  // Example search behavior: show alert with search term (replace with real search)
  searchForm.addEventListener('submit', () => {
    const q = searchInput.value.trim();
    if (!q) return;
    // For demo: filter thumbnails or fetch real results using YouTube Data API
    alert('You searched for: ' + q + '\n(Replace this with a real search or API call.)');
  });

  // Close sidebar when resizing up/down to avoid layout glitches
  window.addEventListener('resize', () => {
    if (window.innerWidth > 680) {
      sidebar.style.display = 'block';
    } else {
      sidebar.style.display = 'none';
      sidebar.style.width = '240px';
      sidebar.querySelectorAll('.side-item span').forEach(s => s.style.display = 'inline');
    }
  });

});
