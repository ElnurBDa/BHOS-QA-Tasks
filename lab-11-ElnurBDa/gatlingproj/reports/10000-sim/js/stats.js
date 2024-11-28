var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "6067",
        "ko": "3933"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "332"
    },
    "maxResponseTime": {
        "total": "23532",
        "ok": "23508",
        "ko": "23532"
    },
    "meanResponseTime": {
        "total": "8435",
        "ok": "6865",
        "ko": "10856"
    },
    "standardDeviation": {
        "total": "5535",
        "ok": "5391",
        "ko": "4839"
    },
    "percentiles1": {
        "total": "7956",
        "ok": "5508",
        "ko": "10222"
    },
    "percentiles2": {
        "total": "12217",
        "ok": "10484",
        "ko": "13990"
    },
    "percentiles3": {
        "total": "17009",
        "ok": "16636",
        "ko": "17392"
    },
    "percentiles4": {
        "total": "23224",
        "ok": "23066",
        "ko": "23328"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 321,
    "percentage": 3.2099999999999995
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 313,
    "percentage": 3.1300000000000003
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 5433,
    "percentage": 54.33
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3933,
    "percentage": 39.33
},
    "meanNumberOfRequestsPerSecond": {
        "total": "400",
        "ok": "242.68",
        "ko": "157.32"
    }
},
contents: {
"req_register-user--650051800": {
        type: "REQUEST",
        name: "Register User",
path: "Register User",
pathFormatted: "req_register-user--650051800",
stats: {
    "name": "Register User",
    "numberOfRequests": {
        "total": "10000",
        "ok": "6067",
        "ko": "3933"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "332"
    },
    "maxResponseTime": {
        "total": "23532",
        "ok": "23508",
        "ko": "23532"
    },
    "meanResponseTime": {
        "total": "8435",
        "ok": "6865",
        "ko": "10856"
    },
    "standardDeviation": {
        "total": "5535",
        "ok": "5391",
        "ko": "4839"
    },
    "percentiles1": {
        "total": "7956",
        "ok": "5508",
        "ko": "10235"
    },
    "percentiles2": {
        "total": "12218",
        "ok": "10477",
        "ko": "13990"
    },
    "percentiles3": {
        "total": "17009",
        "ok": "16636",
        "ko": "17392"
    },
    "percentiles4": {
        "total": "23224",
        "ok": "23066",
        "ko": "23328"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 321,
    "percentage": 3.2099999999999995
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 313,
    "percentage": 3.1300000000000003
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 5433,
    "percentage": 54.33
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3933,
    "percentage": 39.33
},
    "meanNumberOfRequestsPerSecond": {
        "total": "400",
        "ok": "242.68",
        "ko": "157.32"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
