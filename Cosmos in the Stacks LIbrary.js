<script>
  document.querySelectorAll('.hotspot').forEach(button => {
    button.addEventListener('click', () => {
      const url = button.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });
</script>
