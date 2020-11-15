function trampoline(fn) {
  return function(...args) {
    let result = fn.apply(fn.context, args)
    while (typeof result === 'function') {
      result = result();
    }

    return result;
  }
}

function sum(number, s = 0) {
  return number === 0 ? s : () => sum(number - 1, s + number);
}

const trampolineSum = trampoline(sum);
// trampolineSum(1000);