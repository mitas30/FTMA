<script>
window.onload = function() {
  var navItems = document.querySelectorAll('#navbar li');

  navItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      var dropdown = this.querySelector('.dropdown');
      if (dropdown) dropdown.style.display = 'block';
    });

    item.addEventListener('mouseout', function() {
      var dropdown = this.querySelector('.dropdown');
      if (dropdown) dropdown.style.display = 'none';
    });
  });
}
</script>

