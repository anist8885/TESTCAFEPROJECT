import { Selector } from 'testcafe';

fixture`Login Tests`
  .page`https://beta.deepthought.education/login`;

// Test 1: Test successful login with valid credentials
test('Successful login with valid credentials', async t => {
  await t
    .typeText('#username', 'anist555')
    .typeText('#password', 'Pass@123')
    .click('#login')
    .expect(Selector('#welcome to deep thought').exists).ok(); // Assuming 'dashboard' is the ID of the dashboard screen
});

// Test 2: Test unsuccessful login attempts with invalid credentials
// test('Unsuccessful login attempts with invalid credentials', async t => {
//   await t
//     .typeText('#username', 'anees111')
//     .typeText('#password', 'pass6')
//     .click('#login')
//     .expect(Selector('.Login Unsuccessful').innerText).contains('Invalid credentials'); // Assuming 'error-message' class contains error message
// });

// // Test 3: Validate that appropriate error messages are displayed for invalid login attempts
// test('Validation of error messages for invalid login attempts', async t => {
//   await t
//     .typeText('#username', 'anees111')
//     .typeText('#password', 'pass6')
//     .click('#login')
//     .expect(Selector('.error-message').innerText).contains('Invalid credentials'); // Assuming 'error-message' class contains error message
// });

// // Test 4: On successful login, validate that the user is redirected to the dashboard screen
// test('Validation of successful login redirection to dashboard', async t => {
//   await t
//     .typeText('#username', 'anist555')
//     .typeText('#password', 'Pass@123')
//     .click('#login')
//     .expect(Selector('#dashboard').exists).ok(); // Assuming 'dashboard' is the ID of the dashboard screen
// });
