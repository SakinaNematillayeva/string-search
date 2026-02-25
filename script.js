var text = prompt("Telefon raqam (+998...) yoki email nomini kiriting")
  .trim()
  .toLowerCase();

if (text.startsWith("+998")) {

  var code = text.slice(4, 6);
  var operator = "";

  switch (code) {
    case "90":
    case "91":
      operator = "Beeline";
      break;

    case "93":
    case "94":
      operator = "Ucell";
      break;

    case "99":
      operator = "Uzmobile";
      break;

    case "33":
      operator = "Humans";
      break;

    default:
      operator = "Noma'lum operator";
  }

  var phone =
    "+998 (" +
    text.slice(4, 6) +
    ") " +
    text.slice(6, 9) +
    " " +
    text.slice(9, 11) +
    " " +
    text.slice(11, 13);

  alert(phone + " " + "Operator: " + operator);

} else if (!text.includes("@")) {
  alert(text + "@gmail.com");
} else {
  alert(text);
}