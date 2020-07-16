regex(
  "Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat"
);

function regex(value) {
  var data = value.match(/e|s/g);
  console.log(data);
}
