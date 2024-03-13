// 문자에서 빈 문자열만 false, 나머지는 true
const a = Boolean("123");
const b = Boolean("0");
const c = Boolean("문자");
const d = Boolean(" ");

// 숫자에서 0만 false, 나머지는 true
const e = Boolean(0);
const f = Boolean(1);
