// The os (Operating System) module provides information about the host operating system, such as CPU, memory, architecture, hostname, and more.

// It is super useful for:

// Gathering system-level data

// Writing cross-platform tools

// Performance monitoring

// Logging environment information


const os = require('os');

console.log('Hostname:', os.hostname());
console.log('OS Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU Info:', os.cpus().length, 'cores');
console.log('Free Memory:', os.freemem() / 1024 / 1024, 'MB');
console.log('Total Memory:', os.totalmem() / 1024 / 1024, 'MB');
console.log('Uptime (seconds):', os.uptime());
console.log('User Info:', os.userInfo());
console.log('Home Directory:', os.homedir());
console.log('Network Interfaces:', os.networkInterfaces());
