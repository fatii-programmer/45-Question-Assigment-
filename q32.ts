
// QUESTION NO32
// list of current users
const currentUsers: string[] = ['Abdullah', 'Immtiaz', 'Haadi', 'Umar', 'Khurram'];

// list of new users
const newUsers: string[] = ['salman', 'Imtiaz', 'yasir', 'usman', 'nazeer'];

// new users to check for uniqueness

for (let newUser of newUsers) {
  // Convert both usernames to lowercase for case-insensitive comparison

  const lowercaseNewUser = newUser.toLowerCase();
  const isUnique = !currentUsers.some((currentUser) => currentUser.toLowerCase() === lowercaseNewUser);

  // Print a message based on the result
  
  if (isUnique) {
    console.log(`Username '${newUser}' is available.`);
  } else {
    console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
  }
}