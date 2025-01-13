const mockDatabase = {
    challenges: [
        {
            id: '65feaac34c7c0fa50a47fb3e',
            title: 'factorial',
            category: 'Math',
            level: 'Hard',
            tests: [
                { inputs: [{ name: 'n', value: 5 }], output: 120 },
                { inputs: [{ name: 'n', value: 0 }], output: 1 },
            ],
        },
    ],
};

// Mock grader function (this would typically be a call to a real code execution service)
const mockGrader = (code, lang, tests) => {
    const results = tests.map((test) => {
        const input = test.inputs[0].value; // Assume a single input for simplicity
        try {
            let result;
            if (lang === 'py') {
                // Mock Python execution
                eval(`function factorial(n) { ${code.replace('def factorial', 'return function')} }`);
                const result = factorial(input);
                return { passed: result === test.output };
            } else if (lang === 'js') {
                eval(`function factorial(n) { ${code.replace('def factorial', 'return function')} }`);
                eval(code);
                const result = factorial(input);
                return { passed: result === test.output };
            }
        } catch (error) {
            return { passed: false, error: error.message };
        }
    });

    if (results.every((result) => result.passed)) {
        return { status: 'success', message: 'All tests passed!' };
    } else {
        // Return failure message with details if some tests failed
        return {
            status: 'failed',
            message: 'Some tests failed',
            results: results,
        };
    }
};

// Submission handler
const submitCode = (req, res) => {
    const { challenge_id, lang, code } = req.body;

    // Find the challenge
    const challenge = mockDatabase.challenges.find((c) => c.id === challenge_id);
    if (!challenge) {
        return res.status(404).json({ message: 'Challenge not found' });
    }

    // Grade the submission
    const gradingResult = mockGrader(code, lang, challenge.tests);

    res.status(200).json(gradingResult);
};

module.exports = {
    submitCode,
};
