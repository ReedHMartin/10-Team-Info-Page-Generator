// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Import classes and helper functions
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const renderEmployeeCard = require('./src/renderCards');
