[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/xNUOQ0D2)

### Key Learnings for Stubbing/Mocking in Testing

1. **Mocking**: Simulating dependencies to isolate the system under test. It allows control over external services like authentication, databases, or APIs.
2. **Stubbing**: Predefining outputs for methods, bypassing actual logic to test specific scenarios.
3. **Benefits**:
   - Isolates components, testing them independently of external factors.
   - Simulates different behaviors (success, failure, exceptions).
   - Improves test stability and performance.

### Mocking Strategy Used

1. **Manual Mock**:
   - Created `FacebookAuthProviderMock` to implement `AuthProvider` with a controlled `sign()` method.
   - The mock class takes a `shouldSucceed` flag to control whether the `sign()` method returns success or throws an error.

2. **Test Scenarios**:
   - Success case: Returns `"success"`, verified `AuthManager.sign()` returns `true`.
   - Failure case: Throws error, verified `AuthManager.sign()` returns `false`.
   - Exception handling: Ensured `AuthManager.sign()` returns `false` when an exception is thrown.

This method isolates the `AuthManager` for testing while simulating different authentication outcomes effectively.
