from flask import Flask, request, jsonify
import csv

app = Flask(__name__)

class VersionControl:
    def __init__(self, bad_version):
        self.bad_version = bad_version
    
    # Mocking isBadVersion API call
    def isBadVersion(self, version):
        return version >= self.bad_version

    # Linear Scan Approach
    def firstBadVersionLinear(self, n):
        for version in range(1, n+1):
            if self.isBadVersion(version):
                return version
        return -1

    # Binary Search Approach
    def firstBadVersionBinary(self, n):
        left, right = 1, n
        while left < right:
            mid = (left + right) // 2
            if self.isBadVersion(mid):
                right = mid
            else:
                left = mid + 1
        return left

# POST endpoint for Linear Search
@app.route('/isbadversionlinear', methods=['POST'])
def isbadversionlinear():
    n = int(request.form['n'])
    bad_version = int(request.form['bad_version'])
    version_control = VersionControl(bad_version)
    result = version_control.firstBadVersionLinear(n)
    return jsonify({"first_bad_version": result})

# POST endpoint for Binary Search
@app.route('/isbadversionbinary', methods=['POST'])
def isbadversionbinary():
    n = int(request.form['n'])
    bad_version = int(request.form['bad_version'])
    version_control = VersionControl(bad_version)
    result = version_control.firstBadVersionBinary(n)
    return jsonify({"first_bad_version": result})

if __name__ == '__main__':
    app.run(debug=True)

