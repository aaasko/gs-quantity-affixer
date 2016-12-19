if (window.stockMapping) {
  $('.productSizeSelection-select-option').each((_, option) => {
    var left = window.stockMapping[option.value].left;
    if (left.length === 0) {
      // jeans/pants page
      return;
    }
    var level = left[0].level;
    if (level !== 0) {
      option.innerText = option.innerText + ' - ' + level;
    }
  });
}
