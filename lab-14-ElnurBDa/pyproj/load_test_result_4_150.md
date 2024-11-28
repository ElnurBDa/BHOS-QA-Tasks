# Performance

Performance test is done via Locust librarry of python

## Steps

```bash
# dependencies
pip install -r requirements
# run the app
gunicorn --workers=3 --bind 0.0.0.0:5000 app:app
# run the test
locust -f locustfile.py --users 1000 --spawn-rate 100 --host http://127.0.0.1:5000
```

## Report

Report can be found in html: [report](report.html)

The binary search algorithm (/isbadversionbinary) outperforms the linear search algorithm (/isbadversionlinear) based on the performance test:

- Faster response times: The binary algorithm has a lower average response time (202,348 ms vs 211,616 ms).

Therefore, the binary algorithm is more efficient and stable under load.
