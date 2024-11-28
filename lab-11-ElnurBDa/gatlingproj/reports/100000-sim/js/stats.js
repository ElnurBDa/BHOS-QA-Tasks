var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "100000",
        "ok": "32750",
        "ko": "67250"
    },
    "minResponseTime": {
        "total": "494",
        "ok": "494",
        "ko": "1105"
    },
    "maxResponseTime": {
        "total": "97486",
        "ok": "95965",
        "ko": "97486"
    },
    "meanResponseTime": {
        "total": "60290",
        "ok": "38276",
        "ko": "71011"
    },
    "standardDeviation": {
        "total": "27290",
        "ok": "23199",
        "ko": "22236"
    },
    "percentiles1": {
        "total": "65611",
        "ok": "36137",
        "ko": "77913"
    },
    "percentiles2": {
        "total": "87233",
        "ok": "52275",
        "ko": "90132"
    },
    "percentiles3": {
        "total": "95283",
        "ok": "82119",
        "ko": "95355"
    },
    "percentiles4": {
        "total": "96403",
        "ok": "93671",
        "ko": "96503"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 124,
    "percentage": 0.124
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 249,
    "percentage": 0.249
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 32377,
    "percentage": 32.377
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 67250,
    "percentage": 67.25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "877.19",
        "ok": "287.28",
        "ko": "589.91"
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
        "ok": "32750",
        "ko": "67250"
    },
    "minResponseTime": {
        "total": "494",
        "ok": "494",
        "ko": "1105"
    },
    "maxResponseTime": {
        "total": "97486",
        "ok": "95965",
        "ko": "97486"
    },
    "meanResponseTime": {
        "total": "60290",
        "ok": "38276",
        "ko": "71011"
    },
    "standardDeviation": {
        "total": "27290",
        "ok": "23199",
        "ko": "22236"
    },
    "percentiles1": {
        "total": "65614",
        "ok": "36184",
        "ko": "78138"
    },
    "percentiles2": {
        "total": "87186",
        "ok": "52312",
        "ko": "90132"
    },
    "percentiles3": {
        "total": "95283",
        "ok": "82052",
        "ko": "95355"
    },
    "percentiles4": {
        "total": "96403",
        "ok": "93671",
        "ko": "96503"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 124,
    "percentage": 0.124
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 249,
    "percentage": 0.249
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 32377,
    "percentage": 32.377
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 67250,
    "percentage": 67.25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "877.19",
        "ok": "287.28",
        "ko": "589.91"
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
