var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1000",
        "ok": "634",
        "ko": "366"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "105"
    },
    "maxResponseTime": {
        "total": "1819",
        "ok": "1819",
        "ko": "1816"
    },
    "meanResponseTime": {
        "total": "887",
        "ok": "742",
        "ko": "1137"
    },
    "standardDeviation": {
        "total": "542",
        "ok": "536",
        "ko": "453"
    },
    "percentiles1": {
        "total": "856",
        "ok": "675",
        "ko": "1235"
    },
    "percentiles2": {
        "total": "1371",
        "ok": "1243",
        "ko": "1512"
    },
    "percentiles3": {
        "total": "1712",
        "ok": "1657",
        "ko": "1750"
    },
    "percentiles4": {
        "total": "1800",
        "ok": "1796",
        "ko": "1806"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 385,
    "percentage": 38.5
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 63,
    "percentage": 6.3
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 186,
    "percentage": 18.6
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 366,
    "percentage": 36.6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.33",
        "ok": "211.33",
        "ko": "122"
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
        "total": "1000",
        "ok": "634",
        "ko": "366"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "105"
    },
    "maxResponseTime": {
        "total": "1819",
        "ok": "1819",
        "ko": "1816"
    },
    "meanResponseTime": {
        "total": "887",
        "ok": "742",
        "ko": "1137"
    },
    "standardDeviation": {
        "total": "542",
        "ok": "536",
        "ko": "453"
    },
    "percentiles1": {
        "total": "856",
        "ok": "675",
        "ko": "1235"
    },
    "percentiles2": {
        "total": "1371",
        "ok": "1243",
        "ko": "1512"
    },
    "percentiles3": {
        "total": "1712",
        "ok": "1657",
        "ko": "1750"
    },
    "percentiles4": {
        "total": "1800",
        "ok": "1796",
        "ko": "1806"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 385,
    "percentage": 38.5
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 63,
    "percentage": 6.3
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 186,
    "percentage": 18.6
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 366,
    "percentage": 36.6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.33",
        "ok": "211.33",
        "ko": "122"
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
