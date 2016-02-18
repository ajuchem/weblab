// CREATE AN ADD USER TABLE WITH JQUERY

$(document).ready(function() {

  var userTable = $("#users").find('tbody'); // can use $('#users tbody');
  var nameField = $("#name");
  var emailField = $("#email");
  var add_btn = $("#add");
  var clearAll_btn = $("#clearAll");

  // REMOVE BUTTON FUNCTION
  userTable.on('click', 'button.remove', function() {
    var btn = $(this);
    btn.parents("tr").remove(); // goes up to parent and clears only that
  });

  // ADD BUTTON
  add_btn.on('click', function() {
    var name = nameField.val();
    var email = emailField.val();

    if (email.match(/^.+?\@.+\..+?$/)) {
      emailField.removeClass('invalid');

      addUser({ // Adds info if email is valid
        name: name,
        email: email
      });

      nameField.val(""); // Clears fields if email is valid
      emailField.val("");
    } else {
      emailField.addClass('invalid');
    }
  });

  // ADD USER FUNCTION
  function addUser(user) {

    var userRow = $(
      "<tr>" +
      "<td>" + user.name + "</td>" +
      "<td>" + user.email + "</td>" +
      "<td><button class='remove btn btn-primary btn-xs'>Remove</button></td>" +
      "</tr>"); //This dynamically add a remove button when adding user info

    userTable.append(userRow);
  }

  // CLEAR BUTTON
  clearAll_btn.on('click', function() {
    userTable.empty();
  });


});
