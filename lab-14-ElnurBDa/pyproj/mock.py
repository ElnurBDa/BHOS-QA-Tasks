import csv
import random

def generate_test_data(num_rows, filename='test_data.csv'):
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['n', 'bad_version'])  # Write header

        max_n = 2**31 - 1

        for _ in range(num_rows):
            n = random.randint(1, max_n)  # Generate random 'n'
            bad_version = random.randint(1, n)  # Bad version is between 1 and n
            writer.writerow([n, bad_version])

if __name__ == "__main__":
    generate_test_data(10000)

