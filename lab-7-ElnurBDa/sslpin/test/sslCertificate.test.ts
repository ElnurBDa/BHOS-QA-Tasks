const https = require("https");
const fs = require("fs");
const path = require("path");

const apiURL = "https://60a21d3f745cd70017576092.mockapi.io";
const localCertPath = path.join(__dirname, "public-cert.pem");

function getSSLCertificate(hostname) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: hostname,
      port: 443,
      method: "GET",
      agent: false,
      rejectUnauthorized: false,
    };

    const req = https.request(options, (res) => {
      const cert = res.connection.getPeerCertificate();
      if (cert && Object.keys(cert).length > 0) {
        resolve(cert.raw.toString("base64"));
      } else {
        reject(new Error("No certificate found"));
      }
    });

    req.on("error", reject);
    req.end();
  });
}

function getLocalCertificate() {
  return fs.readFileSync(localCertPath, "utf8");
}

describe("SSL Certificate Pinning Test", () => {
  it("should match the API SSL certificate with the locally stored certificate", async () => {
    const hostname = new URL(apiURL).hostname;
    const liveCert = await getSSLCertificate(hostname);
    const localCert = getLocalCertificate();
    expect(liveCert).toBe(localCert);
  });
});
