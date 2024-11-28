import {
    simulation,
    scenario,
    rampUsers,
    StringBody,
    jsonFile
} from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

const filename = "data/mockData.json";

export default simulation((setUp) => {
    const feeder = jsonFile(filename).random()

    const users = scenario("Addresses")
        .feed(feeder)
        .exec(
            http("updateAddressByID")
                .post("/address/updatebyname")
                .body(StringBody('{"id": "#{id}", "address": "#{address_line}"}'))
                .asJson()
                .check(status().is(200))
        );

    const httpProtocol = http
        .baseUrl("http://localhost:3000")
        .acceptHeader("application/json")
        .acceptLanguageHeader("en-US,en;q=0.5")
        .acceptEncodingHeader("gzip, deflate")
        .userAgentHeader(
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/119.0"
        );

    setUp(users.injectOpen(rampUsers(10000).during(1))).protocols(httpProtocol);
});
