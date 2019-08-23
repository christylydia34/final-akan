function validate(century, year, month, dayOfMonth) {
  valid = true;
  if (century == "") {
    alert("Input the correct gender");
    return false;
  } else if (year == "") {
    alert("Input the correct year");
    return false;
  } else if (month == "") {
    alert("Input the correct month");
    return false;
  } else if (dayOfMonth == "") {
    alert("input the correct date");
    return false;
  } else {
    return valid
  }

}


function getDayOfWeek(century, year, month, dayOfMonth) {
  var dayOfWeek = ((Math.floor((century / 4)) - 2 * century - 1) + Math.floor((5 * year / 4)) + Math.floor((26 * (month + 1) / 10)) + dayOfMonth) % 7
  dayOfWeek = Math.floor(dayOfWeek);
  return dayOfWeek;

}


function getNameResult(gender, dayOfWeek) {

  switch (gender) {
    case "male":
      switch (dayOfWeek) {

        case 0 || -0:
          document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + "Kwasi";
          break;
        case 1 || -1:
          document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + "Kwadwo";
          break;
        case 2 || -2:
          document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + "Kwabena";
          break;
        case 3 || -3:
          document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is " + "Kwaku";
          break;
        case 4 || -4:
          document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + "Yaw";
          break;
        case 5 || -5:
          document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + "Kofi";
        case 6 || -6:
          document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + "Kwame ";
          break;
        default:
          console.log("none");

      }
      break;
    case "female":
      switch (dayOfWeek) {
        case 0 || -0:
          document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  Akosua";
          break;
        case 1 || -1:
          document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is Adwoa ";
          break;
        case 2 || -2:
          document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is Abena";
          break;
        case 3 || -3:
          document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is Akua";
          break;
        case 4 || -4:
          document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is Yaa";
          break;
        case 5 || -5:
          document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is Afua";
          break;
        case 6 || -6:
          document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is Ama";
          break;
        default:
          console.log("none");

      }
      break
    default:
      console.log("none");
  }
}

function initialiseNameCheck() {

  var century = parseInt(document.getElementById("cc").value);
  var year = parseInt(document.getElementById("yy").value);
  var month = parseInt(document.getElementById("mm").value);
  var dayOfMonth = parseInt(document.getElementById("dd").value);

  if (document.getElementById("male").checked) {
    var gender = document.getElementById("male").value

  } else if (document.getElementById("female").checked) {
    gender = document.getElementById("female").value
    
  }

  console.log(gender)
  if (validate(century, year, month, dayOfMonth)) {

    let dayOfWeek = getDayOfWeek(century, year, month, dayOfMonth)
    getNameResult(gender, dayOfWeek)

  }
}

