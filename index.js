function toggledrop(item, show) {
    const dropdown = item.querySelector(".drop");
    console.log("huuray")
    if (dropdown) {
      dropdown.classList.toggle("show", show);
    }
  }