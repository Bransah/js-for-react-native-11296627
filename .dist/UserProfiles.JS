function createUserProfiles(names, modifiedNames) {
  """
  Creates an array of user profiles from names and their modified versions.

  Args:
      names: An array of original names.
      modifiedNames: An array of modified names.

  Returns:
      An array of user profile objects.
  """

  if (names.length !== modifiedNames.length) {
    throw new Error('Arrays names and modifiedNames must have the same length');
  }

  const userProfiles = [];
  let id = 1; 

  for (let i = 0; i < names.length; i++) {
    const originalName = names[i];
    const modifiedName = modifiedNames[i];

    userProfiles.push({
      originalName,
      modifiedName,
      id,
    });
    id++; 
  }

  return userProfiles;
}

const names = ["Alice", "Bob", "Charlie"];
const modifiedNames = ["aLiCe", "bOB", "ChArLiE"]; 

const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);