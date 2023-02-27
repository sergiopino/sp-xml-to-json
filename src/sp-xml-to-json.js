#!/usr/bin/env node

const xml2js = require('xml2js');

// Read the XML from the command line arguments
const xml = process.argv[2];

// If no XML input was provided, show a usage message
if (!xml) {
    console.log('Usage: sp-xml-to-json <xml>');
    process.exit(1);
}

// Parse the XML and convert it to JSON
xml2js.parseString(xml, { mergeAttrs: true ,explicitArray: false}, (err, result) => {
    if (err) {
        console.error('Error converting XML to JSON:', err);
    } else {
        // Print the JSON to the console
        console.log(JSON.stringify(result));
    }
});
