/**
 * Test runner
 */

// Dependencies
import {
    LinkedListNode
} from '../LinkedListNode.mjs'
import {
    ok,
    notEqual,
    equal
} from 'assert';
import {
    logInfo,
    logSuccess,
    logError
} from '../utils/index.mjs'


// Application Logic for the test runner
let _app = {}

// Container for the test runner
_app.tests = {
    'unit': {

    }
}

// Assert that we can create a LinkedList Node
_app.tests.unit['Should create an instance of a linked list node'] = function (done) {
    let node = new LinkedListNode(1, null)
    equal(node, null, 'Is not equal to null')
}


// Count number of test
_app.countTests = function () {
    let counter = 0;
    for (const key in _app.tests) {
        if (Object.hasOwnProperty(key)) {
            let subTests = _app.tests[key]
            for (const key in subTests) {
                if (Object.hasOwnProperty(key)) {
                    counter++;

                }
            }

        }
    }

    return counter;
}

_app.productTestReport = function (limit, success, errors) {
    console.log("");
    console.log("----------BEGIN TEST REPORT--------------");
    console.log("");
    console.log("Total Tests:", limit);
    console.log("Pass:", success);
    console.log("Fail:", errors.length)

    // If there are errors print them in detail
    if (errors.length > 0) {
        console.log("----------BEGIN ERROR DETAILS--------------");
        console.log("");

        errors.forEach(function (testError) {
            logError(testError.name)
            console.log(testError.error);
            console.log("");
        })
        console.log("----------END ERROR DETAILS--------------");
    }

    console.log("");
    console.log("----------END TEST REPORT--------------");
}

_app.runTests = function () {
    let errors = [];
    let success = 0;

    let limit = _app.countTests();
    let counter = 0;

    for (const key in _app.tests) {
        if (Object.hasOwnProperty(key)) {
            const subTests = _app.tests[key];
            for (const testName in subTests) {
                if (Object.hasOwnProperty(testName)) {
                    var tmpTestName = testName
                    let testValue = subTests[testName]

                    // Call the test 
                    try {
                        testValue(function () {
                            // If it calls back without throwing then it succeeded
                            // So log it in green
                            logSuccess(tmpTestName);
                            counter++;
                            success++;
                            if (counter == limit) {
                                _app.productTestReport(limit, success, errors)
                            }

                        })

                    } catch (error) {
                        // If it throws then it fails
                        // So capture the error thrown and log it in red
                        errors.push(({
                            'name': testName,
                            'error': e
                        }))
                        logError(tmpTestName);
                        counter++;
                        if (counter == limit) {
                            _app.productTestReport(limit, success, errors)
                        }
                    }

                }
            }
        }
    }
}

_app.runTests()