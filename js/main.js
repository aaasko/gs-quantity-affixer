(function() {
  const isBottom = function (pair) {
    return pair.left.length === 0;
  }
  
  const affixBottom = function (option, pair) {
    const { right: [ lengths ] } = pair;
    const levels = [];
    
    for (let length in lengths) {
      levels.push(length + ':' + lengths[length].level);
    }
    
    if (levels.length === 0) {
      return;
    }
    
    option.innerText += ' - ' + levels.join(', ');
  }
  
  const affixTop = function (option, pair) {
    const { left } = pair;
    const level = left[0].level;
    
    if (level !== 0) {
      option.innerText += ' - ' + level;
    }
  }
  
  if (window.stockMapping) {
    const firstSelectSelector = '.productSizeSelection-select[name=gridvalue1]';
    const optionSelector = '.productSizeSelection-select-option';
    
    $(firstSelectSelector + ' ' + optionSelector).each((_, option) => {
      const pair = window.stockMapping[option.value];
      
      if (isBottom(pair)) {
        affixBottom(option, pair);
      } else {
        affixTop(option, pair);
      }
    });
  }
}());
