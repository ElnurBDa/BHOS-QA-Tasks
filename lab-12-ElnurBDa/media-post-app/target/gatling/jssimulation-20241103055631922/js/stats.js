var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12321",
        "ok": "12321",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3971",
        "ok": "3971",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2338",
        "ok": "2338",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3476",
        "ok": "3475",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5415",
        "ok": "5411",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9174",
        "ok": "9174",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12207",
        "ok": "12207",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 296,
    "percentage": 2.96
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 422,
    "percentage": 4.22
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9282,
    "percentage": 92.82000000000001
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "714.29",
        "ok": "714.29",
        "ko": "-"
    }
},
contents: {
"req_add-post--1230428929": {
        type: "REQUEST",
        name: "Add Post",
path: "Add Post",
pathFormatted: "req_add-post--1230428929",
stats: {
    "name": "Add Post",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12321",
        "ok": "12321",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3971",
        "ok": "3971",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2338",
        "ok": "2338",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3475",
        "ok": "3475",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5411",
        "ok": "5411",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9174",
        "ok": "9174",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12207",
        "ok": "12207",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 296,
    "percentage": 2.96
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 422,
    "percentage": 4.22
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9282,
    "percentage": 92.82000000000001
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "714.29",
        "ok": "714.29",
        "ko": "-"
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
