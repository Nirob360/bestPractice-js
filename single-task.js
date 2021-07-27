// Ekta function er modhe multipel kag na korai valo.
// bad practice
function notifyUser(users) {
  users.forEach((user) => {
    const userRecord = database.lookup(user);
    if (userRecord.isVerified()) {
      notify(user);
    }
  });
}

// Good practice
// user verified notify
function notifyVerifiedUsers(users) {
  users.filter(isUserVerified).forEach(notify);
}

function isUserVerified(user) {
  const userRecord = database.lookup(user);
  return userRecord.isVerified();
}
