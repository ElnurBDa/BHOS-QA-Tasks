import {
    simulation,
    scenario,
    csv,
    rampUsers,
    StringBody,
} from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

const filename = "mock/mock_data_postwithref.csv";

export default simulation((setUp) => {
    const feeder = csv(filename).random();

    const users = scenario("Users")
        .feed(feeder)
        .exec(
            http("Add Post with Reference")
                .post("/postwithref")
                .body(StringBody('{"title": "#{title}", "content": "#{content}", "referenceLinkURL": "#{referenceLinkURL}"}'))
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

    setUp(users.injectOpen(rampUsers(10000).during(1))).protocols(httpProtocol);
});
