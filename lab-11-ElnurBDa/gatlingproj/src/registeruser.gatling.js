import {
  simulation,
  scenario,
  exec,
  csv,
  feed,
  rampUsers,
  arrayFeeder,
  StringBody,
} from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

const options = [
  { filename: "mock/mock_data_1000.csv", number: 1000 },
  { filename: "mock/mock_data_10000.csv", number: 10000 },
  { filename: "mock/mock_data_100000.csv", number: 100000 },
];

const n = 0; // change this to get other numbers

export default simulation((setUp) => {
  const feeder = csv(options[n].filename).random();

  const users = scenario("Users")
    .feed(feeder)
    .exec(
      http("Register User")
        .post("/register")
        .body(StringBody('{"email": "#{email}", "password": "#{password}"}'))
        .asJson()
        .check(status().is(201))
    );

  const httpProtocol = http
    .baseUrl("http://localhost:3000")
    .acceptHeader("application/json")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/119.0"
    );

  setUp(users.injectOpen(rampUsers(options[n].number).during(1))).protocols(
    httpProtocol
  );
});
