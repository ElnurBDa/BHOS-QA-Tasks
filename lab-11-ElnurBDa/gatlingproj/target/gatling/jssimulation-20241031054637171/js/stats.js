var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "-",
        "ko": "105"
    },
    "maxResponseTime": {
        "total": "16425",
        "ok": "-",
        "ko": "16425"
    },
    "meanResponseTime": {
        "total": "3959",
        "ok": "-",
        "ko": "3959"
    },
    "standardDeviation": {
        "total": "2476",
        "ok": "-",
        "ko": "2476"
    },
    "percentiles1": {
        "total": "3300",
        "ok": "-",
        "ko": "3301"
    },
    "percentiles2": {
        "total": "4680",
        "ok": "-",
        "ko": "4679"
    },
    "percentiles3": {
        "total": "8475",
        "ok": "-",
        "ko": "8475"
    },
    "percentiles4": {
        "total": "9953",
        "ok": "-",
        "ko": "9953"
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
    "count": 10000,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "555.56",
        "ok": "-",
        "ko": "555.56"
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
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "-",
        "ko": "105"
    },
    "maxResponseTime": {
        "total": "16425",
        "ok": "-",
        "ko": "16425"
    },
    "meanResponseTime": {
        "total": "3959",
        "ok": "-",
        "ko": "3959"
    },
    "standardDeviation": {
        "total": "2476",
        "ok": "-",
        "ko": "2476"
    },
    "percentiles1": {
        "total": "3301",
        "ok": "-",
        "ko": "3300"
    },
    "percentiles2": {
        "total": "4680",
        "ok": "-",
        "ko": "4680"
    },
    "percentiles3": {
        "total": "8475",
        "ok": "-",
        "ko": "8475"
    },
    "percentiles4": {
        "total": "9953",
        "ok": "-",
        "ko": "9953"
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
    "count": 10000,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "555.56",
        "ok": "-",
        "ko": "555.56"
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