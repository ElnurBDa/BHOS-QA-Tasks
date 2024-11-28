var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "100000",
        "ok": "0",
        "ko": "100000"
    },
    "minResponseTime": {
        "total": "312",
        "ok": "-",
        "ko": "312"
    },
    "maxResponseTime": {
        "total": "69933",
        "ok": "-",
        "ko": "69933"
    },
    "meanResponseTime": {
        "total": "40016",
        "ok": "-",
        "ko": "40016"
    },
    "standardDeviation": {
        "total": "19338",
        "ok": "-",
        "ko": "19338"
    },
    "percentiles1": {
        "total": "41592",
        "ok": "-",
        "ko": "41575"
    },
    "percentiles2": {
        "total": "58632",
        "ok": "-",
        "ko": "58638"
    },
    "percentiles3": {
        "total": "67121",
        "ok": "-",
        "ko": "67122"
    },
    "percentiles4": {
        "total": "68977",
        "ok": "-",
        "ko": "68977"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 100000,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "840.34",
        "ok": "-",
        "ko": "840.34"
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
        "total": "100000",
        "ok": "0",
        "ko": "100000"
    },
    "minResponseTime": {
        "total": "312",
        "ok": "-",
        "ko": "312"
    },
    "maxResponseTime": {
        "total": "69933",
        "ok": "-",
        "ko": "69933"
    },
    "meanResponseTime": {
        "total": "40016",
        "ok": "-",
        "ko": "40016"
    },
    "standardDeviation": {
        "total": "19338",
        "ok": "-",
        "ko": "19338"
    },
    "percentiles1": {
        "total": "41591",
        "ok": "-",
        "ko": "41589"
    },
    "percentiles2": {
        "total": "58633",
        "ok": "-",
        "ko": "58629"
    },
    "percentiles3": {
        "total": "67122",
        "ok": "-",
        "ko": "67122"
    },
    "percentiles4": {
        "total": "68977",
        "ok": "-",
        "ko": "68977"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 100000,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "840.34",
        "ok": "-",
        "ko": "840.34"
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
