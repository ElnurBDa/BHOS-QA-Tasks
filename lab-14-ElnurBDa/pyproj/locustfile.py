import csv
from locust import HttpUser, task, between

# Load test data from the CSV file
def load_test_data():
    test_data = []
    with open('test_data.csv', 'r') as file:
        reader = csv.reader(file)
        next(reader)  # Skip header
        for row in reader:
            n, bad_version = int(row[0]), int(row[1])
            test_data.append((n, bad_version))
    return test_data

class VersionControlTest(HttpUser):
    wait_time = between(1, 3)  # Simulate a wait time between requests (1 to 3 seconds)

    test_data = load_test_data()  # Load test data once for all simulated users
    current_index = 0  # Keep track of current test case

    def get_next_test_data(self):
        """Retrieve the next (n, bad_version) pair."""
        data = self.test_data[self.current_index]
        self.current_index = (self.current_index + 1) % len(self.test_data)
        return data

    @task(1)
    def test_linear(self):
        """Task to test the linear endpoint."""
        n, bad_version = self.get_next_test_data()
        self.client.post("/isbadversionlinear", data={"n": n, "bad_version": bad_version})

    @task(1)
    def test_binary(self):
        """Task to test the binary search endpoint."""
        n, bad_version = self.get_next_test_data()
        self.client.post("/isbadversionbinary", data={"n": n, "bad_version": bad_version})

